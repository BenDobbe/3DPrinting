<template>
    <div class="navbar__sticky">
        <div class="container--wide">
            <nav class="navbar">
                <router-link to="home">
                    <h3 class="navbar__brand">
                        GDM PRINT
                    </h3>
                </router-link>
                <ul class="nav">
                    <navbar-link slug="classes" class="nav__item">Masterclasses</navbar-link>
                    <navbar-link slug="showcase" class="nav__item">Showcase</navbar-link>
                    <navbar-link slug="contact" class="nav__item">Contact</navbar-link>
                    <a class="btn btn--nav" href="https://www.arteveldehogeschool.be/opleidingen/bijscholingen-en-studiedagen/masterclasses-3d-modeling-printing">Inschrijven</a>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import NavbarLink from './NavbarLink';

export default {
    name: 'Navbar',
    components: {
        NavbarLink
    },
    data() {
        return {
            backgroundNav: false
        }
    },
    mounted() {
        // const nav = document.querySelector('.navbar__sticky');
        // const topOfNav = nav.offsetTop;

        // window.addEventListener('scroll', () => {
        //     if (window.scrollY >= topOfNav) {
        //         nav.style.backgroundColor = 'orange';
        //     } else {
        //         nav.style.backgroundColor = 'transparent';
        //     }
        // })
    },
}
</script>

<style lang="scss" scoped>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        
        &__sticky {
            z-index: 999;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background-color: orange;
        }

        &__brand {
            color: #fff;
            font-weight: 700;
            font-size: 1.5rem;
        }
    }

    .nav {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-weight: 700;
        color: white;

        &__item {
            margin: 0.5rem 1.5rem;
        }        
    }
</style>