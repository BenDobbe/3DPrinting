<template>
    <main>
        <section class="showcase m-top">
            <div class="container">
                <div class="header">
                    <h3 class="header__title">Projecten</h3>
                </div>
                <div v-if="!this.isLoading">
                    <div class="categories">
                        <vue-category 
                            v-for="category in categories"
                            :key="category.id"
                            :name="category.name"
                            :class="{ 'is-active': category.name == selectedCategory}"
                            @selectedCategory="handleSelectedCategory"
                        >
                        </vue-category>
                    </div>
                    <keep-alive>
                        <vue-gallery 
                            :selectedCategory="selectedCategory" 
                            :projects="projects" 
                            v-scroll-reveal="{ duration: 800 }" 
                            @selectProject="handleSelectedProject"
                        >
                        </vue-gallery>
                    </keep-alive>

                    <modal
                        :width="1024"
                        height="auto"
                        :adaptive="true"
                        :scrollable="true"
                        name="project"
                    >
                        <div class="project-modal" v-if="selectedProject">
                            <div class="project-modal__image">
                                <vue-carousel :images="selectedProject.meta_box.image_advanced_1" />
                            </div>
                            <div class="project-modal__content">
                                <vue-carousel :images="selectedProject.meta_box.image_advanced_1" />
                                <h4>{{ selectedProject.title.rendered }}</h4>
                                <div class="project-modal__content--body" v-html="selectedProject.content.rendered"></div>
                            </div>
                        </div>                    
                    </modal>
                </div>
                <pulse-loader :loading="this.isLoading" color="#00ADCC" style="text-align: center; margin-bottom: 2rem;"></pulse-loader>
            </div>
        </section>
    </main>
</template>
<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

import Gallery from '../components/Gallery';
import Category from '../components/Category';
import VueCarousel from '../components/VueCarousel';
import RestService from '../services/RestService.js';

export default {
    name: 'ShowcasePage',
    components: {
        'vue-gallery': Gallery,
        'vue-category': Category,
        'vue-carousel': VueCarousel,
        PulseLoader
    },
    data () {
        return {
            isLoading: true,
            selectedProject: null,
            selectedCategory: "All",
            categories: [{
                id: Math.floor(Date.now() + Math.random()),
                name: "All"
            }],
            projects: [],
        }
    },
    async mounted() {
        await this.fetchCategories();
        await this.fetchProjects().then(res => {
            this.isLoading = !this.isLoading;
        });
    },
    methods: {
        async fetchCategories() {
            const { data } = await RestService.get('/categories');  
            this.categories = [...this.categories, ...data];
        },
        async fetchProjects() {
            const { data } = await RestService.get('/projects?_embed');  
            this.projects = data; 
        },
        handleSelectedCategory(value) {
            this.selectedCategory = value;
        },
        handleSelectedProject(value) {
            this.selectedProject = value;

            this.show();
        },
        show() {
            this.$modal.show('project');
        },
        hide() {
            this.$modal.hide('project');
        },
    },
}
</script>

<style lang="scss" scoped>
    .header {
        display: flex;
        align-items: center;
        width: 100%;
        height: 150px;       
    }

    .categories {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

    .project-modal {
        display: flex;
        flex-wrap: wrap;
        max-height: 600px;
        overflow: hidden;

        @include breakpoint(tablet) {
            max-height: 1200px;
        }

        &__close {
            padding: 1rem;
            font-size: 2rem;
        }

        &__image {
            width: 100%;
            flex: 1 1 60%;
            max-height: 600px;

            & > img {
                width: 100%;
                max-height: 600px;
                object-fit: cover;
            }

            @include breakpoint(tablet) {
                display: none;
            }
        }

        &__content {
            width: 100%;
            max-height: 600px;
            flex: 1 1 40%;
            align-self: center;
            padding: 2rem 4rem 2rem 2rem;

            & > h4 {
                margin-top: 0;
                margin-bottom: 1.5rem;
                font-size: 1.3rem;
            }

            & > .VueCarousel {
                display: none;
            }

            @include breakpoint(tablet) {
                padding: 2rem 2rem 2rem 2rem;

                & > .VueCarousel {
                    display: block;
                }
            }
        }
    }
</style>