# @matrix-scrollbar/react 🔭👩‍🚀

## Installation

This module is distributed via [npm](https://www.npmjs.com/package/@matrix-scrollbar/react) which is bundled with node and should be installed as one of your project's `dependencies`:

```cmd
npm install --save @matrix-scrollbar/react
```

> This package also depends on `React`. Please make sure you
> have it installed as well.

## Example

> [Try it out in the browser](https://codesandbox.io/s/matrix-scrollbarreact-v3pxl)

```jsx
import { MatrixScrollbar } from "@MatrixScrollbar/react";

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
