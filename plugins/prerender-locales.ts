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
          `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`,
        )

        /* ---------- shells head-only pour les bots ---------- */
        // dist/index.html actuel = shell FR racine. On dérive les 11 autres.
        const basePath = join(dist, 'index.html')
        if (!existsSync(basePath)) return
        const base = await import('node:fs').then((m) => m.readFileSync(basePath, 'utf8'))

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
            )
            const dir = join(dist, path.replace(/^\//, '').replace(/\/$/, ''))
            mkdirSync(dir, { recursive: true })
            writeFileSync(join(dir, 'index.html'), shell)
            shellCount++
          }
        }

        // 404.html à la racine (fallback Workers)
        const nf = buildShell(base, 'fr', '/404', ROUTE_PATHS.notfound, SITE_URL, LOCALES, LOCALE_META)
        writeFileSync(join(dist, '404.html'), nf)

        console.log(`[prerender] ${shellCount} route shells + 404.html + sitemap.xml (${urlCount} urls)`)
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
    // canonical self-referencing (inexistant dans index.html source → injecté avant </head>)
    .replace('</head>', `<link rel="canonical" href="${siteUrl}${path}">${hreflangBlock}\n  </head>`)
  // OG locale
  html = html.replace(
    /<meta property="og:locale" content="[^"]*">/,
    `<meta property="og:locale" content="${lang.replace('-', '_')}">`,
  )
  return html
}
