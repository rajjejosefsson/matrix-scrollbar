# Matrix Scrollbar 🔭👩‍🚀

> A pixel perfect scrollbar
> with the help of [Matrix3D](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d)

This is a scrollbar that replicates the browsers native scrollbars performance and pixel perfection to it's maximum. [and you get this with only 10kB](https://bundlephobia.com/result?p=@matrix-scrollbar/core)

## Supported Frameworks

| Packages  | Github                                                                                                       | Demo                                                                  |
| --------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| React     | [@matrix-scrollbar/react](https://github.com/rajjejosefsson/matrix-scrollbar/tree/master/packages/react)     | [CodeSandbox](https://codesandbox.io/s/matrix-scrollbarreact-v3pxl)   |
| Preact    | [@matrix-scrollbar/preact](https://github.com/rajjejosefsson/matrix-scrollbar/tree/master/packages/preact)   | [CodeSandbox](https://codesandbox.io/s/matrix-scrollbarpreact-7l33p)  |
| Inferno   | [@matrix-scrollbar/inferno](https://github.com/rajjejosefsson/matrix-scrollbar/tree/master/packages/inferno) | [CodeSandbox](https://codesandbox.io/s/matrix-scrollbarinferno-cuslj) |
| Vue       | [@matrix-scrollbar/vue](https://github.com/rajjejosefsson/matrix-scrollbar/tree/master/packages/vue)         | [CodeSandbox](https://codesandbox.io/s/matrix-scrollbarvue-cm25d)     |
| VanillaJS | [@matrix-scrollbar/core](https://github.com/rajjejosefsson/matrix-scrollbar/tree/master/packages/core)       | [CodeSandbox](https://codesandbox.io/s/matrix-scrollbarcore-tn2r0)    |

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="http://iconshow.me/media/images/Application/mozilla-icons/png/48/internet_explorer.png" alt="IE" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| last 2 versions                                                                                                                                                                                       | last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                               | <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flat_cross_icon.svg/1024px-Flat_cross_icon.svg.png" height="20" />                                                              |

---

## Examples

### React

```js
import { MatrixScrollbar } from "@matrix-scrollbar/react";

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
<script src="https://unpkg.com/@matrix-scrollbar/core@0.0.14/lib/umd/index.js"></script>;

// you simply have to create an instance of the MatrixScrollbar
var matrixScrollbar = new MatrixScrollbar({
  scrollViewport: viewport,
  autoHideThumb: false,
});

// ...

/*************************************
  API for native JavaScript
**************************************/

// Should be called when you know that the content have changed and you need to update the scrollbar and the scrollbars thumb size
matrixScrollbar.recount();

// Don't forget to remove the event listeners
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
