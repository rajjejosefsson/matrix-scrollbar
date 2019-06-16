import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import filesize from "rollup-plugin-filesize";
import postcss from "rollup-plugin-postcss";
import cssnano from "cssnano";
import postcssPresetEnv from "postcss-preset-env";
import customProperties from "postcss-custom-properties";
import path from "path";

export const PACKAGE_ROOT_PATH = process.cwd();
export const PKG_JSON = require(path.join(PACKAGE_ROOT_PATH, "package.json"));
export const external = Object.keys(PKG_JSON.peerDependencies || {});
export const bundles = ["es", "cjs", "umd"];
export const extensions = [".js", ".jsx", ".ts", ".tsx"];
export const isTypescript = !!PKG_JSON.types;

export const input = path.join(
  PACKAGE_ROOT_PATH,
  `src/index.${isTypescript ? "ts" : "js"}`
);
export const OUTPUT_DIR = path.join(PACKAGE_ROOT_PATH, "lib");

let babelRc = {};

// if babelRc is defined lets extend it
try {
  babelRc = require(path.join(PACKAGE_ROOT_PATH, ".babelrc"));
} catch (e) {}

export const plugins = [
  resolve({ extensions, mainFields: ["main"] }), // we only want to use main not esm here to include it

  commonjs(),

  babel({
    extensions,
    include: ["src/**/*"],
    rootMode: "upward",
    ...babelRc
  }),

  postcss({
    plugins: [
      postcssPresetEnv({
        features: {
          "custom-properties": {
            preserve: false
          }
        }
      }),
      customProperties(),
      cssnano()
    ]
  }),

  terser(),

  filesize()
].filter(Boolean);

export const banner = `/*
  @license
	matrix-scrollbar v${PKG_JSON.version}

  https://github.com/rajjejosefsson/matrix-scrollbar
	Released under the MIT License.
*/`;

export const output = {
  banner,
  name: "MatrixScrollbar"
};
