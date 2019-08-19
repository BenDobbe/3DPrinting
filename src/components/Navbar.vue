<template>
    <div class="navbar__sticky" :style="navIndex" id="nav">
        <div class="container--wide">
            <nav class="navbar">
                <span class="navbar-toggle" id="navbar-toggle" @click="onHamburgerClick">
                    <i class="fas fa-bars"></i>
                </span>
                <router-link to="home">
                    <h3 :class="['navbar__brand', { 'nav-color-white': navColor || $route.path == '/classes' }]">
                        {{ this.brand }}
                    </h3>
                </router-link>
                <ul :class="['nav', { 'nav-color-white': navColor || $route.path == '/classes' }]">
                    <navbar-link slug="home" class="nav__item">Home</navbar-link>
                    <navbar-link slug="classes" class="nav__item">Opleidingen</navbar-link>
                    <navbar-link slug="showcase" class="nav__item">Projecten</navbar-link>
                    <navbar-link slug="contact" class="nav__item">Contact</navbar-link>
                    <a href="https://www.arteveldehogeschool.be/opleidingen/bijscholingen-en-studiedagen/masterclasses-3d-modeling-printing" :class="['nav__item', 'nav__item--btn', 'btn', 'btn--primary']" id="registerBtn">Schrijf je in</a>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import NavbarLink from './NavbarLink';
import { config } from '../config';

export default {
    name: 'Navbar',
    components: {
        NavbarLink
    },
    data() {
        return {
            navColor: false,
            brand: config.APP_TITLE
        }
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener("scroll", this.onScrollNavbar)
        })
    },
    watch: {
        '$route' () {
            if (this.$route.path === '/classes') {
                this.navColor = true
            } else {
                this.navColor = false
            }
        }
    },
    methods: {
        onScrollNavbar() {
            const navbar = document.getElementById("nav");
            const btn = document.getElementById('registerBtn');
            const navClasses = navbar.classList;
            const btnClasses = btn.classList;
            if(document.documentElement.scrollTop >= 75) {
                if (!navClasses.contains("shrink")) {
                    navClasses.toggle("shrink");
                    btnClasses.toggle('navbar-btn--dark');
                }
            }
            else {
                if (navClasses.contains("shrink")) {
                    navClasses.toggle("shrink");
                    btnClasses.toggle('navbar-btn--dark');
                }
            }
        },
        onHamburgerClick() {
            const navBarToggle = document.getElementById('navbar-toggle');
            const mainNav = document.querySelector('.nav');

            mainNav.classList.toggle('is-open');
        }
    }
}
</script>

<style lang="scss">
    .navbar {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @include breakpoint(tablet) {
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
        }

        &__sticky {
            z-index: 999;
            width: 100%;
            position: fixed;
            padding: 1rem 0;
            top: 0;
            left: 0;
            transition: all .3s ease-in-out;
            
            @include breakpoint(tablet) {
                padding: 0;
                background-color: $color-secondary; 
            }

            &.shrink {
                padding: 0rem 0;
                background-color: $color-secondary;
            }

            &.shrink .navbar__brand, &.shrink .nav {
                color: white;
            }
        }

        &__brand {
            color: $color-text;
            font-weight: 900;
            font-size: 1.5rem;
            transition: all .2s ease-in-out;
            margin: 1rem 1rem 1rem 0;

            @include breakpoint(tablet) {
                color: white;

                &:hover {
                    color: white !important;
                }
            }

            &:hover {
                color: $color-secondary;
            }
        }
    }

    .nav {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 1rem 0 1rem 1rem;
        margin: 0;
        font-weight: 700;
        color: $color-text;
        transition: all .3s ease-in-out;
    
        @include breakpoint(tablet) {
            display: none;

            transition: all .3s ease-in-out;
            width: 100%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 1rem;
            color: white;
        }

        &__item {
            margin: 0.5rem 1rem;
            font-weight: 500;

            &--btn {
                display: block;

                @include breakpoint(tablet) {
                    display: none !important;
                }  
            }

            @include breakpoint(tablet) {
                width: 100%;
                margin: 0;
                padding: 1rem 0;
                text-align: center;
            }

            &:last-of-type {
                @include breakpoint(tablet) {
                    margin: 0;
                }
            }
        }    
    }

    .navbar-btn--dark {
        background-color: darken($color-secondary, 5) !important;

        &:hover {
            background-color: darken($color-secondary, 10) !important;
        }
    }

    .navbar-toggle {
        display: none;
        color: white;  
    
        @include breakpoint(tablet) {
            display: block;
            position: absolute;
            top: 20px;
            right: 24px;
        }
    }

    .nav-color-white {
        color: white;
    }

    .is-open {
        display: block;
    }

</style>