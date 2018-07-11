<template>
<div>
  <GmapMap :center="{lat:10, lng:10}" :zoom="7" map-type-id="terrain" style="width: 100%; height: 100%">
  </GmapMap>
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
