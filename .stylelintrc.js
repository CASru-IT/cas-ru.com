module.exports = {
  extends: [
    "stylelint-config-recess-order",
    "stylelint-config-standard-scss",
  ],
  plugins:["stylelint-scss"],
  rules: {
    // ::before, ::afterのコロンを2つにする
    "selector-pseudo-element-colon-notation": "double",
    // クラス名でアンパサンド（&）は禁止（&:hoverなどはOK）
    "scss/selector-no-union-class-name": true,
    // シングルクォーテーションに統一
    "string-quotes": "double",
  },
  ignoreFiles: ["**/node_modules/**"],
};
