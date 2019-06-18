# @matrix-scrollbar/inferno 🔭👩‍🚀

## Installation

This module is distributed via [npm](https://www.npmjs.com/package/@matrix-scrollbar/inferno) which is bundled with node and should be installed as one of your project's `dependencies`:

```cmd
npm install --save @matrix-scrollbar/inferno
```

> This package also depends on `Inferno` and `inferno-compat`. Please make sure you
> have it installed as well.

## Example

> [Try it out in the browser](https://codesandbox.io/s/matrix-scrollbarinferno-cuslj)

```jsx
import { MatrixScrollbar } from "@MatrixScrollbar/inferno";

function List() {
  return (
    <MatrixScrollbar>
      <ul>
        <li>1</li>
        <li>...</li>
        ...
      </ul>
    </MatrixScrollbar>
  );
}
```

---

## Props/Settings

| key              | default  | description                                      |
| ---------------- | -------- | ------------------------------------------------ |
| `autoHideThumb`  | true     | boolean                                          |
| `minThumbHeight` | 30       | number                                           |
| `viewportId`     | optional | string, if the first element is not the viewport |
| `totalHeight`    | optional | number: rare cases to help with the calculation  |
| `className`      | optional | string: setting class to the most outer element  |

## Styling

| class                    | active (appended)               |
| ------------------------ | ------------------------------- |
| `matrixScrollbar__thumb` | `matrixScrollbar__thumb-active` |
| `matrixScrollbar__rail`  | `matrixScrollbar__rail-active`  |
