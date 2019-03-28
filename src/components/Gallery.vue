<template>
    <div>
        <div class="gallery">
            <div class="gallery__item" 
                v-for="image in images"
                :key="image.id"
            >
                <img class="gallery__image" :src="image.acf.upload_image.sizes.large" :data-category="image.categories[0]">
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
            const { data } = await RestService.get('/gallery_images?_embed');          
            this.images = data;
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

        &__item {
            // max-height: 275px;
            overflow: hidden;
        }
        
        &__image {
            width: 100%;
            height: 300px;
            max-width: none;
            object-fit: cover;
        }
    }
</style>
