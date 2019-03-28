<template>
    <footer class="footer">
        <div class="container flex">
            <div class="col-4">
                <img src="../assets/images/artevelde.png" style="width: 150px">
            </div>
            <div class="col-4">
                <h4 class="footer__title">Contact</h4>
                <p>
                    Campus Kantienberg <br>
                    Voetweg 66 <br>
                    9000 Gent
                </p>
            </div>
            <div class="col-4">
                <h4 class="footer__title">Volg ons</h4>
                <p class="footer__social">
                    We posten leuke projecten, evenementen en opportuniteiten...<br>
                    <a href="#">
                        <i class="fab fa-instagram"></i>
                    </a>
                </p>
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
    /* TODO: Fix footer */
    .footer {
        border-top: 1px solid #eee;
        border-bottom: 6px solid $color-primary;
        padding: 3rem 2rem;

        @include breakpoint(mobile) {
            padding: 2rem 0;
        }

        &__title {
            margin-top: 0;

            @include breakpoint(mobile) {
                margin-top: 2rem;
                margin-bottom: 1.5rem;
            }
        }

        &__social {
            & i {
                margin-top: 10px;
                font-size: 1.5rem;
                transition: all .3s ease;

                &:hover {
                    color: $color-primary;
                }
            }
        }
    }
</style>
