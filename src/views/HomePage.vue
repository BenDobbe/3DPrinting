<template>
  <main>
      <vue-hero></vue-hero>
      <!-- Carousel --> 
      <section class="section intro">
        <div class="container flex flex--reverse">
          <div class="intro--left" v-scroll-reveal>
            <div class="intro__content">
              <h3 class="intro__title">EEN WERELD VAN 3D</h3>
              <p class="intro__body">Een eenjarige opleiding, gespreid over 2 masterclasses waarin je ondergedompeld wordt in de kunst van het 3D-printen en het modelleren van objecten. Wie met een 3D-printer aan de slag wil en niet enkel bestaande digitale objecten uit online databases wil printen, moet zich trainen in het designen en modelleren van 3D-objecten. Aan de hand van talrijke workshops neemt deze cursus je stap voor stap mee in dit boeiende proces.</p>
              <router-link to="classes" class="btn btn--secondary">Onze Classes</router-link>
            </div>
          </div>
          <div class="intro--right" v-scroll-reveal>
            <vue-carousel></vue-carousel>
          </div>
        </div>
      </section>
      <!-- Masonry Gallery --> 
      <section class="section masonry" >
        <div class="container">
          <h2 class="text--center">Showcase</h2>
          <vue-gallery  v-scroll-reveal="{ duration: 1000 }"></vue-gallery>
          <div class="masonry__button">
            <router-link to="showcase" class="btn btn--primary">Onze projecten</router-link>
          </div>
        </div>
      </section>
      <!-- Instagram Feed -->
      <section class="section feed">
        <div class="feed--left">
          <div class="feed__icon">
            <img src="../assets/images/instagram.svg" style="width: 75px">
            <span class="feed__social-name">@PrintArtevelde</span>
          </div>
        </div>
        <div class="feed--right">
          <div class="feed__wrapper" v-scroll-reveal="{ distance: '40px', origin: 'right' }">
            <template v-for="(image, index) in posts">
              <div class="feed__image"  v-if="index <= 7" :key="image.id" :style="{ 'background-image': 'url(' + image.images.thumbnail.url + ')' }"></div>
            </template>
          </div>
        </div>
      </section>
  </main>
</template>

<script>
  import HeroVue from '../components/Hero.vue';
  import axios from 'axios';
  import Slideshow from '../components/Slideshow.vue';
  import Gallery from '../components/Gallery.vue';
  import Footer from '../components/Footer.vue';
  import VueCarousel from '../components/VueCarousel.vue';
  import { config } from '../config/';

  export default {
    name: 'HomePage',
    components: {
      'vue-hero': HeroVue,
      'vue-slideshow': Slideshow,
      'vue-carousel': VueCarousel,
      'vue-gallery': Gallery,
      'vue-footer': Footer,
    },
    data() {
      return {
        posts: [],
        token: config.INSTAGRAM_TOKEN,
      }
    },
    created() {
      this.fetchInstagram();
    },
    methods: {
      async fetchInstagram() {
        let response = await fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${this.token}`);
        let data = await response.json();
        this.posts = data.data;
        console.log(this.posts);
      }
    }
  }
</script>

<style lang="scss">
    .intro {
      &--left {
        flex: 1;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 1rem 0rem 5rem 0;

        @include breakpoint(mobile) {
          padding: 0;
          margin: 0rem 0rem;
        }
      }

      &--right {
        flex: 1;
      }
    
      &__body {
        max-width: 550px;
        margin-bottom: 3rem;
        padding-right: 5rem;
        letter-spacing: 0.3px;
        line-height: 1.4;

        @include breakpoint(mobile) {
          max-width: 100%;
          padding-right: 0;
        }
      }
    }

    .feed {
      display: flex;
      width: 100%;
      height: 500px;

      @include breakpoint(tablet) {
        height: 300px;
      }

      &--left {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex: 1;
        background-color: $color-primary;

        background-image: url('../assets/images/feed-overlay.png');
        background-size: cover;

        @include breakpoint(tablet) {
          width: 100%;
          justify-content: center;
          flex-direction: column;
        }
      }

      &--right {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        flex: 1;
        padding-right: 0%;
        background-color: $color-grey;
        
        @include breakpoint(tablet) {
          display: none;
        }
      }

      &__wrapper {
        position: absolute;
        width: 100%;
        left: -10%;
        display: flex;
        flex-wrap: wrap;
      }
      &__image {
        flex: 0 0 calc(25% - 2rem);
        margin: 1rem;
        width: 200px;
        height: 200px;
        border: 8px solid #fff;
        border-radius: $border-radius-primary;
        background-size: cover;
        background-repeat: no-repeat;
      }


      &__social-name {
        color: white;
        font-weight: 700;
        font-size: 2rem;
        letter-spacing: 1px;
        margin-top: 1.5rem;
      }

      &__icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 10rem;
        text-align: center;

        @include breakpoint(tablet) {
          margin: 0;
        }
      }
    }

    .masonry {
      margin-bottom: 8rem !important;
      @include breakpoint(mobile) {
        margin-top: 8rem !important;
      }
    }

    .masonry__button {
      width: 100%;
      text-align: center;
    }
</style>