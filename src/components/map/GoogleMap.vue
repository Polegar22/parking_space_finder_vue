<template>
<div class="google-map">
  <transition name="fade">
    <gmap-marker-card v-if="showSidePanel" :spot="currentSpot"></gmap-marker-card>
  </transition>
  <div class="google-map" :id="mapName"></div>
</div>
</template>

<script>
import GmapMarkerCard from '@/components/map/GmapMarkerCard'
export default {
  name: 'google-map',
  components: {
    GmapMarkerCard,
  },
  props: {
    name: String,
    emptySpots: Array,
    showSidePanel: false,
    currentSpot: {},
  },
  data: function() {
    return {
      mapName: this.name + "-map",
      map: null
    }
  },
  watch: {
    emptySpots: function(newValues, oldValues) {
      if (newValues) {
        const self = this
        newValues.forEach((spot) => {
          const contentStr = 'test'
          const infoWindow = new google.maps.InfoWindow({
            content: contentStr
          })
          const position = new google.maps.LatLng(spot.latitude, spot.longitude);
          const marker = new google.maps.Marker({
            position,
            map: this.map,
          });
          marker.addListener('click', () => {
            self.showSidePanel = true
            this.currentSpot = spot
          })
        });
      }
    }
  },
  mounted: function() {
    const element = document.getElementById(this.mapName)
    const options = {
      zoom: 18,
      center: new google.maps.LatLng(48.857386, 2.351833)
    }
    this.map = new google.maps.Map(element, options);
    this.geolocate()
  },
  methods: {
    geolocate() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          var curPos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          this.map.setCenter(curPos)
          const curPosMarker = new google.maps.Marker({
            position: curPos,
            map: this.map,
            icon: {
              path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
              scale: 4
            }
          });

          //Permet de tourner le marker en fonction de la direction
          if (window.DeviceOrientationEvent) {
            window.addEventListener('deviceorientation', event => {
              var alpha = null;
              //Check for iOS property
              if (event.webkitCompassHeading) {
                alpha = event.webkitCompassHeading;
              }
              //non iOS
              else {
                alpha = event.alpha;
              }
              var locationIcon = curPosMarker.get('icon');
              locationIcon.rotation = 360 - alpha;
              curPosMarker.set('icon', locationIcon);
            }, false);
          }
        });
      } else {
        console.log("Veuillez activer la géolocalisation")
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.google-map {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: gray;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

/* .fade-leave-active below version 2.1.8 */

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
