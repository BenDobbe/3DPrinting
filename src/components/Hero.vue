<template>
    <section class="hero">
        <div class="hero__block--left">
            <div class="hero__content">
                <h1 class="hero__title">3D Modeling <br>&amp; Printing</h1>
                <p class="hero__intro">
                    In de masterclasses 3D modeling &amp; printing van de Arteveldehogeschool leer je stap voor stap 3D objecten creëren en printen. 
                </p>
                <a class="btn btn--primary">Ontdek de opleiding</a>
            </div>
        </div>
        <div class="hero__block--right"></div>
        <div class="hero__image">
            <img src="../assets/images/hero-model.png" alt="3D Model">
        </div>
    </section>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    .hero {
        width: 100%;
        height: 100vh;
        display: flex;

        &__content {
            /* Temp */
            margin-left: 5rem;
            font-weight: 700;
            line-height: 1.4;

            max-width: 550px;
        }

        &__intro {
            margin-bottom: 5rem;
        }

        &__image {
            width: 40%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        &__block--left {
            display: flex;
            align-items: center;
            flex: 1 50%;
        }

        &__block--right {
            flex: 1 50%;
            background-color: orange;
        }
    }
</style>
