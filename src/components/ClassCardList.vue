<template>
    <section class="class-list">
        <class-card 
            v-for="item in classes" 
            :key="item.id"
            :item="item"
        ></class-card>
    </section>
</template>

<script>
import ClassCard from './ClassCard';

export default {
    name: 'ClassCardList',
    components: {
        ClassCard
    },
    props: {
        classes: Array,
    },
}
</script>

<style lang="scss"> 
    .class-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        grid-gap: 1em;
    }
</style>
