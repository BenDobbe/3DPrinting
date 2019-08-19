<template>
    <main>
        <div class="container contact__container m-top">
            <section class="contact">
                <h3>Nog een vraag? Laat het ons weten!</h3>
                <section class="contact-form">
                    <form action="https://send.pageclip.co/Ew0DBMmNoZbGFQ9ghGctVEzrwz1QZpdq/artevelde-contact-form" class="pageclip-form" method="post">
                        <div class="form-group">
                            <label for="name">Email</label>
                            <input type="email" :class="['form-control', { 'is-danger': errors.has('email') }]" name="email" id="email" v-validate="'required|email'" required>
                        </div>
                        <div class="form-group">
                            <label for="name">Naam</label>
                            <input type="text" class="form-control" name="name" id="name">
                        </div>
                        <div class="form-group">
                            <label for="subject">Onderwerp</label>
                            <input type="text" :class="['form-control', { 'is-danger': errors.has('subject') }]" name="subject" id="subject" v-validate="'required'" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Bericht</label>
                            <textarea class="form-control" name="message" id="message" rows="10"></textarea>
                        </div>
                        <button class="pageclip-form__submit btn btn--primary" type="submit"  @click="validateBeforeSubmit">
                            <span>Verzend</span>
                        </button>
                    </form>
                </section>
                <section class="contact-info">
                    <div class="contact-info__block">
                        <h4>Tom Neuttiens</h4>
                        <p>
                            <span>Docent 3D Modeling</span>
                            <br> 
                            <a href="mailto:tom.neuttiens@arteveldehs.be" class="link--mail">tom.neuttiens@arteveldehs.be</a> 
                        </p>
                    </div>
                    <div class="contact-info__block">
                        <h4>Inge Sintobin</h4>
                        <p>
                            <span>Coördinator</span>
                            <br> 
                            <a href="mailto:inge.sintobin@arteveldehs.be" class="link--mail">inge.sintobin@arteveldehs.be</a> 
                        </p>
                    </div>
                    <div class="contact-info__block">
                        <h4>Contact</h4>
                        <p>
                            Campus Kantienberg
                            <br>
                            Voetweg 66
                            <br>
                            9000 Gent
                            <br>
                            +32 45 41 25 21
                            <br>
                            info@arteveldehs.be
                        </p>
                    </div>
                    <div class="contact-info__block">
                        <h4>Volg ons</h4>
                        <ul class="contact-social-list">
                            <li class="contact-social-list__item">
                                <a class="contact-social-list__link" href="https://www.facebook.com/groups/471776783555817/">
                                    <img class="contact-social-list__symbol" src="../assets/icons/icon-facebook-black.svg">
                                </a>
                            </li>
                            <li class="contact-social-list__item">
                                <a class="contact-social-list__link" href="https://www.instagram.com/3dprintingartevelde/">
                                    <img class="contact-social-list__symbol" src="../assets/icons/icon-instagram-black.svg">
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
        </div>
        <section class="map">
            <vue-map
                :accessToken="token"
                :mapOptions="mapOptions"
            ></vue-map>
        </section>
    </main>
</template>

<script>
import AppMap from '../components/Map';
import { config } from '../config/';

export default {
    name: 'ContactPage',
    components: {
        'vue-map': AppMap
    },
    data () {
        return {
            token: config.MAP_ACCESS_TOKEN,
            mapOptions: {
                container: 'red',
                style: 'mapbox://styles/mapbox/light-v9',
                center: [3.726710, 51.041052],
                zoom: 15,
            },
            hasErrors: true,
        }
    },
    methods: {
        validateBeforeSubmit() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    alert('Vraag is verstuurd. Bedankt!');
                    return;
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    .contact {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        margin: 4rem 0;

        @include breakpoint(tablet) {
            flex-direction: column;
        }
    }

    .contact-form {
        flex: 1 1 66%;
    }

    .contact-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1 1 calc(33% - 2rem);

        // padding-bottom: 4rem;
        padding-left: 4rem;
        
        @include breakpoint(tablet) {
            padding-left: 0;
        }

        &__block {
            & > h4 {
                margin-bottom: 0;
                line-height: 1.4;
            }
            & > p {
                margin-top: 0;
                line-height: 1.4;
            }
        }
    }

    .contact-social-list {
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

    .form-group {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;

        & > label {
            margin-bottom: 0.75rem;
            text-align: left;
        }
    }

    .form-control {
        display: flex;
        background-color: $color-grey;
        border: 2px solid $color-grey;

        &:focus {
            outline: none;
        }

        &.is-danger {
            border-color: red;
        }

        &[type="text"], &[type="email"] {
            padding: 1rem;
        }
    }

    .form-help {
        margin-top: 0.5rem;

        &.is-danger {
            color: red;
        }
    }

    textarea {
        padding: 1rem;
        resize: vertical;
    }
</style>
