<template>
<div>
  <GmapMap :center="{lat:10, lng:10}" :zoom="7" map-type-id="terrain" style="width: 100%; height: 100%">
  </GmapMap>

  <router-link :to="{ name:'CreateFreeSpace'}">
    <md-speed-dial class="md-bottom-right md-fixed">
      <md-speed-dial-target class="md-accent">
        <md-icon>add</md-icon>
      </md-speed-dial-target>
    </md-speed-dial>
  </router-link>
</div>
</template>

<script>
export default {
  name: 'findParkingSpace'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
