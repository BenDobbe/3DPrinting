<template>
    <li>
        <router-link class="nav__link" :to="slug">
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
