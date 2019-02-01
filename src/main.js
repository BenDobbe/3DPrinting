import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './pages/App.vue'
import Home from './pages/Home.vue'
import Contact from './pages/Contact.vue'
import ARView from './pages/ARView.vue'

//Vue.http.options.root = 'http://3dadmin.local/wp-json';

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact },
  { path: '/ARView', component: ARView }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
