<template>
    <li>
        <router-link :to="slug">
            <slot></slot>
        </router-link>  
    </li>
</template>

<script>
export default {
    name: 'NavbarLink',
    props: {
        slug: { type: String, required: true }
    }
}
</script>

<style>

</style>
