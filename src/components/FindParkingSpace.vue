<template>
<div>
  <google-map name="example"></google-map>
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
