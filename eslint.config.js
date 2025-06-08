// eslint.config.js
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
  // Base configuration for TypeScript files
  ...tseslint.configs.recommended,
  
  // Configuration for React
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react: pluginReact,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // Not needed with modern React
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
  },
  
  // Ignore files
  {
    ignores: [
        'node_modules/', 
        'dist/', 
        '.vscode/', 
        '.github/'
    ],
  },
];