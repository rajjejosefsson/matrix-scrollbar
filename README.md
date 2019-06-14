# Matrix Scrollbar 🔭👩‍🚀

> A pixel perfect scrollbar (literally)
> with the help of Matrix3D

## Supported Frameworks (Currently)

- React
- VanillaJS

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="http://iconshow.me/media/images/Application/mozilla-icons/png/48/internet_explorer.png" alt="IE" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| last 2 versions | last 2 versions | last 2 versions | last 2 versions | <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flat_cross_icon.svg/1024px-Flat_cross_icon.svg.png" height="20" />                                            |

---

## Example

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

## Props

| key                | description                                 | default  |
| ------------------ | ------------------------------------------- | -------- |
| `autoHideThumb`    | Defines how to map the values into the grid | false    |
| `minThumbHeight`   | number                                      | 30       |
| `viewportSelector` | if the first element is not the viewport    | optional |
| `totalHeight`      | number                                      | optional |

