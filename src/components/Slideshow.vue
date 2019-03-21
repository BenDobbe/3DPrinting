<template>
    <section class="carousel">
        <div class="carousel__items-holder">
            <div class="carousel__items">
                <div class="carousel__slide is-selected">
                    <picture class="carousel__picture">
                        <img class="carousel__media" src="../assets/images/masterclass2.jpg">
                    </picture>
                </div>
                <div class="carousel__slide">
                    <picture class="carousel__picture">
                        <img class="carousel__media" src="../assets/images/masterclass2.jpg">
                    </picture>
                </div>
                <div class="carousel__slide">
                    <picture class="carousel__picture">
                        <img class="carousel__media" src="../assets/images/masterclass2.jpg">
                    </picture>
                </div>
            </div>
        </div>
        <div class='carousel__controls'>
            <button class='carousel-controls__button'>Prev</button>
            <button class='carousel-controls__button'>Next</button>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Slideshow',
}
</script>

<style lang="scss" scoped>
    .carousel {
        position: relative;

        &__items-holder {
            position: relative;
            z-index: 10;
            overflow: hidden;
        }

        &__items {
            display: flex;
            align-items: baseline;
        }

        &__picture {
            position: relative;
            background: $color-primary;
        }

        &__media {
            width: 100%;
            height: 100%;
            object-fit: cover;
            max-width: none;
        }
    }

    // .carousel {
    //     position: relative;
    //     display: flex;
    //     flex-direction: column;
    //     align-items: center;

    //     &__items-holder {
    //         position: relative;
    //         z-index: 10;
    //         overflow: hidden;
    //     }

    //     &__items {
    //         display: flex;
    //         align-items: baseline;
    //     }

    //     &__slide {
    //         opacity: .5;
    //         min-width: 100%;

    //         &.is-selected {
    //             opacity: 1;
    //         }
    //     }

    //     &__picture {
    //         position: relative;
    //         background-color: $color-primary;

    //         & > img {
    //             position: absolute;
    //             top: 0;
    //             height: 100%;
    //             width: 100%;
    //             object-fit: cover;
    //         }
    //     }

    //     &__controls {
    //         position: absolute;
    //         left: -5%;
    //         top: 50%;
    //         width: 100%;
    //         display: flex;
    //         justify-content: space-between;

    //     }
    // }
</style>
