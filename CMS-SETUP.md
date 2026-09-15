# Sveltia CMS — Guide d'installation (une fois, ~20 minutes)

Éditeur de contenu pour Dr Bassir : `https://vetclinic.omnirise.dev/admin`
Il modifie **coordonnées, horaires, avis Google, SEO** en formulaires.
Chaque enregistrement = 1 commit GitHub = 1 build Cloudflare automatique.

## Ce qui est déjà en place (dans ce repo)

- `public/admin/index.html` — la page CMS (Sveltia chargé depuis unpkg)
- `public/admin/config.yml` — formulaire complet (coordonnées ×1, SEO + horaires + avis ×5 langues)
- `content/site.json` — données non traduites (téléphones, WhatsApp, email, adresse, note Google)
- `content/editable.{fr,en,ru,ar,es}.json` — SEO, horaires, avis par langue
- `src/content.ts` — chargeur typé ; `src/i18n/index.tsx` fusionne JSON > dictionnaires au runtime
- `plugins/extract-content.mjs` — régénère les JSON depuis les dictionnaires (déjà fait ; ne plus relancer sauf récupération)

Le build `tsc -b` valide la forme des JSON : une erreur de contenu casse le
build (visible dans Cloudflare), jamais le site en production.

## Étapes restantes (vous, une seule fois)

### 1. Déployer le Worker d'authentification (~5 min)

Sveltia (backend GitHub) a besoin d'un relais OAuth :

```bash
git clone https://github.com/sveltia/sveltia-cms-auth && cd sveltia-cms-auth
npx wrangler deploy
# puis : npx wrangler secret put GITHUB_CLIENT_ID
#        npx wrangler secret put GITHUB_CLIENT_SECRET
```

Notez l'URL du Worker (ex. `https://sveltia-cms-auth.<compte>.workers.dev`).

### 2. Créer l'OAuth App GitHub (~3 min)

GitHub → Settings → Developer settings → OAuth Apps → New:

- **Homepage URL** : `https://vetclinic.omnirise.dev`
- **Callback URL** : `https://<url-du-worker>/callback`

Copier Client ID + secret dans les secrets du Worker (étape 1).

### 3. Brancher l'endpoint (~1 min)

Dans `public/admin/config.yml`, remplacer :

```yaml
  auth_endpoint: https://CHANGEME-auth.workers.dev/auth
```

par l'URL réelle du Worker, puis commit + push.

### 4. Compte GitHub pour Dr Bassir (~5 min)

- Il crée un compte gratuit sur github.com (fonctionne depuis l'iPad)
- Vous l'invitez : repo → Settings → Collaborators → add (son pseudo)
- Il accepte l'invitation par email

## Utilisation (Dr Bassir)

1. Ouvrir `https://vetclinic.omnirise.dev/admin` dans Safari
2. « Login with GitHub » → son compte
3. Modifier (ex. *Coordonnées de la clinique* → changer le n° d'urgence)
4. **Enregistrer** → le bouton « Publier » fait le commit
5. Attendre ~2 min (build Cloudflare) → le site est à jour

Images : glisser-déposer dans un champ image → uploadé dans `public/img/uploads/`.
(Les photos mises en page — héros, chirurgie — restent gérées par vous :
elles passent par le pipeline AVIF `plugins/generate-images.mjs`.)

## Compte à rebours des pièges connus

- **Nom de branche** : le repo est sur `main` — Sveltia le détecte seul, rien à faire.
- **Fichier verrouillé** : si deux personnes éditent en même temps, le second
  enregistrement crée une « entrée de brouillon » — pas de perte de données.
- **Le site est cassé après un enregistrement ?** Impossible en production :
  si le JSON est mal formé, le build échoue et l'ancien site reste en ligne.
  Corriger dans Sveltia (ou revert le commit sur GitHub) et republier.
