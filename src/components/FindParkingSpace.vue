<template>
<div>
  <google-map name="parkings" :emptySpots="this.emptySpots"></google-map>

  <router-link :to="{ name:'CreateEmptySpot'}">
    <md-speed-dial class="md-bottom-right md-fixed">
      <md-speed-dial-target class="md-accent">
        <md-icon>add</md-icon>
      </md-speed-dial-target>
    </md-speed-dial>
  </router-link>
</div>
</template>

<script>
import GoogleMap from '@/components/map/GoogleMap'
import service from '@/services/parkings'

export default {
  name: 'findParkingSpace',
  components: {
    GoogleMap,
  },
  mounted() {
    this.getEmptySpots()
  },
  data() {
    return {
      emptySpots: [],
    }
  },
  methods: {
    getEmptySpots() {
      this.emptySpots = service.getEmptySpots()
      //.then(reponse => this.emptySpots = reponse.data)
      //.catch(error => console.log(error))
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
