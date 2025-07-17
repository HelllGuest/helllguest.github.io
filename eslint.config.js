// ESLint v9+ config migrated from .eslintrc.json
export default [
  {
    ignores: [
      'assets/js/jquery-3.7.1.min.js',
      'assets/js/jquery.fbmessenger.min.js',
    ],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        browser: true,
        $: 'readonly',
        jQuery: 'readonly',
      },
    },
    plugins: {
      security: require('eslint-plugin-security'),
    },
    rules: {
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-script-url': 'warn',
      'security/detect-object-injection': 'warn',
    },
  },
]; 