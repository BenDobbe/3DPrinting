<template>
    <section class="hero">
        <div class="hero__block--left" v-scroll-reveal.reset="{ distance: '40px', origin: 'left', mobile: false }">
            <div class="hero__content">
                <h1 class="hero__title">3D Modeling <br>&amp; Printing</h1>
                <p class="hero__intro text--bold">
                    In de masterclasses 3D modeling &amp; printing van de Arteveldehogeschool leer je stap voor stap 3D objecten creëren en printen. 
                </p>
                <router-link to="classes" class="btn btn--primary">Ontdek de opleiding</router-link>
            </div>
        </div>
        <div class="hero__block--right"></div>
        <div class="hero__image" v-scroll-reveal.reset="{ origin: 'bottom' }">
            <img src="../assets/images/dino.png" alt="3D Model">
        </div>
    </section>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .hero {
        width: 100%;
        height: 100vh;
        display: flex;
        
        @include breakpoint(mobile) {
            margin-top: 3rem;
            height: 600px;
            flex-direction: column; 
            justify-content: center;
            align-items: center;
        }
        
        &__content {
            margin-left: 5rem;
            font-weight: 700;
            line-height: 1.4;
            max-width: 550px;

            @include breakpoint(mobile) {
                margin-left: 1.5rem;
                margin-right: 1.5rem;
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

        &__block--left {
            display: flex;
            align-items: center;
            flex: 1 50%;

            @include breakpoint(mobile) {
                flex: 1 100%;
            }
        }

        &__block--right {
            flex: 1 50%;
            background-color: $color-grey;

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
