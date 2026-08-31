import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    // Singletons d'app (routeur, provider i18n, bootstrap) : ils exportent
    // des hooks/fonctions non-composants par design — le full-reload sur
    // édition y est SOUHAITABLE, la règle fast-refresh n'a pas de sens.
    files: [
      'src/router.ts',
      'src/i18n/index.tsx',
      'src/i18n/config.ts',
      'src/components/jsonld.ts',
      'src/components/Seo.tsx',
      'src/main.tsx',
    ],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
])
