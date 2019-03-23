<template>
    <div>
        <!-- Placeholder map if Mapbox fails loading --> 
        <img v-if="!isLoaded" src="../assets/images/map--gray.png" class="map"> 
        <div  :id="(mapOptions.hasOwnProperty('container') ? mapOptions.container : 'map')" class="map"></div>
    </div>
</template>

<script>
import mapboxgl from 'mapbox-gl';

export default {
    name: 'AppMap',
    props: {
        accessToken: {
            type: String,
            required: true
        },
        mapOptions: {
            type: Object,
        }
    },
    data () {
        return {
            _map: null,
            isLoaded: false,
            markerData: null
        }
    },
    mounted () {
        const map = this.initMap();
        this._map = map;
    },
    methods: {
        initMap() {
            mapboxgl.accessToken = this.accessToken;

            if (!this.mapOptions.hasOwnProperty('container')) {
                this.mapOptions.container = 'map';
            }
            
            const map = new mapboxgl.Map(this.mapOptions);

            map.on('style.load', () => {
                this.addMarkers(map);
                this.isLoaded = !this.isLoaded;
                
            });      
        },
        addMarkers(map) {
            this.markerData = {
                type: 'FeatureCollection',
                features: [{
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: this.mapOptions.center,
                    },
                    properties: {
                        title: 'Arteveldehogeschool',
                        description: 'Campus Kantienberg'
                    }
                }]
            };

            this.markerData.features.forEach((marker) => {
                const el = document.createElement('div');
                el.className = 'marker';

                new mapboxgl.Marker(el)
                    .setLngLat(marker.geometry.coordinates)
                    .addTo(map);
            });
        }
    },
}
</script>

<style lang="scss" scoped>
    .map {
        width: 100%;
        height: 500px;
        
        @include breakpoint(mobile) {
            height: 300px;
        }
    }
    .marker {
            background: red;
            width: 50px;
            height: 50px;
        }
</style>