<template>
<div>
  <google-map name="example"></google-map>

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
export default {
  name: 'findParkingSpace',
  components: {
    GoogleMap,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
