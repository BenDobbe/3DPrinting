<template>
  <div id="main-homepage">
      <vue-hero></vue-hero>
      <main class="container">
        <div class="post"
          v-for="{title, content, id} in posts"
          :key="id"
        >
          <h3>{{ title.rendered }}</h3>
          <div class="post__content" v-html="content.rendered"></div>
        </div>
      </main>
      <div id="pixlee_container"></div>
  </div>
</template>

<script>
  import HeroVue from '../components/Hero.vue';
  import axios from 'axios';

  export default {
    name: 'HomePage',
    components: {
      'vue-hero': HeroVue,
    },

    data() {
      return {
        posts: [],
      }
    },

    created() {
      axios.get('http://localhost/wordpress/wp-json/wp/v2/posts')
        .then(res => this.posts = res.data)
        .catch(err => console.log(err))
    },

    methods: {
        createInstagram() {
          let pixlee = document.createElement('script');
          pixlee.setAttribute('type', 'text/javascript');
          pixlee.innerHTML = "window.PixleeAsyncInit = function() {Pixlee.init({apiKey:'kV-sg4Zj8vGKz9Ix2y7-'});Pixlee.addSimpleWidget({widgetId:'15535'});};";
          document.body.appendChild(pixlee);
          let insta = document.createElement('script');
          insta.setAttribute('src', '//instafeed.assets.pixlee.com/assets/pixlee_widget_1_0_0.js');
          document.body.appendChild(insta);
        }
    }
  }
</script>

<style scoped>
</style>