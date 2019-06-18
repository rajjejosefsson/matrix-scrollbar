# Matrix Scrollbar 🔭👩‍🚀

> A pixel perfect scrollbar (literally)
> with the help of Matrix3D

## Supported Frameworks

| Packages  | Github                                                                                                       |
| --------- | ------------------------------------------------------------------------------------------------------------ |
| React     | [@matrix-scrollbar/react](https://github.com/rajjejosefsson/matrix-scrollbar/tree/master/packages/react)     |
| Preact    | [@matrix-scrollbar/preact](https://github.com/rajjejosefsson/matrix-scrollbar/tree/master/packages/preact)   |
| Inferno   | [@matrix-scrollbar/inferno](https://github.com/rajjejosefsson/matrix-scrollbar/tree/master/packages/inferno) |
| Vue       | [@matrix-scrollbar/vue](https://github.com/rajjejosefsson/matrix-scrollbar/tree/master/packages/vue)         |
| VanillaJS | [@matrix-scrollbar/core](https://github.com/rajjejosefsson/matrix-scrollbar/tree/master/packages/core)       |
| Utils     | [@matrix-scrollbar/utils](https://github.com/rajjejosefsson/matrix-scrollbar/tree/master/packages/utils)     |

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="http://iconshow.me/media/images/Application/mozilla-icons/png/48/internet_explorer.png" alt="IE" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| last 2 versions                                                                                                                                                                                       | last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                               | <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flat_cross_icon.svg/1024px-Flat_cross_icon.svg.png" height="20" />                                                              |

---

## Examples

### React

```js
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

### VanillaJS

```js
<script src="https://unpkg.com/@matrix-scrollbar/core@0.0.13/lib/index.umd.js"></script>;

// you simply have to create an instance of the MatrixScrollbar
var matrixScrollbar = new MatrixScrollbar({
  scrollViewport: viewport,
  autoHideThumb: false
});

// ...

/*************************************
  Current API let you do following:
**************************************/

// Should be called when you know that the list have changed to update the scrollbar/thumb
matrixScrollbar.recount();

// Don't forget to remove event listeners
matrixScrollbar.disconnect();
```

---

## Props/Settings

| key                | default  | description                                      |
| ------------------ | -------- | ------------------------------------------------ |
| `autoHideThumb`    | true     | boolean                                          |
| `minThumbHeight`   | 30       | number                                           |
| `viewportSelector` | optional | string, if the first element is not the viewport |
| `totalHeight`      | optional | number: rare cases to help with the calculation  |
| `className`        | optional | string: setting class to the most outer element  |

## Styling

| class                    | active (appended)               |
| ------------------------ | ------------------------------- |
| `matrixScrollbar__thumb` | `matrixScrollbar__thumb-active` |
| `matrixScrollbar__rail`  | `matrixScrollbar__rail-active`  |
