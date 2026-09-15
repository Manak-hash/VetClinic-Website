import type { Plugin } from 'vite'

/**
 * Post-build SEO packager :
 * 1. sitemap.xml — une <url> par route × locale, alternates hreflang + x-default
 * 2. robots.txt — pointe le sitemap
 * 3. shells statiques head-only pour les bots (les vraies pages sont SPA)
 *
 * Tout est manifest-driven : src/i18n/config.ts est la source unique.
 */

interface SitemapMeta {
  priority: string
  changefreq: string
}

// Miroir minimal de ROUTE_PATHS — importé dynamiquement ci-dessous pour
// rester la vraie source de vérité (pas de duplication de chemins).
export function prerenderLocalesPlugin(): Plugin {
  return {
    name: 'prerender-locales',
    apply: 'build',
    closeBundle() {
      void (async () => {
        const { execSync } = await import('node:child_process')
        const { writeFileSync, existsSync, mkdirSync } = await import('node:fs')
        const { join } = await import('node:path')

        const root = process.cwd()
        const dist = join(root, 'dist')

        // Charge le manifest via esbuild (tsconfig paths non résolus en node pur)
        execSync(
          `npx esbuild src/i18n/config.ts --bundle --format=esm --outfile=/tmp/cvm-config.mjs`,
          { cwd: root, stdio: 'pipe' },
        )
        const configPath = 'file:///tmp/cvm-config.mjs'
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const dynamicImport = new Function('p', 'return import(p)') as (p: string) => Promise<any>
        const configModule = await dynamicImport(configPath)
        const config = configModule as {
          LOCALES: readonly string[]
          LOCALE_META: Record<string, { htmlLang: string; dir: string }>
          ROUTE_PATHS: Record<string, Record<string, string>>
          SITE_URL: string
        }

        /* ---------- SSG : bundle la fonction renderRoute ---------- */
        execSync(
          `npx esbuild plugins/ssg.tsx --bundle --format=esm --jsx=automatic --loader:.css=empty --outfile=/tmp/cvm-ssg.mjs`,
          { cwd: root, stdio: 'pipe' },
        )
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const ssgModule = (await dynamicImport('file:///tmp/cvm-ssg.mjs')) as any
        const renderRoute = ssgModule.renderRoute as (p: string) => string
        /* ---------- SEO : bundle les meta traduits par route ---------- */
        execSync(
          `npx esbuild plugins/seo.tsx --bundle --format=esm --jsx=automatic --loader:.css=empty --outfile=/tmp/cvm-seo.mjs`,
          { cwd: root, stdio: 'pipe' },
        )
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const seoModule = (await dynamicImport('file:///tmp/cvm-seo.mjs')) as any
        const renderMeta = seoModule.renderMeta as (p: string) => { title: string; description: string }
        let ssrOk = 0
        const ssrFail = { n: 0 }
        const tryRender = (p: string): string => {
          try {
            const html = renderRoute(p)
            ssrOk++
            return html
          } catch (e) {
            ssrFail.n++
            console.warn(`[prerender] SSG failed for ${p} → shell vide:`, (e as Error).message)
            return ''
          }
        }

        const { LOCALES, LOCALE_META, ROUTE_PATHS, SITE_URL } = config

        const SITEMAP_META: Record<string, SitemapMeta> = {
          home: { priority: '1.0', changefreq: 'monthly' },
          services: { priority: '0.9', changefreq: 'monthly' },
          equipe: { priority: '0.7', changefreq: 'monthly' },
          faq: { priority: '0.8', changefreq: 'monthly' },
          contact: { priority: '0.8', changefreq: 'yearly' },
          zones: { priority: '0.8', changefreq: 'monthly' },
          zoneMaarif: { priority: '0.8', changefreq: 'monthly' },
          zoneGauthier: { priority: '0.8', changefreq: 'monthly' },
          zoneAnfa: { priority: '0.8', changefreq: 'monthly' },
        }

        /* ---------- sitemap.xml ---------- */
        let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`
        let urlCount = 0
        for (const [id, paths] of Object.entries(ROUTE_PATHS) as [string, Record<string, string>][]) {
          if (id === 'notfound' || !SITEMAP_META[id]) continue
          for (const locale of LOCALES) {
            const loc = `${SITE_URL}${paths[locale]}`
            const alts = LOCALES.map(
              (l: string) =>
                `    <xhtml:link rel="alternate" hreflang="${LOCALE_META[l].htmlLang}" href="${SITE_URL}${paths[l]}"/>`,
            )
            alts.push(
              `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${paths.fr}"/>`,
            )
            xml += `  <url>\n    <loc>${loc}</loc>\n${alts.join('\n')}\n    <changefreq>${SITEMAP_META[id].changefreq}</changefreq>\n    <priority>${SITEMAP_META[id].priority}</priority>\n  </url>\n`
            urlCount++
          }
        }
        xml += `</urlset>\n`
        writeFileSync(join(dist, 'sitemap.xml'), xml)

        /* ---------- robots.txt ---------- */
        writeFileSync(
          join(dist, 'robots.txt'),
          `User-agent: *\nAllow: /\nDisallow: /admin\nSitemap: ${SITE_URL}/sitemap.xml\n`,
        )

        /* ---------- shells pour bots + visiteurs (SSG) ---------- */
        // dist/index.html actuel = shell FR racine. On dérive les autres.
        const basePath = join(dist, 'index.html')
        if (!existsSync(basePath)) return
        let base = await import('node:fs').then((m) => m.readFileSync(basePath, 'utf8'))

        // Preload du CSS render-blocking : démarre le téléchargement immédiatement
        // (l'inlining complet a été testé — 101KB de HTML = parse 4x CPU plus coûteux
        // que le roundtrip économisé, LCP régressait).
        const cssLink = base.match(/<link rel="stylesheet"[^>]*>/)
        if (cssLink) {
          const href = cssLink[0].match(/href="([^"]+)"/)?.[1]
          if (href) {
            base = base.replace(
              cssLink[0],
              `<link rel="preload" href="${href}" as="style" />${cssLink[0]}`,
            )
          }
        }

        let shellCount = 0
        for (const [id, paths] of Object.entries(ROUTE_PATHS) as [string, Record<string, string>][]) {
          if (id === 'notfound') continue
          for (const locale of LOCALES) {
            const path = paths[locale]
            const shell = buildShell(
              base,
              locale,
              path,
              paths,
              SITE_URL,
              LOCALES,
              LOCALE_META,
              tryRender(path),
              renderMeta(path),
            )
            const dir = join(dist, path.replace(/^\//, '').replace(/\/$/, ''))
            mkdirSync(dir, { recursive: true })
            writeFileSync(join(dir, 'index.html'), shell)
            shellCount++
          }
        }

        // 404.html à la racine (fallback Workers)
        const nf = buildShell(
          base,
          'fr',
          '/404',
          ROUTE_PATHS.notfound,
          SITE_URL,
          LOCALES,
          LOCALE_META,
          tryRender(ROUTE_PATHS.notfound.fr + '/'),
          renderMeta(ROUTE_PATHS.notfound.fr + '/'),
        )
        writeFileSync(join(dist, '404.html'), nf)

        console.log(
          `[prerender] ${shellCount} route shells + 404.html + sitemap.xml (${urlCount} urls) — SSG: ${ssrOk} rendus, ${ssrFail.n} fallbacks`,
        )
      })()
    },
  }
}

function buildShell(
  base: string,
  locale: string,
  path: string,
  routePaths: Record<string, string>,
  siteUrl: string,
  locales: readonly string[],
  localeMeta: Record<string, { htmlLang: string; dir: string }>,
  body = '',
  meta = { title: '', description: '' },
): string {
  const lang = localeMeta[locale].htmlLang
  const hreflangBlock = locales
    .map(
      (l: string) =>
        `<link rel="alternate" hreflang="${localeMeta[l].htmlLang}" href="${siteUrl}${routePaths[l]}">`,
    )
    .join('') +
    `<link rel="alternate" hreflang="x-default" href="${siteUrl}${routePaths.fr}">`
  let html = base
    // lang + dir sur <html>
    .replace(/<html lang="[^"]*"[^>]*>/, `<html lang="${lang}" dir="${localeMeta[locale].dir}">`)
    // Preload du hero : utile uniquement sur la home FR — sinon Chrome log
    // « preloaded but not used » sur toutes les autres routes (Bug Lighthouse).
    .replace(/<link rel="preload" as="image"[^>]*\/>/, path === '/' ? '$&' : '')
    // canonical self-referencing (inexistant dans index.html source → injecté avant </head>)
    .replace('</head>', `<link rel="canonical" href="${siteUrl}${path}">${hreflangBlock}\n  </head>`)
  // OG locale
  html = html.replace(
    /<meta property="og:locale" content="[^"]*">/,
    `<meta property="og:locale" content="${lang.replace('-', '_')}">`,
  )
  // Title + description + OG traduits par route — sinon toutes les pages
  // partagent le title de la home (duplicate titles à l'indexation).
  // Regexes tolérantes : le HTML buildé coupe les attributs sur plusieurs
  // lignes et termine par ' />'.
  if (meta.title) {
    html = html
      .replace(/<title[^>]*>[^<]*<\/title>/, `<title>${meta.title}</title>`)
      .replace(
        /(<meta\s+name="description"[\s\S]*?content=")[^"]*(")/,
        `$1${meta.description}$2`,
      )
      .replace(
        /(<meta\s+property="og:title"[\s\S]*?content=")[^"]*(")/,
        `$1${meta.title}$2`,
      )
      .replace(
        /(<meta\s+property="og:description"[\s\S]*?content=")[^"]*(")/,
        `$1${meta.description}$2`,
      )
  }
  // SSG : HTML rendu dans #root — contenu visible avant hydratation (LCP instantané)
  if (body) {
    html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`)
  }
  return html
}
