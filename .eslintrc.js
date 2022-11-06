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
        "react",
    ],
    "settings": {
        "react": {
          "version": "detect"
        }
      },
    "rules": {
        "react/react-in-jsx-scope": "off",
        quotes: ['warn', 'single', { avoidEscape: true }],
    }
}