<template>
<div id="main-homepage">
    <header>
        <div class="overlay"></div>
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
            <source src="./../assets/video.mp4" type="video/mp4">
        </video>
        <div class="container h-100">
            <div class="d-flex h-100 text-center align-items-center">
                <div class="w-100 text-white">
                    <h1 class="display-3"></h1>
                    <p class="lead mb-0"></p>
                </div>
            </div>
        </div>
    </header>
    <div class="container w-50 homepage-container">
        <div class="row text-center align-items-center">
            <div class="col-sm">
                <h2 class="">Masterclass 1</h2>
                <p class="lead mb-0">Wooop woop</p>
                <a class="myButton" @click="goTo('/')">Learn more</a>
            </div>
            <div class="col-sm">
                <h2 class="">Masterclass 2</h2>
                <p class="lead mb-0">Wooop woop</p>
                <a class="myButton" @click="goTo('/')">Learn more</a>
            </div>
            <div class="col-sm">
                <h2 class="">Summerclass</h2>
                <p class="lead mb-0">Wooop woop</p>
                <a class="myButton" @click="goTo('/')">Learn more</a>
            </div>
        </div>
    </div>
    <h1 class="display-3 subheader text-center">3D GDM GENT</h1>
    <div id="pixlee_container"></div>
    <!--[ footer ] -->
    <vue-footer></vue-footer>
</div>
</template>
<script>
export default {
  name: 'HomePage',
  mounted () {
    let pixlee = document.createElement('script')
    pixlee.setAttribute('type', 'text/javascript')
    pixlee.innerHTML = "window.PixleeAsyncInit = function() {Pixlee.init({apiKey:'kV-sg4Zj8vGKz9Ix2y7-'});Pixlee.addSimpleWidget({widgetId:'15535'});};"
    document.body.appendChild(pixlee)
    let insta = document.createElement('script')
    insta.setAttribute('src', '//instafeed.assets.pixlee.com/assets/pixlee_widget_1_0_0.js')
    document.body.appendChild(insta)
  }
}
</script>

<style lang="scss">
@import "../styles/components/HomePage.scss";
</style>

<style scoped>
body {
    background-image: none !important;
}
</style>