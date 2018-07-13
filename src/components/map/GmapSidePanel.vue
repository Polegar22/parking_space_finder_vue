<template>
<div class="gmap-side-panel">
  <div>
    Tarif : {{ spot.type }}
  </div>
  <div>
    Taille : {{ spot.size }}
  </div>
  <div>
    Infos : {{ spot.infos }}
  </div>
</div>
</template>

<script>
export default {
  props: ['spot'],
}
</script>

<style>
.gmap-side-panel {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  min-height: 150px;
  overflow: auto;
  background-color: white;
  z-index: 2;

}
</style>
