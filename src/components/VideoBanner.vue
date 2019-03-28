<template>
    <section class="banner">
        <div class="video-wrapper">
            <div class="overlay"></div>
            <vue-video></vue-video>
        </div>
        <div class="banner__bg-image"></div>
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
        margin-top: 6rem;
        background: #fff;
        height: 300px;

        @include breakpoint(tablet) {
            height: 200px;
        }

        &__bg-image {
            display: none;
            background: url('../assets/images/masterclass2.jpg') no-repeat;
            background-size: cover;

            @include breakpoint(tablet) {
                display: block;
                height: 200px;
            }
        }

        .video-wrapper {
            position: relative;
            height: 300px;
            overflow: hidden;

            @include breakpoint(tablet) {
                display: none;
            }
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

