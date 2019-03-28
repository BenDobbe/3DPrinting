<template>
    <carousel 
        :perPage="1" 
        :navigationEnabled="false" 
        :paginationEnabled="true" 
        :paginationSize="8" 
        :paginationPadding="5" 
        :autoplay="true" 
        :autoplayTimeout="3000"
        easing="ease-in-out"
        paginationActiveColor="#F99D27" 
        class="carousel"
    >
        <slide class="carousel__slide">
            <img src="../assets/images/masterclass2.jpg">
        </slide>
        <slide class="carousel__slide">
            <img src="../assets/images/masterclass.jpg">
        </slide>
        <slide class="carousel__slide">
            <img src="../assets/images/start-to-print.jpg">
        </slide>
        <slide class="carousel__slide">
            <img src="../assets/images/3dmodelingprinting.jpg">
        </slide>
    </carousel>
</template>

<script>
export default {
    name: 'VueCarousel',
}
</script>

<style lang="scss" scoped>
    .carousel {
        width: 100%;    

        &__slide {
            & > img {
                display: block;
                width: 100%;
                height: 450px;
                object-fit: cover;
            }
        }
    }
</style>
