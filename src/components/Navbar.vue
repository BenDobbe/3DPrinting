<template>
    <div class="navbar__sticky">
        <nav class="navbar">
            <div class="container">
                <ul class="nav">
                    <navbar-link slug="home" class="nav__item">Masterclasses</navbar-link>
                    <navbar-link slug="showcase" class="nav__item">Showcase</navbar-link>
                    <navbar-link slug="contact" class="nav__item">Contact</navbar-link>
                    <a class="btn btn--primary" href="https://www.arteveldehogeschool.be/opleidingen/bijscholingen-en-studiedagen/masterclasses-3d-modeling-printing">Inschrijven</a>
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
    data() {
        return {
            backgroundNav: false
        }
    },
    mounted() {
        const nav = document.querySelector('.navbar__sticky');
        const topOfNav = nav.offsetTop;

        window.addEventListener('scroll', () => {
            if (window.scrollY >= topOfNav) {
                nav.style.backgroundColor = 'orange';
            } else {
                nav.style.backgroundColor = 'transparent';
            }
        })
    },
}
</script>

<style lang="scss" scoped>
    .navbar {
        width: 100%;
        
        &__sticky {
            z-index: 1;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;

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