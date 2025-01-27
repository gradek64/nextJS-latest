import pluginJs from '@eslint/js'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import pluginYaml from 'eslint-plugin-yaml'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  pluginReactConfig,
  pluginYaml.configs.recommended,
  {
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      'no-console': 'error',
      'no-restricted-imports': [
        'error',
        {
          name: '@playwright/test',
          message: 'Please use ./tests/lib/fixture instead.'
        },
        {
          name: '@testing-library/react',
          message: 'Please use @/lib/@testing-library'
        },
        {
          name: '@sainsburys-tech/bolt',
          message: 'Please use @sainsburys-tech/fable instead'
        }
      ],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true
        }
      ],
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: {
            attributes: false
          }
        }
      ]
    }
  },
  {
    ignores: ['.next/', 'extension', 'playwright-report', 'newrelic.js', '*.mjs', 'test-results']
  }
]
