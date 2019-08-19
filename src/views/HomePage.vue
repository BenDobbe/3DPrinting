<template>
  <main>
      <vue-hero v-if="!this.isLoading" :images="this.sliderImages"></vue-hero>
  </main>
</template>

<script>
  import HeroVue from '../components/Hero.vue';
  import axios from 'axios';
  import Gallery from '../components/Gallery.vue';
  import VueCarousel from '../components/VueCarousel.vue';
  import { config } from '../config/';
  import RestService from '../services/RestService';

  export default {
    name: 'HomePage',
    components: {
      'vue-hero': HeroVue,
      'vue-carousel': VueCarousel,
      'vue-gallery': Gallery,
    },
    data() {
      return {
        sliderImages: [],
        isLoading: true,
      }
    },
    created() {
      this.fetchSlider();
    },
    methods: {
      async fetchSlider() {
        const { data } = await RestService.get('/posts?slug=slider');
        this.sliderImages = data;
        this.isLoading = !this.isLoading;
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