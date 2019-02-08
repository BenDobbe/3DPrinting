<!-- Router.vue -->
<template>
  <component :is="routedComponent"></component>
</template>


<script>
import HomePage from "./HomePage"
import ContactPage from "./ContactPage"
import ARView from "./ARView"

const routes = {
  "/": HomePage,
  "/contact": ContactPage,
  "/ARView": ARView
};

export default {
  data() {
    return { current: window.location.pathname };
  },
  computed: {
    routedComponent() {
      return routes[this.current];
    }
  },
  render(createElement) {
    return createElement(this.routedComponent);
  }
}
</script>