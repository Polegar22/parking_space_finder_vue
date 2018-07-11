<template>
<div class="createEmptySpot">
  <form class="md-layout" @submit.prevent="createSpace">
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title">Place libre</div>
      </md-card-header>
      <md-card-content>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-size-100 ">
            <md-radio v-model="emptySpot.type" name="spotType" value="free">Gratuite</md-radio>
            <md-radio v-model="emptySpot.type" name="spotType" value="pay">Payante</md-radio>
            <md-radio v-model="emptySpot.type" name="spotType" value="delivery">Livraison</md-radio>
          </div>
          <div class="md-layout-item md-size-100">
            <md-field>
              <label for="spotSize">Taille de la place</label>
              <md-input v-model="emptySpot.size" name="spotSize"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100">
            <md-field>
              <label for="spotInfos">Infos</label>
              <md-textarea v-model="emptySpot.infos" name="spotInfos"></md-textarea>
            </md-field>
          </div>
        </div>
      </md-card-content>
      <md-card-actions>
        <md-button type="submit" class="md-raised md-primary">Créer place</md-button>
      </md-card-actions>
    </md-card>
  </form>
</div>
</template>

<script>
export default {
  data() {
    return {
      emptySpot: {
        size: '',
        type: '',
        infos: '',
      },
    }
  },
  methods: {
    createSpace() {
      console.log(this.emptySpot)
      //TODO call api
    },
  }
}
</script>

<style lang="scss">

</style>
