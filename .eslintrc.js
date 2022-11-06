module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react", "simple-import-sort",
        "react",
    ],
    "settings": {
        "react": {
          "version": "detect"
        }
      },
    "rules": {
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "react/react-in-jsx-scope": "off",
        quotes: ['warn', 'single', { avoidEscape: true }],
    }
}
