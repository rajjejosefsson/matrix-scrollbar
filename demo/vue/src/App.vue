<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import MatrixScrollbar from "@matrix-scrollbar/vue";

export default {
  name: "app",
  components: {
    HelloWorld,
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
