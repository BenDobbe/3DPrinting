<template>
    <span :class="[active ? 'is-active tag' : 'tag']" @click="active = !active">{{ name }}</span>
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
