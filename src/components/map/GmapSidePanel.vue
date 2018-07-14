<template>
<md-card class="gmap-side-panel">
  <md-card-content>
    <div class="title">
      Place libre
    </div>
    <div class="sub-infos">
      <span>{{ spot.type ? spot.type : 'Tarif inconnu' }} </span>
      <span>-</span>
      <span>{{ spot.size ? spot.size : 'Taille inconnu' }} </span>
    </div>
    <div v-if="spot.infos" class="sub-infos">
      {{ spot.infos }}
    </div>
  </md-card-content>
  <md-card-actions md-alignment="left">
    <md-button class="md-raised md-primary">
      Itinéraire
    </md-button>
  </md-card-actions>
</md-card>
</template>

<script>
export default {
  props: ['spot'],
}
</script>

<style lang="scss" scoped>
.gmap-side-panel {
    position: absolute;
    bottom: 0;
    right: 0;
    min-height: 50px;
    width: 96%;
    margin: 2%;
    border-radius: 5px;

}

.sub-infos {
    opacity: 0.5;
    font-size: 14px;
}

.title {
    font-size: 16px;
}

.md-card-content {
    padding-bottom: 0;
}

.md-card-actions {
    padding-left: 16px;
}
</style>
