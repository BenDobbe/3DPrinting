<template>
    <div class="navbar__sticky" id="nav">
        <div class="container--wide">
            <nav class="navbar">
                <span class="navbar-toggle" id="navbar-toggle" @click="onHamburgerClick">
                    <i class="fas fa-bars"></i>
                </span>
                <router-link to="home">
                    <h3 class="navbar__brand">
                        3D GDM
                    </h3>
                </router-link>
                <ul class="nav">
                    <navbar-link slug="home" class="nav__item">Home</navbar-link>
                    <navbar-link slug="classes" class="nav__item">Masterclasses</navbar-link>
                    <navbar-link slug="showcase" class="nav__item">Showcase</navbar-link>
                    <navbar-link slug="contact" class="nav__item">Contact</navbar-link>
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
    mounted() {
        this.$nextTick(() => {
            window.addEventListener("scroll", this.onScrollNavbar)
        })
    },
    methods: {
        onScrollNavbar() {
            const navbar = document.getElementById("nav")
            const nav_classes = navbar.classList;

            if(document.documentElement.scrollTop >= 75) {
                if (nav_classes.contains("shrink") === false) {
                    nav_classes.toggle("shrink");
                }
            }
            else {
                if (nav_classes.contains("shrink") === true) {
                    nav_classes.toggle("shrink");
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
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        @include breakpoint(mobile) {
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
        }

        &__sticky {
            z-index: 999;
            width: 100%;
            position: fixed;
            padding: 0.75rem 0;
            top: 0;
            left: 0;
            transition: all .3s ease-in-out;
            
            @include breakpoint(mobile) {
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
            
            @include breakpoint(mobile) {
                color: white;
            }

            &:hover {
                color: $color-secondary;
            }
        }
    }

    .nav {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-weight: 700;
        color: $color-text;
        transition: all .3s ease-in-out;
        @include breakpoint(mobile) {
            display: none;
            
            width: 100%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0;
            color: white;
        }

        &__item {
            margin: 0.5rem 1rem;
            
            @include breakpoint(mobile) {
                width: 100%;
                margin: 0;
                padding: 1rem 0;
                text-align: center;
            }

            &:last-of-type {
                margin-right: 3rem;

                @include breakpoint(mobile) {
                    margin: 0;
                }
            }
        }    
    }

    .navbar-toggle {
        display: none;
        color: white;
        margin-top: 3px;
        font-size: 1.2rem;    
    
        @include breakpoint(mobile) {
            display: block;

            position: absolute;
            top: 1.5rem;
            right: 0;
        }
    }

    .is-open {
        display: block;
    }
</style>