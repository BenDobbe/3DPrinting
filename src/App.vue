<template>
  <div id="app">
    <vue-navbar></vue-navbar>
    <!-- Rendered views -->
    <router-view></router-view>
    <vue-footer v-show="!($route.path==='/home') && !($route.path==='/showcase')"></vue-footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    'vue-navbar': Navbar,
    'vue-footer': Footer
  },
  methods: {
    goTo(route) {
      window.location = route;
    },
  }
};
</script>