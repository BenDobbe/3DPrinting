<template>
  <div id="app">
    <vue-navbar></vue-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarVue from './Navbar.vue';

export default {
  components: {
    'vue-navbar': NavbarVue
  },
  methods: {
    goTo(route) {
      window.location = route;
    },
  }
};
</script>

<style lang="scss">
</style>
