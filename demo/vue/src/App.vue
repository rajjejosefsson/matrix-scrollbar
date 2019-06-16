<template>
  <div id="app">
    <div style="text-align: center">
      <img alt="Vue logo" height="100" width="100" src="./assets/logo.png" />
      <h1>MatrixScrollbar</h1>
    </div>
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
#app {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serifhtml;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

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
