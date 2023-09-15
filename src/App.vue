<template>
  <div id="app">
    <AppNavbar />
    <router-view></router-view>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from "./components/AppFooter.vue";
import AppNavbar from "./components/AppNavbar.vue";
import { IToken } from "@/api/csrf-token/index.js";

export default {
  name: "App",
  components: {
    AppNavbar,
    AppFooter,
  },
  mounted() {
    /**
     * 获取 CSRF Token
     */
    IToken().then((res) => {
      localStorage.setItem("token", res);
    });
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin: 0;
}

body {
  margin: 0 !important;
}
</style>
