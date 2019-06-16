# @matrix-scrollbar/core 🔭👩‍🚀

## Installation

This module is distributed via [npm](https://www.npmjs.com/package/@matrix-scrollbar/core) which is bundled with node and should be installed as one of your project's `dependencies`:

```cmd
npm install --save @matrix-scrollbar/core
```

### Alternative with just a script tag

```js
<script src="https://unpkg.com/@matrix-scrollbar/core@0.0.13/lib/index.umd.js"></script>;

var matrixScrollbar = new MatrixScrollbar({ options });

// ..

// Updates the scrollbar / scroll thumb
matrixScrollbar.recount();

// Unsubscribe from all event listeners that are setup behind the scene
matrixScrollbar.disconnect();
```

## Example

> [Try it out in the browser](https://codesandbox.io/s/matrix-scrollbarcore-tn2r0)

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <script src="https://unpkg.com/@matrix-scrollbar/core@0.0.13/lib/index.umd.js"></script>

    <style>
      .list {
        border: 2px solid black;
        height: 400px;
        width: 300px;
        list-style: none;
        padding: 0;
      }

      li {
        height: 100px;
      }

      li:nth-child(odd) {
        background: #995cc92e;
      }
    </style>

    <ul class="list"></ul>

    <script>
      var viewport = document.querySelector(".list");

      new Array(100).fill(null).forEach((item, index) => {
        var li = document.createElement("li");
        li.innerText = index;
        viewport.appendChild(li);
      });

      var matrixScrollbar = new MatrixScrollbar({
        scrollViewport: viewport,
        autoHideThumb: false
      });
    </script>
  </body>
</html>

```
