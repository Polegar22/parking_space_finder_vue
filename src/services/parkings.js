import axios from '@/services/api'

const parkingsUrl = "/parkings/"

export default{
  getEmptySpots(){
    return [{
        latitude: 48.883625,
        longitude: 2.338387
      }, {
        latitude: 48.883322,
        longitude: 2.334476
      }, {
        latitude: 48.88242,
        longitude: 2.337925
      }]
    //return axios.get(parkingsUrl)
  },
  createEmptySpot(emptySpot){
    axios.post(parkingsUrl, emptySpot)
  }
}
