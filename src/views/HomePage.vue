<template>
  <main>
      <vue-hero></vue-hero>
      <!-- Carousel --> 
      <section class="section intro">
        <div class="container flex flex--reverse">
          <div class="col-6 intro--left">
            <div class="intro__content">
              <h3 class="intro__title">Basis masterclass</h3>
              <p class="intro__body">In deze basiscursus bestuderen we een 3D-printer in al zijn aspecten, de printmaterialen, het juiste gebruik en onderhoud. We verdiepen ons in heel het productieproces van ontwerp en modeling over slicing tot de uiteindelijke 3D-print. Hierbij komen alle specifieke eigenschappen en problemen zoals “overhang” en mogelijke oplossingen (steunobjecten) aan body</p>
              <router-link to="classes" class="btn btn--secondary">Bekijk deze class</router-link>
            </div>
          </div>
          <div class="col-6 intro--right">
            <!-- <vue-slideshow></vue-slideshow> -->
            <img src="../assets/images/masterclass2.jpg">
          </div>
        </div>
      </section>
      <!-- Masonry Gallery --> 
      <!-- TODO: Light grey background color --> 
      <section class="section masonry">
        <div class="container">
          <h2 class="text--center">Showcase</h2>
          <vue-gallery></vue-gallery>
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
          <div class="feed__wrapper">
            <div class="feed__image" style="background-image: url('https://images.unsplash.com/photo-1552862750-b094e9d71c2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80')"></div>
            <div class="feed__image" style="background-image: url('https://images.unsplash.com/photo-1552862750-b094e9d71c2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80')"></div>
            <div class="feed__image" style="background-image: url('https://images.unsplash.com/photo-1552862750-b094e9d71c2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80')"></div>
            <div class="feed__image" style="background-image: url('https://images.unsplash.com/photo-1552862750-b094e9d71c2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80')"></div>
            <div class="feed__image" style="background-image: url('https://images.unsplash.com/photo-1552862750-b094e9d71c2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80')"></div>
            <div class="feed__image" style="background-image: url('https://images.unsplash.com/photo-1552862750-b094e9d71c2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80')"></div>
            <div class="feed__image" style="background-image: url('https://images.unsplash.com/photo-1552862750-b094e9d71c2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80')"></div>
            <div class="feed__image" style="background-image: url('https://images.unsplash.com/photo-1552862750-b094e9d71c2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80')"></div>
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

  export default {
    name: 'HomePage',
    components: {
      'vue-hero': HeroVue,
      'vue-slideshow': Slideshow,
      'vue-gallery': Gallery,
      'vue-footer': Footer,
    },

    data() {
      return {
        posts: [],
      }
    },
  }
</script>

<style lang="scss">
    .intro {
      &--left {
        padding: 5rem 10rem 5rem 0;

        @include breakpoint(mobile) {
          padding: 0;
          margin: 3rem 1.5rem;
        }
      }

      &__body {
        margin-bottom: 3rem;
      }
    }

    .feed {
      display: flex;
      width: 100%;
      height: 500px;

      @include breakpoint(mobile) {
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

        @include breakpoint(mobile) {
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
        
        @include breakpoint(mobile) {
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

        @include breakpoint(mobile) {
          margin: 0;
        }
      }
    }
</style>