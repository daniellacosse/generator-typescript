const presets = [
  ["@babel/preset-env", { targets: { esmodules: true } }],
  "@babel/preset-typescript"
];
const plugins = [
  [
    "module-resolver",
    {
      extensions: [".ts"],
      root: "."
    }
  ],
  "convert-to-json"
];

module.exports = require("babel-jest").createTransformer({ presets, plugins });
