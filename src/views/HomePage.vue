<template>
  <main>
      <vue-hero></vue-hero>
      <!-- Carousel --> 
      <section class="section carousel">
        <div class="container flex">
          <div class="carousel__content col-6">
            <h3>Basis Masterclass</h3>
            <p>In deze basiscursus bestuderen we een 3D-printer in al zijn aspecten, de printmaterialen, het juiste gebruik en onderhoud. We verdiepen ons in heel het productieproces van ontwerp en modeling over slicing tot de uiteindelijke 3D-print. Hierbij komen alle specifieke eigenschappen en problemen zoals “overhang” en mogelijke oplossingen (steunobjecten) aan bod.</p>

            <a href="#" class="btn btn--secondary">Bekijk deze class</a>
          </div>
          <div class="carousel__image col-6">
            <img src="https://images.unsplash.com/photo-1542834759-d9f324e7764b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Class Image"/>
          </div>
        </div>
      </section>
      <!-- Masonry Gallery --> 
      <section class="section masonry">
        <div class="container">
          <h2 class="text-center">Showcase</h2>
          <div class="gallery">
            <div class="gallery__item">
              <img src="https://images.unsplash.com/photo-1551582046-52be1109d772?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80">
            </div>
            <div class="gallery__item">
              <img src="https://images.unsplash.com/photo-1551543733-afc219280999?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80">
            </div>
            <div class="gallery__item">
              <img src="https://images.unsplash.com/photo-1551567676-94fef02ca1b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80">
            </div>
            <div class="gallery__item">
              <img src="https://images.unsplash.com/photo-1551582046-52be1109d772?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80">
            </div>
            <div class="gallery__item">
              <img src="https://images.unsplash.com/photo-1551543733-afc219280999?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80">
            </div>
            <div class="gallery__item">
              <img src="https://images.unsplash.com/photo-1551567676-94fef02ca1b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80">
            </div>
            <div class="gallery__item">
              <img src="https://images.unsplash.com/photo-1551582046-52be1109d772?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80">
            </div>
            <div class="gallery__item">
              <img src="https://images.unsplash.com/photo-1551543733-afc219280999?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80">
            </div>
            <div class="gallery__item">
              <img src="https://images.unsplash.com/photo-1551567676-94fef02ca1b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80">
            </div>
          </div>
        </div>
      </section>
      <div id="pixlee_container"></div>
  </main>
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

<style lang="scss">
    .carousel {
    
      &__content {
        align-self: center;
      }

      &__content, &__image {
        padding: 2rem;
        line-height: 1.3;
      }

      &__content > a {
        margin-top: 2.5rem;
      }
    }
    .gallery {
      column-count: 3;
      column-gap: 1em;

      &__item {
        width: 100%;
        display: inline-block;
        background-color: #eee;
        margin: 0 0 1em;
      }
    }
</style>