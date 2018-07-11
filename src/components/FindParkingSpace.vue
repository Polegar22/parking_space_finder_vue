<template>
<div>
  <GmapMap :center="{lat:10, lng:10}" :zoom="7" map-type-id="terrain" style="width: 500px; height: 300px">
    <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position" />
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
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
