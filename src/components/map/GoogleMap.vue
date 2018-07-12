<template>
<div class="google-map" :id="mapName"></div>
</template>

<script>
export default {
  name: 'google-map',
  props: {
    name: String,
    emptySpots: Array
  },
  data: function() {
    return {
      mapName: this.name + "-map",
      map: null,
      bounds: null,
    }
  },
  watch: {
    emptySpots: function(newValues, oldValues) {
      if (newValues) {
        newValues.forEach((spot) => {
          const position = new google.maps.LatLng(spot.latitude, spot.longitude);
          const marker = new google.maps.Marker({
            position,
            map: this.map
          });
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
</style>
