<template>
    <div class="navbar__sticky">
        <div class="container--wide">
            <nav class="navbar">
                <span class="navbar-toggle" id="js-navbar-toggle">
                    <i>x</i>
                </span>
                <router-link to="home">
                    <h3 class="navbar__brand">
                        3D Print
                    </h3>
                </router-link>
                <ul class="nav">
                    <navbar-link slug="home" class="nav__item">Home</navbar-link>
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
            justify-content: flex-start;
            align-items: flex-start;
        }

        &__sticky {
            z-index: 999;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background-color: $color-primary;
            box-shadow: 0 2px 4px rgba(50,50,50,.1);
        }

        &__brand {
            color: #fff;
            font-weight: 700;
            font-size: 1.5rem;
            transition: all .2s ease-in-out;

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
        color: white;
        
        @include breakpoint(mobile) {
            display: none;

            width: 100%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0;
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
        
        &__link {
            position: relative;
            
            &.is-selected {
                &:after {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background: #fff;
                    content: '';
                    opacity: 1;
                    transition-property: width;
                    transform: translateY(5px);
                }
            }   

            &:after {
                position: absolute;
                top: 100%;
                left: 0;
                width: 0;
                height: 3px;
                background: #fff;
                content: '';
                opacity: 1;
                transition: all .2s ease-in-out;
                transition-property: width;
                transform: translateY(5px);
            }

            &:hover:after {
                width: 100%;
            }
        }

        & > .btn {
            @include breakpoint(mobile) {
                display: none;
            }
        }
    }

    .navbar-toggle {
        display: none;

        @include breakpoint(mobile) {
            display: block;

            position: absolute;
            top: 1.5rem;
            right: 0;
        }
    }
</style>