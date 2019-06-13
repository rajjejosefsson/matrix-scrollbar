import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';
import postcssPresetEnv from 'postcss-preset-env';
import customProperties from 'postcss-custom-properties';
import path from 'path';

const PACKAGE_ROOT_PATH = process.cwd();
const INPUT_FILE = path.join(PACKAGE_ROOT_PATH, 'src/index.ts');
const OUTPUT_DIR = path.join(PACKAGE_ROOT_PATH, 'lib');
const PKG_JSON = require(path.join(PACKAGE_ROOT_PATH, 'package.json'));
const HAS_STYLE = !!PKG_JSON.style;
const bundleFormats = ['es', 'cjs'];
const extensions = ['.js', '.jsx', '.ts', '.tsx'];
let babelRc = {};

try {
  babelRc = require(path.join(PACKAGE_ROOT_PATH, '.babelrc'));
} catch (e) {}

const external = Object.keys(PKG_JSON.peerDependencies || {});

export default bundleFormats.map((format) => ({
  input: INPUT_FILE,

  external,

  plugins: [
    resolve({ extensions, mainFields: ['main'] }), // we only want to use main not esm here to include it

    commonjs(),

    babel({
      extensions,
      include: ['src/**/*'],
      rootMode: 'upward',
      ...babelRc
    }),

    HAS_STYLE &&
      postcss({
        // extract: PKG_JSON.style,
        plugins: [
          postcssPresetEnv({
            features: {
              'custom-properties': {
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
  ].filter(Boolean),

  output: {
    file: path.join(OUTPUT_DIR, `index.${format}.js`),
    format
  }
}));
