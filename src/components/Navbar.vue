<template>
    <div class="navbar__sticky">
        <nav class="navbar">
            <div class="container">
                <ul class="nav">
                    <navbar-link slug="home" class="nav__item">Masterclasses</navbar-link>
                    <navbar-link slug="home" class="nav__item">Showcase</navbar-link>
                    <navbar-link slug="contact" class="nav__item">Contact</navbar-link>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import NavbarLink from './NavbarLink';

export default {
    name: 'Navbar',
    components: {
        NavbarLink
    },
}
</script>

<style lang="scss" scoped>
    .navbar {
        width: 100%;
        
        &__sticky {
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
        }
    }

    .nav {
        display: flex;
        justify-content: flex-end;
        font-weight: 700;
        color: white;

        &__item {
            margin: 10px;
        }        
    }
</style>