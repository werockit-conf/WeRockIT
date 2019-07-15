module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "plugin:prettier/recommended",   // turns off all ESLINT rules that are unnecessary due to Prettier or might conflict with Prettier. 
    "@vue/prettier"
  ],
  plugins: ['vue', 'prettier'],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/max-attributes-per-line": "off",
    'prettier/prettier': [            // customizing prettier rules
      'error',
      {
        singleQuote: true,
        semi: false,
        tabWidth: 2,
        trailingComma: "es5",
        tabWidth: 2,
        printWidth: 120,
        jsxBracketSameLine: false
      },
    ],
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
