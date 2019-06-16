# @matrix-scrollbar/vue 🔭👩‍🚀

## Installation

This module is distributed via npm which is bundled with node and
should be installed as one of your project's `dependencies`:

```
npm install --save @matrix-scrollbar/vue
```

> This package also depends on `vue`. Please make sure you
> have it installed as well.

## Example

> [Try it out in the browser](https://codesandbox.io/s/matrix-scrollbarvue-cm25d)

```js
<template>
  <div id="app">
    <matrix-scrollbar className="styledBox">
      <ul class="sizeOfList">
        <li
          v-for="(item, index) in items"
          :key="`item-${index}`"
          class="list-item"
        >
          {{ index }}
        </li>
      </ul>
    </matrix-scrollbar>
  </div>
</template>

<script>
import { MatrixScrollbar } from "@matrix-scrollbar/vue";

export default {
  name: "app",
  components: {
    MatrixScrollbar
  },
  data() {
    return {
      items: new Array(100).fill(null)
    };
  }
};
</script>


<style>
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .sizeOfList {
    height: 300px;
    width: 250px;
  }

  .styledBox {
    width: auto;
    height: auto;
    border: 1px solid #e8e8e8;
    background-color: white;
    display: inline-flex;
    box-shadow: 0 16px 18px -4px rgba(0, 0, 0, 0.1);
  }

  .list-item {
    min-height: 50px;
    display: flex;
    align-items: center;
    padding: 10px;
  }

  .list-item:nth-of-type(odd) {
    background-color: #995cc92e;
  }
</style>
```
