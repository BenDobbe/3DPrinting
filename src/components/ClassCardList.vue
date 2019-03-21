<template>
    <section class="class-list flex">
        <class-card 
            v-for="item in classes" 
            :key="item.id"
            :item="item"
        ></class-card>
    </section>
</template>

<script>
import ClassCard from './ClassCard';
import RestService from '../services/RestService.js';

export default {
    name: 'ClassCardList',
    components: {
        ClassCard
    },
    data() {
        return {
            classes: [],
        }
    },
    created() {
        this.fetchClasses();
    },
    methods: {
        async fetchClasses() {
            const { data } = await RestService.get('/classes?_embed');            
            this.classes = data;
        }
    }
}
</script>

<style lang="scss" scoped> 
    // .class-list {
    //     justify-content: flex-start;
    // }
</style>
