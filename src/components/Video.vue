<template>
    <video id="bannerVideo" autoplay loop muted>
        <source src="../assets/video/banner-mood.mp4" type="video/mp4">
    </video>
</template>

<script>
    export default {
        name: 'Video',
    }
</script>

<style lang="scss" scoped>
    video {
        position: absolute;
        top: 50%;
        left: 50%;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        z-index: 0;
        transform: translateX(-50%) translateY(-50%);
    }
</style>
