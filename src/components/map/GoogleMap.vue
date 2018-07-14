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
    emptySpots: Array
  },
  data: function() {
    return {
      mapName: this.name + "-map",
      map: null,
      bounds: null,
      showSidePanel: false,
      currentSpot: {},
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
          this.map.fitBounds(this.bounds.extend(position))
        });
      }
    }
  },
  mounted: function() {
    this.bounds = new google.maps.LatLngBounds();
    const element = document.getElementById(this.mapName)
    const options = {
      zoom: 14,
      center: new google.maps.LatLng(0.0, 0.0)
    }
    this.map = new google.maps.Map(element, options);
    google.maps.event.addListener(this.map, 'click', event => {
      this.showSidePanel = false
      this.currentSpot = {}
    })
    this.geolocate()
  },
  methods: {
    geolocate() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          this.map.setCenter(pos)
        });
      } else {
        console.log("Veuillez activer la géolocalisation")
      }
    },
  }
};
</script>

<style scoped lang="scss">
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
