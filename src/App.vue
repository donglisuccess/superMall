<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/context/TabBar/MainTabBar.vue"
import store from "./store/index.js";
import router from "./router/index.js";
export default {
  name: 'App',
  components: {
    MainTabBar,
  },
  router,
  store
}
</script>

<style>
@import url('assets/css/base.css');

</style>
