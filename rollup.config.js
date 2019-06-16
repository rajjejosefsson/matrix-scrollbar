import path from "path";
import {
  bundles,
  plugins,
  output,
  external,
  input,
  OUTPUT_DIR
} from "./scripts/rollup.common";

export default bundles.map(format => ({
  input,
  external,
  plugins: [...plugins],
  output: {
    ...output,
    file: path.join(OUTPUT_DIR, `index.${format}.js`),
    format
  }
}));
