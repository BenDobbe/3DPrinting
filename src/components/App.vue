<template>
  <div id="app">
    <nav class="navbar navbar-light navbar-expand-md position-absolute text-white">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand"  @click="goTo('/')">Navbar</a>
      <div class="collapse navbar-collapse" id="navbar1">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" @click="goTo('/home')">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="goTo('/contact')">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    <app-router></app-router>
  </div>
</template>

<script>
import AppRouter from "./AppRouter";

export default {
  components: {
    AppRouter
  },
  methods: {
    goTo(route) {
      window.location = route;
    },
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
@import "~bootstrap/scss/bootstrap.scss";
@import '~bootstrap-vue/dist/bootstrap-vue.css';

body {
  font-family: 'Source Sans Pro', sans-serif;
}

nav {
  z-index: 999;
  color: white;
}

nav a{
  color: white !important;
}

a:hover {
  cursor: pointer;
}

.container {
  min-width: $container_width;
}

#footer {
  margin-top: 100px;
}
</style>
