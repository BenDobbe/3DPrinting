<template>
    <main>
        <section class="classes">
            <vue-banner></vue-banner>
            <div class="container">
                <div class="class__wrapper">
                    <h3>Beschikbare classes</h3>
                    <class-card-list></class-card-list>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import VideoBanner from '../components/VideoBanner.vue';
import ClassCardList from '../components/ClassCardList.vue';

export default {
    name: 'ClassesPage',
    components: {
        'vue-banner': VideoBanner,
        ClassCardList
    }
}
</script>

<style lang="scss">
    .classes {
        margin-bottom: 3rem;
    }
    .class__wrapper {
        background: #fff;
        padding-top: 1px;
        padding-left: 2rem;
        padding-right: 2rem;
        border-radius: 8px;
        margin-top: -50px;
        z-index: 999;
    }
</style>
