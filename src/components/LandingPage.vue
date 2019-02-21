<template>
  <div class="main-landing">
    <div class="wrapper">
      <div class="before">
        <img class="content-image" src="./../assets/003c8b823287c80ac3a9a3ca857362a4.jpg" draggable="false"/>   </div>
      <div class="after">
        <img class="content-image" src="./../assets/edit.jpg" draggable="false"/>
      </div>
      <div class="scroller">
        <svg class="scroller__thumb" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><polygon points="0 50 37 68 37 32 0 50" style="fill:#fff"/><polygon points="100 50 64 32 64 68 100 50" style="fill:#fff"/></svg>
      </div>
    </div>
    <a class="landingBtn landingBtn-1" @click="goTo('/home')">Go beyond</a>
    <app-router></app-router>
  </div>
</template>

<script>
import AppRouter from "./AppRouter";


export default {
  name: 'LandingPage',
  components: {
    AppRouter
  },
  methods: {
    goTo(route) {
      window.location = route;
    },
  },
  mounted () {
    let navigation = document.querySelector('#nav')
    navigation.style.display = 'none';
    // I hope this over-commenting helps. Let's do this!
    // Let's use the 'active' variable to let us know when we're using it
    let active = false;

    // First we'll have to set up our event listeners
    // We want to watch for clicks on our scroller
    document.querySelector('.scroller').addEventListener('mousedown',function(){
      active = true;
      // Add our scrolling class so the scroller has full opacity while active
      document.querySelector('.scroller').classList.add('scrolling');
    });
    // We also want to watch the body for changes to the state,
    // like moving around and releasing the click
    // so let's set up our event listeners
    document.body.addEventListener('mouseup',function(){
      active = false;
      document.querySelector('.scroller').classList.remove('scrolling');
    });
    document.body.addEventListener('mouseleave',function(){
      active = false;
      document.querySelector('.scroller').classList.remove('scrolling');
    });

    // Let's figure out where their mouse is at
    document.body.addEventListener('mousemove',function(e){
      if (!active) return;
      // Their mouse is here...
      let x = e.pageX;
      // but we want it relative to our wrapper
      x -= document.querySelector('.wrapper').getBoundingClientRect().left;
      // Okay let's change our state
      scrollIt(x);
    });

    // Let's use this function
    function scrollIt(x){
        let transform = Math.max(0,(Math.min(x,document.querySelector('.wrapper').offsetWidth)));
        document.querySelector('.after').style.width = transform+"px";
        document.querySelector('.scroller').style.left = transform-25+"px";
    }

    // Let's set our opening state based off the width, 
    // we want to show a bit of both images so the user can see what's going on
    scrollIt(150);

    // And finally let's repeat the process for touch events
    // first our middle scroller...
    document.querySelector('.scroller').addEventListener('touchstart',function(){
      active = true;
      document.querySelector('.scroller').classList.add('scrolling');
    });
    document.body.addEventListener('touchend',function(){
      active = false;
      document.querySelector('.scroller').classList.remove('scrolling');
    });
    document.body.addEventListener('touchcancel',function(){
      active = false;
      document.querySelector('.scroller').classList.remove('scrolling');
    });
  }
}
</script>

<style scoped>
@import "../styles/components/LandingPage.scss";

nav {
  display: none;
}
</style>