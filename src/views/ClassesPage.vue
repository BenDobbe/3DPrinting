<template>
    <main>
        <section class="classes">
            <vue-banner></vue-banner>
            <div class="container">
                <div class="class__wrapper">
                    <h3>Beschikbare classes</h3>
                    <div class="flex">
                        <div class="class" v-for="item in classes" :key="item.id">
                            <div class="class__thumbnail">
                                <img src="../assets/images/masterclass2.jpg">
                            </div>
                            <div class="class__content">
                                <h4>{{ item.title.rendered }}</h4>
                                <p v-html="item.content.rendered"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="spacer"></div>
        </section>
    </main>
</template>

<script>
import { config } from '../config/index.js';
import VideoBanner from '../components/VideoBanner.vue';
import axios from 'axios';

export default {
    name: 'ClassesPage',
    components: {
        'vue-banner': VideoBanner
    },
    data() {
        return {
            classes: [],
        }
    },
    created() {
        this.getClasses();
    },
    methods: {
        getClasses() {
            axios.get(`${config.BASE_URL}/classes?_embed`)
                .then(res => { 
                    this.classes = res.data;
                })
        }
    }
}
</script>

<style lang="scss">
    .class__wrapper {
        background: #fff;
        padding-top: 1px;
        padding-left: 2rem;
        padding-right: 2rem;
        border-radius: 8px;
        margin-top: -50px;
        z-index: 999;
    }

    .class {
        flex: 0 0 calc(33% - 10px);
        height: 250px;

        &__content {
            background: #eee;
            padding: 1rem;
            min-height: 200px;
        }
    }

    .spacer {
        margin-bottom: 20rem;
    }
</style>
