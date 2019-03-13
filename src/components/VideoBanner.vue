<template>
    <section class="banner">
        <!-- <div class="banner__content">
            <h2 class="banner__title">
                Bekijk onze masterclasses
            </h2>
        </div> -->
        <div class="video-wrapper">
            <div class="overlay"></div>
            <vue-video></vue-video>
        </div>
        
    </section>
</template>

<script>
    import Video from './Video.vue'

    export default {
        name: 'VideoBanner',
        components: {
            'vue-video': Video,
        }
    }
</script>

<style lang="scss">
    .banner {
        margin-top: 4.6rem;
        background: #fff;
        height: 400px;

        .video-wrapper {
            position: relative;
            height: 400px;
            overflow: hidden;
        }

        .overlay  {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-color: #141414;
            opacity: 0.5;
            z-index: 1;
        }
    }
</style>

