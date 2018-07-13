import axios from '@/services/api'

const parkingsUrl = "/parkings/"

function serialize(spot) {
	return {
			latitude: spot.latitude,
			longitude: spot.longitude,
			type: spot.type,
			size: spot.size,
      plannedDuration: "",
			comment: spot.comment
	}
}

export default{
  getEmptySpots(){
    return axios.get(parkingsUrl)
  },
  createEmptySpot(emptySpot){
    return axios.post(parkingsUrl, serialize(emptySpot))
  }
}
