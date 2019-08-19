<template>
    <main>
        <section class="classes">
            <vue-banner>
                <div class="video__content">
                    <h2>Ontdek onze classes</h2>
                    <h5>Basis, gevorderde en summerclass</h5>
                    <div class="video__play" @click="show">
                        <img src="../assets/icons/play.svg" alt="Play Icon">
                    </div>
                </div>
            </vue-banner>
            
            <div class="container">
                <div class="class__wrapper">
                    <class-card-list :classes="classes"></class-card-list>
                </div>
            </div>
        </section>
                     
        <modal name="promo-video"
            :adaptive="true"
            :width="1280"
            height="auto"
            @opened="activate"
            @closed="destroy"
        >
            <div slot="top-right">
                <button @click="hide" class="video__close">
                    ❌
                </button>
            </div>
           <div class="video__wrapper">
                <div class="plyr__video-embed" id="player">
                    <iframe
                        :src="this.video + '?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1'"
                        allowfullscreen
                        allowtransparency
                        allow="autoplay"
                    ></iframe>
                </div>
            </div>
        </modal>
    </main>
</template>

<script>
import Plyr from 'plyr';

import VideoBanner from '../components/VideoBanner.vue';
import ClassCardList from '../components/ClassCardList.vue';

import RestService from '../services/RestService';

export default {
    name: 'ClassesPage',
    components: {
        'vue-banner': VideoBanner,
        ClassCardList
    },
    data() {
        return {
            classes: [],
            video: null,
            player: null,
            windowWidth: 0,
            mobile: false,
        }
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', () => {
                this.windowWidth = window.innerWidth

                if (this.windowWidth <= 870) {
                    this.mobile = true;
                }
            });
        })
    },
    created() {
        this.fetchClasses();
        this.fetchVideo();
    },
    methods: {
        async fetchClasses() {
            const { data } = await RestService.get('/classes?_embed');            
            this.classes = data;
        },
        async fetchVideo() {
            const { data } = await RestService.get('/posts?slug=video');
            this.video = data[0].acf.video_link;
        },
        show() { 
            if (this.mobile) {
                window.location.href = this.video;
            }
            this.$modal.show('promo-video');
        },
        hide() {
            this.$modal.hide('promo-video');
        },
        activate() {
            this.player = new Plyr('#player', {
                autoplay: true
            });   
        },
        destroy() {
            this.player.pause();
            this.player.destroy();
        },
        
    }
}
</script>

<style lang="scss">
    @import '../../node_modules/plyr/dist/plyr.css';

    .classes {
        margin-bottom: 3rem;
    }
    
    .class__wrapper {
        border-radius: $border-radius-primary;
        margin-top: -50px;
        z-index: 99;
    }

    .video {
        &__play {
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 60px;
            height: 60px; 
            border-radius: 50%; 
            transition: all .3s ease;
            cursor: pointer;
            
            & > img {
                width: 20px;
            }
            
            &:hover {
                transform: scale(1.1) !important;
            }

            @include breakpoint(tablet) {
                width: 40px;
                height: 40px;

                & > img {
                    width: 15px;
                }
            }
        }

        &__close {
            padding: 1rem;
            font-size: 2rem;
        }

        &__content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
            z-index: 99;
            color: white;

            & > h2 {
                margin: 1rem;
                color: white;
            }

            & > h5 {
                margin-top: 0;
                margin-bottom: 2rem;
            }

            @include breakpoint(tablet) {
                height: 100%;

                & > h2 {
                    font-size: 2em;
                }

                & > h5 {
                    margin-bottom: 1rem;
                }
            }

            @include breakpoint(mobile) {
                height: 100%;

                & > h2 {
                    font-size: 1.5em;
                }

                & > h5 {
                    font-size: 0.9em;
                    margin-bottom: 1rem;
                }
            }
        }
    }
</style>
