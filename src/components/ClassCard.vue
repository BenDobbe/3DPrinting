<template>
    <article class="class">
        <picture class="class__thumbnail">
            <div class="class__overlay"></div>
            <img :src="item._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url">
        </picture>
        <section class="class__content">
            <h4 class="class__title">
                {{ item.title.rendered }}
            </h4>
            <p v-html="item.content.rendered"></p>
        </section>
        <section class="class__footer">
            <a class="btn btn--link" href="https://www.arteveldehogeschool.be/opleidingen/bijscholingen-en-studiedagen/masterclasses-3d-modeling-printing">Bekijk deze class</a>
        </section>
    </article>
</template>

<script>
    export default {
        name: 'ClassCard',
        props: {
            /* Pass single class from parent to child */
            item: Object
        },
    }
</script>

<style lang="scss" scoped>
    .class {
        position: relative;
        flex: 0 0 calc(33% - 12px);
        margin-bottom: 1.5rem;
        background: #F9F9F9;
        border-radius: $border-radius-primary;
        overflow: hidden;

        @include breakpoint(tablet) {
            flex: 0 0 50%;
        }

        @include breakpoint(mobile) {
            flex: 1 1 100%;
        }

        /* TODO: Fix responsiveness */
        &:nth-child(3n + 2) {
            margin-left: 1rem;
            margin-right: 1rem;

            @include breakpoint(tablet) {
                margin-left: 0rem;
                margin-right: 0rem;
            }
        }

        /* TODO: Fix resizing when window size gets smaller */
        // &__overlay {
        //     position: absolute;
        //     top: 0;
        //     left: 0;
        //     width: 100%;
        //     min-height: 256px;
        //     background-color: $color-secondary;
        //     opacity: 0.2;
        // }

        &__thumbnail {
            background: $color-grey;
            display: block;
            height: 250px;
            overflow: hidden;

            & > img {
                width: 100%;
                height: 250px;
                object-fit: cover;
            }
        }

        &__content { 
            padding: 2rem;
            min-height: 280px;
        }

        &__title {
            margin: 0;

            &--light {
                font-weight: 300;
            }
        }

        &__footer {
            padding: 0 2rem 2rem 2rem;
        }
    }
</style>
