<template>
  <div>
    <button @click="goTo('/contact')">Go to Contact</button>
    <button @click="goTo('/ARView')">Go to AR view</button>
    <button @click="goTo('/')">Go to Home</button>
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
