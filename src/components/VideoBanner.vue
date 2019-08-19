<template>
    <section class="banner">
        <div class="video-wrapper">
            <div class="overlay"></div>
            <slot></slot>
            <vue-video></vue-video>
        </div>
        <div class="banner__bg-image">
            <slot></slot>
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
        height: 600px;

        @include breakpoint(tablet) {
            height: 350px;
        }

        &__bg-image {
            display: none;
            background: url('../assets/images/masterclass-edit.jpg') no-repeat;
            background-size: cover;

            @include breakpoint(tablet) {
                display: block;
                height: 350px;
            }
        }

        .video-wrapper {
            display: flex;
            justify-content: center;
            position: relative;
            height: 600px;
            overflow: hidden;
            
            @include breakpoint(tablet) {
                display: none;
            }
        }

        .overlay  {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            width: 100%;
            height: 100%;
            background-color: #141414;
            opacity: 0.7;
            
        }       
    }
</style>

