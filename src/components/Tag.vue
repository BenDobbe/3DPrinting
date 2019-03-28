<template>
    <span :class="[active ? 'is-active tag' : 'tag']" @click="setFilter(category)">{{ name }}</span>
</template>

<script>
export default {
    name: 'Tag',
    props: {
        name: {
            type: String,
            required: true,
        },
        active: {
            type: Boolean,
        },
        category: {
            type: Number
        }
    },
    data() {
        return {
            currentFilter: 0,
        }
    },
    methods: {
        setFilter(filter) {
            this.currentFilter = filter;
            console.log(this.currentFilter);
        }
    }
}
</script>

<style lang="scss" scoped>
    .tag {
        display: inline-block;
        color: #bbb;
        font-weight: 700;
        font-size: 1.3em;
        margin-bottom: 1rem;
        margin-right: 1rem;
        cursor: pointer;

        &.is-active {
            color: $color-secondary;
        }
    }
</style>
