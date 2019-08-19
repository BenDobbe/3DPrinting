<template>
    <carousel 
        :perPage="1" 
        :navigationEnabled="false" 
        :paginationEnabled="true" 
        :paginationSize="10" 
        :paginationPadding="10" 
        :autoplay="true" 
        :autoplayTimeout="3000"
        easing="ease-in-out"
        paginationActiveColor="#141414"
        paginationPosition="bottom-overlay"
        class="carousel"
    >
        <slide 
            v-for="image in images"
            :key="image.id"
            class="carousel__slide"
        >
            <img :src="image.full_url">
        </slide>
    </carousel>
</template>

<script>
export default {
    name: 'VueCarousel',
    props: {
        images: Array,
    }
}
</script>

<style lang="scss">
    .carousel {
        width: 100%;    
        max-height: 600px;

        @include breakpoint(tablet) {
            max-height: 300px;
            margin-bottom: 1.5rem;
        }

        &__slide {
            max-height: 600px;

            & > img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            @include breakpoint(tablet) {
                max-height: 300px;
            }
        }
    }
    
    .VueCarousel-inner {
        height: 600px !important;

        @include breakpoint(tablet) {
            height: 300px !important;
        }
    }

    .VueCarousel-dot-container {
        padding-bottom: 10px !important;
    }

</style>
