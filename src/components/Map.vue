<template>
    <div>
        <!-- Placeholder map if Mapbox fails loading --> 
        <img v-if="!isLoaded" src="../assets/images/map--gray.png" class="map"> 
        <div :id="(mapOptions.hasOwnProperty('container') ? mapOptions.container : 'map')" class="map"></div>
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
            map: null,
            isLoaded: false,
            markerData: null
        }
    },
    mounted () {
        const map = this.initMap();
        this.map = map;
    },
    methods: {
        initMap() {
            mapboxgl.accessToken = this.accessToken;

            if (!this.mapOptions.hasOwnProperty('container')) {
                this.mapOptions.container = 'map';
            }
            
            // Initiate the map
            const map = new mapboxgl.Map(this.mapOptions);

            // Disable map rotation (right click + drag)
            map.dragRotate.disable();
            
            // When map is loaded, add markers
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
                        coordinates: [3.728491617369082, 51.0410]
                    },
                    properties: {
                        title: 'Campus Mariakerke',
                        description: 'Arteveldehogeschool'
                    }
                }]
            };

            this.markerData.features.forEach((marker) => {
                const el = document.createElement('div');
                el.className = 'marker';

                new mapboxgl.Marker(el)
                    .setLngLat(marker.geometry.coordinates)
                    .setPopup(new mapboxgl.Popup({ offset: 25 })
                    .setHTML('<h5>' + marker.properties.title + '</h5><p>' + marker.properties.description + '</p>'))
                    .addTo(map);
            });
        }
    },
}
</script>

<style lang="scss">
    .map {
        width: 100%;
        height: 500px;
        
        @include breakpoint(mobile) {
            height: 300px;
        }
    }

    .marker {
        background-image: url('../assets/icons/map-marker.svg');
        background-size: cover;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
    }

    .mapboxgl-popup {
        max-width: 500px;
    }

    .mapboxgl-popup-content {
        text-align: center;

        & > h5 {
            font-size: 1.1rem;
            text-transform: none;
            margin-bottom: 0;
        }
        
        & > p {
            margin-top: 0.5rem;
        } 
    }
</style>