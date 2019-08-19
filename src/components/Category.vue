<template>
    <span class="category" @click="onClickCategory">{{ name }}</span>
</template>

<script>
export default {
    name: 'Category',
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
        },
        projects: {
            type: Array
        }
    },
    data() {
        return {
            isActive: false,
        }
    },
    methods: {
        onClickCategory(e) {            
            this.$emit('selectedCategory', this.name);
        }
    }
}
</script>

<style lang="scss" scoped>
    .category {
        display: inline-block;
        color: #888;
        font-size: 1.3em;
        margin-bottom: 1rem;
        margin-right: 1rem;
        cursor: pointer;

        &.is-active {
            color: #141414;
            text-shadow: 0 0 .65px #141414, 0 0 .65px #141414;
        }
    }
</style>
