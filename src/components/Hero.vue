<template>
    <header class="beer-header">
        <div class="beer-slider">
            <div class="pat1" :style="imageRight"></div>
            <div class="beer-reveal">
                <div class="pat2" :style="imageLeft"></div>
            </div>
        </div>
        <section class="hero" v-scroll-reveal.reset="{ distance: '40px', origin: 'left', mobile: false }">
            <div class="hero__content">
                <h1 class="hero__title">
                    <span class="hero__title--left">3D</span>
                    <span class="hero__title--right">Modeling Printing</span>
                </h1>
                <p class="hero__intro text--bold">
                    In de masterclasses 3D modeling &amp; printing van de Arteveldehogeschool leer je stap voor stap 3D objecten creëren en printen. 
                </p>
                <router-link to="classes" class="hero__content--link btn btn--primary">Ontdek de opleiding</router-link>
            </div>
        </section>
    </header>
</template>

<script>
    import BeerSlider from 'beerslider';
    
    export default {
        props: {
            images: Array,
        },
        mounted () {
            new BeerSlider(document.querySelector('.beer-slider'));
        },
        computed: {
            imageLeft() {
                return "background-image: url('" + this.images[0].acf.slider_image_left.url + "')";
            },
            imageRight() {
                return "background-image: url('" + this.images[0].acf.slider_image_right.url + "')";
            } 
        }
    }
</script>

<style lang="scss">
    @import '../../node_modules/beerslider/dist/BeerSlider.css';

    .beer-slider {
        position: absolute;
        width: 100%;
        height: 100%;
    }
    
    .beer-header {
        position: relative;
        height: 100vh;
        display: flex;
        align-items: center;
    }
    
    .beer-handle {
        z-index: 99;

        @include breakpoint(mobile) {
            top: 25%;
        }
    }

    .pat1 {
        background-position: center center;
        background-size: cover;
    }

    .pat2 {
        background-position: center center;
        background-size: cover;
    }

    .hero {
        display: flex;
        position: relative;
        z-index: 9;
        
        &__title {
            margin-bottom: 0;
            display: flex;
            color: $color-text;
            justify-content: center;
            align-items: center;

            &--left, &--right {
                display: block;
            }

            &--left {
                font-size: 2em;
                padding-right: 1rem;
            }

            &--right {
                font-size: 0.8em;
            }
        }

        &__content {
            margin-left: 5rem;
            font-weight: 700;
            line-height: 1.4;
            max-width: 550px;

            @include breakpoint(tablet) {
                margin-left: 1rem;
            }

        }

        
        &__intro {
            max-width: 450px;
            margin-bottom: 3rem;
            font-weight: 500;
            font-size: 1.2em;
            letter-spacing: 0.5px;
            line-height: 1.5;

            @include breakpoint(mobile) {
                max-width: none;
            }
        }

        &__image {
            width: 35%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-40%, -45%);
            animation: floating 4000ms ease-in-out 0s infinite normal;

            @include breakpoint(mobile) {
                display: none;
            }
        }
    }

    @keyframes floating {
        0% {
            transform: translate(-40%, -45%);	
        }
        50% {
            transform: translate(-40%, -48%);	
        }	
        100% {
            transform: translate(-40%, -45%);
        }			
    }
</style>
