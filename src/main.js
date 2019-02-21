// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/App.vue'
import './styles/global.scss'

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

Vue.component('vue-footer', {
  template:`
  <footer id="footer" class="footer">
  <div class="container">
    <p class="footer-block">3D Printing - Arteveldehogeschool</p>
  </div>
  </footer>`
})

new Vue({
  el: '#app',
  render: h => h(App),
}).$mount('#app')
