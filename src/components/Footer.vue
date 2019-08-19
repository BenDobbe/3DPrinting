<template>
    <footer class="footer">
        <div class="container flex flex--center" style="height: 100px">
            <div class="footer-social__block">
                <ul class="footer-social-list">
                    <li class="footer-social-list__item">
                        <a class="footer-social-list__link" href="https://www.facebook.com/groups/471776783555817/">
                            <img class="footer-social-list__symbol" src="../assets/icons/icon-facebook-white.svg">
                        </a>
                    </li>
                    <li class="footer-social-list__item">
                        <a class="footer-social-list__link" href="https://www.instagram.com/3dprintingartevelde/">
                            <img class="footer-social-list__symbol" src="../assets/icons/icon-instagram-white.svg">
                        </a>
                    </li>
                </ul>
            </div>
            <div class="footer-logo__block">
                <div class="footer__logo">
                    <img src="../assets/icons/artevelde.png">
                </div>
                <span class="footer__logo-caption">
                    Copyright © 2019 Arteveldehogeschool
                </span>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss">
    .footer {
        height: 100px;
        background-color: $color-secondary; 

        &__logo {
            width: 75px;

            & > img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            &-caption {
                font-size: 0.8rem;
                color: white;
                padding: 0.5rem 0;
            }
        }

        &-logo__block {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            margin-left: 2rem;
        }
    }

    .footer-social-list {
        display: flex;
        margin: 0;
        padding: 0;
        
        &__link {
            display: block;
            text-decoration: none;
        }

        &__symbol {
            display: inline-block;
            width: 30px;
            height: 30px;
            margin-right: 1rem;
        }
    }
</style>
