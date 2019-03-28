<template>
    <main>
        <section class="showcase m-top">
            <div class="header">
                <div class="container">
                    <h2 class="header__title">Showcase</h2>
                </div>
            </div>
            <div class="container m-top">
                <!--<vue-tag name="All" :active="isActive" :category="0"></vue-tag>
                <vue-tag name="3D" :category="1"></vue-tag>
                <vue-tag name="PRINT" :category="2"></vue-tag>
                <vue-tag name="VORONOI" :category="3"></vue-tag>-->
                <!--<vue-tag 
                    v-for="(category, index) in categories"
                    :key="category.id"
                    :name="category.name"
                    :category="index + 1"
                >
                </vue-tag>-->
                <vue-gallery v-scroll-reveal="{ duration: 800 }"></vue-gallery>
            </div>
        </section>
    </main>
</template>
<script>
import Gallery from '../components/Gallery';
import Tag from '../components/Tag';
import RestService from '../services/RestService.js';

export default {
    name: 'ShowcasePage',
    components: {
        'vue-gallery': Gallery,
        'vue-tag': Tag,
    },
    data () {
        return {
            isActive: true,
            categories: [],
        }
    },
    created() {
        this.fetchCategories();
    },
    methods: {
        async fetchCategories() {
            const { data } = await RestService.get('/categories');  
            this.categories = data; 
        }
    }
}
</script>

<style lang="scss" scoped>
    .header {
        width: 100%;
        height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;

        background: linear-gradient(rgba(22, 22, 22, 0.5)rgba(22, 22, 22, 0.5)), url('../assets/images/masterclass.jpg') no-repeat;
        background-position: top center;
        background-size: cover;
        
        &__title {
            color: white;
        }
    }
</style>