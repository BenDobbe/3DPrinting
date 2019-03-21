<template>
    <div>
        <div class="gallery">
            <div class="gallery__item" 
                v-for="image in images"
                :key="image.id"
            >
                <img class="gallery__image" src="https://images.unsplash.com/photo-1542834759-d9f324e7764b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
            </div>
        </div>
    </div>
</template>

<script>
import VideoBanner from '../components/VideoBanner.vue';
import RestService from '../services/RestService.js';

export default {
    name: 'Gallery',
    components: {
        'vue-banner': VideoBanner,
    },
    data () {
        return {
            isLoading: false,
            images: []
        }
    },
    created() {
        this.fetchImages();
    },
    methods: {
        async fetchImages() {
            const { data } = await RestService.get('/classes?_embed');            
            this.images = data;
        }
    }
}
</script>

<style lang="scss" scoped>
    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        grid-gap: 1em;
    
        &__item {
            // max-height: 275px;
            overflow: hidden;
        }
        
        &__image {
            width: 100%;
            height: auto;
            max-width: none;
            // object-fit: cover;
        }
    }
</style>
