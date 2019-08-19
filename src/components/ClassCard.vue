<template>
    <article class="class">
        <figure v-if="item._embedded" class="class__thumbnail">
            <img :src="item._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url">
        </figure>
        <section class="class__body">
            <section class="class__content">
                <div class="class__heading">
                    <h4 class="class__title">
                        {{ item.title.rendered }}
                    </h4>
                    <h5 v-if="item.acf" class="class__subtitle">
                        {{ item.acf.sub_title }}
                    </h5>
                </div>
                <p v-html="item.content.rendered"></p>
            </section>
            <section class="class__footer">
                <a class="btn btn--primary" :href="item.acf.register_link || 'https://www.arteveldehogeschool.be/opleidingen/bijscholingen-en-studiedagen/masterclasses-3d-modeling-printing'">Bekijk deze class</a>
            </section>
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

<style lang="scss">
    .class {
        position: relative;
        width: 100%;
        background: #F9F9F9;

        &__body {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            min-height: 450px;
        }

        &__thumbnail {
            display: block;
            height: 300px;
            padding: 0;
            margin: 0;
            overflow: hidden;

            & > img {
                width: 100%;
                height: 300px;
                object-fit: cover;
            }
        }

        &__content { 
            padding: 2rem;
            min-height: 280px;
            flex: 1;
        }

        &__title {
            margin: 0;

            &--light {
                font-weight: 300;
            }
        }

        &__subtitle {
            margin-top: 1rem;
        }

        &__footer {
            padding: 0 2rem 2rem 2rem;
        }
    }
</style>
