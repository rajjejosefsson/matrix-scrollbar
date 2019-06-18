import path from "path";
import getPlugins from "./scripts/plugins";

export const pkgRootPath = process.cwd();
export const pkgJSON = require(path.join(pkgRootPath, "package.json"));

const {
  version,
  rollup: rollupConfig = {},
  dependencies = {},
  devDependencies = {},
  peerDependencies = {}
} = pkgJSON;

export const bundles = ["esm", "cjs", "umd"];
export const isTS = !!pkgJSON.types;
export const OUTPUT_DIR = path.join(pkgRootPath, "lib");
export const input = path.join(pkgRootPath, `src/index.${isTS ? "ts" : "js"}`);

export const banner = `/*
  @license
	matrix-scrollbar v${pkgJSON.version}

  https://github.com/rajjejosefsson/matrix-scrollbar
	Released under the MIT License.
*/`;

function exclusionFilter(name) {
  return !(rollupConfig.bundledDependencies || []).includes(name);
}

// All dependencies are excluded unless specified in bundledDependencies
const deps = Object.assign({}, devDependencies, peerDependencies, dependencies);
const external = Object.keys(deps)
  .filter(exclusionFilter)
  .filter(function(elem, index, self) {
    return index === self.indexOf(elem);
  });

const plugins = getPlugins({ minify: true });

export default bundles.map(format => ({
  input,
  external,
  plugins,
  output: {
    globals: rollupConfig.moduleGlobals,
    banner,
    name: "MatrixScrollbar",
    file: path.join(OUTPUT_DIR, format, `index.js`),
    format
  }
}));
