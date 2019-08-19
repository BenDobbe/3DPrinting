<template>
    <transition-group name="project" tag="div" class="gallery">
        <div class="project"
                v-for="item in filteredProjects"
                :key="item.id"
                @click="onClickProject(item)"
        >
            <div class="project__overlay">
                <h4>{{ item.title.rendered }}</h4>
            </div>
            <div class="project__thumbnail" v-if="item._embedded['wp:featuredmedia'][0]">
                <img :src="item._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url">
            </div>
        </div>
    </transition-group >
</template>

<script>
import RestService from '../services/RestService.js';

export default {
    name: 'Gallery',
    props: {
        projects: Array,
        selectedCategory: String,
    },
    computed: {
        filteredProjects() {
            const category = this.selectedCategory;

            if(category === "All") {
                return this.projects;
            } else {
                return this.projects.filter((project) => {
                    if (project._embedded['wp:term']) {
                        return project._embedded['wp:term'][0][0].name === category;
                    }
                });
            }
        }
    },
    methods: {
        onClickProject(item) {
            this.$emit('selectProject', item);
        }
    }
}
</script>

<style lang="scss" scoped> 
    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        grid-gap: 1em;
        margin-bottom: 4rem;
        transition: all 1s ease;
    }
    
    .project {
        position: relative;
        overflow: hidden;
        max-width: 412px;
        width: 100%;
        height: 350px;
        cursor: pointer;
        
        @media screen and (max-width: 765px) {
            max-width: 100%;
        }

        /* Animations */
        &-move { 
            transition: all 250ms ease-in-out 50ms 
        }
        
        &-enter-active { 
            transition: all 250ms ease-out
        }

        &-leave-active {
            transition: all 250ms ease-in;
            position: absolute;
            z-index: 0;
        }

        &-enter,
        &-leave-to { 
            opacity: 0;
        }
        
        &-enter { 
            transform: scale(0.9);
        }

        &__thumbnail {            
            & > img {
                width: 100%;
                height: 350px;
                object-fit: cover;
                transition: all .3s ease-in-out;
            }
        } 
        &__overlay {
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;
            
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 350px;
            background-color: rgba(0, 173, 204, 0.5);
            opacity: 1;
            transition: all .3s ease;

            & > h4 {
                margin: 0;
                padding: 1rem;
                color: white;
                text-align: center;
                text-transform: none;
                font-size: 1.5rem;
                font-weight: 500;
            }
        }
        
        &:hover &__overlay {
            opacity: 0;
        }

        &:hover img {
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
        }
    }
</style>
