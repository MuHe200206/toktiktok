module.exports = {
  extends: [
    'react-app',
    'react-app/jest'
  ],
  rules: {
    // Make these warnings instead of errors for deployment
    '@typescript-eslint/no-unused-vars': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    
    // Keep other rules as they are
    'no-console': 'warn',
    'no-debugger': 'warn'
  },
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  }
};
