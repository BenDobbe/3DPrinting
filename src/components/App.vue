<template>
  <div id="app">
    <nav class="navbar navbar-light navbar-expand-md position-absolute" id="nav">
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

.nav-link{
  color: white !important;
  position: relative;
}

.nav-link:hover {
  cursor: pointer;
  color: white;
}

.nav-link:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: $maroonflush;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.nav-link:hover:before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}

.navbar-brand {
  cursor: pointer;
}

.container {
  min-width: $container_width;
}

#footer {
  margin-top: 100px;
  height: 10vh;
}
</style>
