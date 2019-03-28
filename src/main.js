// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './styles/global.scss'

import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import VueCarousel from 'vue-carousel'
import VueScrollReveal from 'vue-scroll-reveal';
 
// Using ScrollReveal's default configuration
Vue.use(VueScrollReveal, {
  duration: 2000,
  distance: '40px'
});
 
Vue.config.productionTip = false

Vue.config.ignoredElements = [
  'a-scene',
  'a-marker',
  'a-entity',
  'a-camera'
]

Vue.component('vue-dino', {
  template:`
  <a-marker id="dinoM" preset="hiro">
    <a-entity id="dinoEntity"></a-entity>
  </a-marker>`
})

Vue.use(VueCarousel);

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
