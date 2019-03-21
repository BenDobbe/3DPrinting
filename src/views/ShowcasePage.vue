<template>
    <main>
        <section class="showcase m-top">
            <div class="header">
                <div class="container">
                    <h2>Showcase</h2>
                </div>
            </div>
            <!-- TODO: Move inline styling -->
            <div class="container m-top" style="margin-bottom: 4.5rem">
                <vue-tag name="ALL" :active="isActive" ></vue-tag>
                <vue-tag name="3D"></vue-tag>
                <vue-tag name="PRINT"></vue-tag>
                <vue-tag name="VORONOI"></vue-tag>
                <vue-gallery></vue-gallery>
            </div>
        </section>
    </main>
</template>
<script>
import Gallery from '../components/Gallery';
import Tag from '../components/Tag';

export default {
    name: 'ShowcasePage',
    components: {
        'vue-gallery': Gallery,
        'vue-tag': Tag,
    },
    data () {
        return {
            isActive: true,
        }
    }
}
</script>

<style lang="scss" scoped>
    .header {
        width: 100%;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;

        background: grey;
        
        & > .container > h2 {
            color: white;
        }
    }
</style>