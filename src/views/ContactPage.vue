<template>
    <main>
        <section class="section contact m-top" style="margin-top: 8rem">
            <div class="container">
                <h2 class="lowercase">Nog een vraag? Laat het ons weten!</h2>
            </div>
            <div class="container flex">
                <div class="contact__column col-4">
                    <div class="contact__block">
                        <h4>Tom Neuttiens</h4>
                        <p>
                            <span>Docent 3D Modeling</span>
                            <br> 
                            <a class="orange">tom.neuttiens@arteveldehs.be</a> 
                        </p>
                    </div>
                    <div class="contact__block">
                        <h4>Inge Sintobin</h4>
                        <p>
                            <span>Docent 3D Modeling</span>
                            <br> 
                            <a class="orange">inge.sintobin@arteveldehs.be</a> 
                        </p>
                    </div>
                </div>
                <div class="contact__column col-4">
                    <div class="contact__block">
                        <h4>Contact</h4>
                        <p>
                            Campus Kantienberg
                            <br>
                            Voetweg 66
                            <br>
                            9000 Gent
                        </p>
                        <p class="orange">
                            +32 45 41 25 21
                            <br>
                        </p>
                    </div>
                </div>
                <div class="contact__column col-4">
                    <div class="contact__block">
                        <h4>Sociale Media</h4>
                        <p class="contact__social">
                            Volg ons en kom meer te weten<br>
                            <a href="#">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section map">
            <vue-map
                :accessToken="token"
                :mapOptions="mapOptions"
            ></vue-map>
        </section>
        <section class="section contact-form">
            <h3>Contactformulier</h3>
            <form class="form">
                <div class="form-group">
                    <label for="name">Naam</label>
                    <input type="text" class="form-control" name="name">
                </div>
                <div class="form-group">
                    <label for="subject">Onderwerp</label>
                    <input type="text" class="form-control" name="subject">
                </div>
                <div class="form-group"><link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.1/mapbox-gl.css' rel='stylesheet' />
                    <label for="message">Bericht</label>
                    <textarea class="form-control" name="message" rows="10"></textarea>
                </div>
                <button class="btn btn--primary">Schrijf je in</button>
            </form>
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
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .orange {
        color: $color-primary;
    }
    .lowercase {
        text-transform: inherit;
    }
    .contact-form {
        max-width: 560px;
        margin-left: auto;
        margin-right: auto;

        @include breakpoint(mobile) {
            padding: 0 1.5rem;
        }
    }
    .contact-form > h3 {
        margin-bottom: 4rem;
    }
    .form-group {
        display: flex;
        flex-direction: column;
        margin: 2rem 0;
    }
    .form-group > label {
        margin-bottom: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        text-align: left;
    }
    .form-control {
        background: #EBEBEB;
        border-radius: 8px;
    }
    .form-control[type="text"] {
        height: 40px;
    }
    .form {
        text-align: center;
    }
    .contact__social {
        & i {
            margin-top: 10px;
            font-size: 1.5rem;
            transition: all .3s ease;

            &:hover {
                color: $color-primary;
            }
        }
    }
</style>
