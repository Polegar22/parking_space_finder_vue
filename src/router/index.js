import Vue from 'vue'
import Router from 'vue-router'
import DefaultToolbar from '@/components/toolbars/DefaultToolbar'

import FindParkingSpace from '@/components/FindParkingSpace'
import CreateEmptySpot from '@/components/CreateEmptySpot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FindParkingSpace',
      components: {
        default: FindParkingSpace,
        toolbar: DefaultToolbar
      },
      props: {
        toolbar: {
          pagetitle: 'Trouver une place de parking'
        }
      }
    },
    {
      path: '/createEmptySpot',
      name: 'CreateEmptySpot',
      components: {
        default: CreateEmptySpot,
        toolbar: DefaultToolbar
      },
      props: {
        toolbar: {
          pagetitle: 'Indiquez une place libre'
        }
      }
    },
  ]
})
