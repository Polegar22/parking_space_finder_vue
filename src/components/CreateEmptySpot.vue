<template>
<div class="createEmptySpot">
  <google-map name="createEmptySpot"></google-map>
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
              <label for="spotComment">Infos</label>
              <md-textarea v-model="emptySpot.comment" name="spotComment"></md-textarea>
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
import service from '@/services/parkings'
import GoogleMap from '@/components/map/GoogleMap'


export default {
  name: 'createEmptySpot',
  components: {
    GoogleMap,
  },
  data() {
    return {
      emptySpot: {
        latitude: '48.883054',
        longitude: '2.338634',
        size: '',
        type: '',
        comment: '',
      },
    }
  },
  methods: {
    createSpace() {
      service.createEmptySpot(this.emptySpot)
        .then(reponse => {
          this.emptySpot = reponse.data
          this.$router.push("/")
        })
        .catch(error => console.log(error))
    },
  }
}
</script>

<style lang="scss">

</style>
