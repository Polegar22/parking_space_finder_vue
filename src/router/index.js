import Vue from 'vue'
import Router from 'vue-router'
import DefaultToolbar from '@/components/toolbars/DefaultToolbar'

import FindParkingSpace from '@/components/FindParkingSpace'
import CreateFreeSpace from '@/components/CreateFreeSpace'

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
      path: '/createFreeSpace',
      name: 'CreateFreeSpace',
      components: {
        default: CreateFreeSpace,
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
