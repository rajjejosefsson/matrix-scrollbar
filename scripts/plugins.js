import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import nodeResolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import filesize from "rollup-plugin-filesize";
import postcss from "rollup-plugin-postcss";
import cssnano from "cssnano";
import postcssPresetEnv from "postcss-preset-env";
import customProperties from "postcss-custom-properties";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default function(options) {
  const plugins = [
    nodeResolve({ extensions, mainFields: ["main"] }), // we only want to use main not esm here to include it

    commonjs(),

    babel({
      extensions,
      include: ["src/**/*"],
      rootMode: "upward"
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

    filesize()

    // tsPlugin({
    //   abortOnError: true,
    //   cacheRoot: `.rpt2_cache_${options.env}`,
    //   check: false,
    //   clean: true,
    //   tsconfig: __dirname + '/../../../tsconfig.json' // Have absolute path to fix windows build
    // })
  ];

  if (!options.esnext) {
    // plugins.push(bublePlugin());
  }

  if (options.minify) {
    plugins.push(terser());
  }

  return plugins;
}
