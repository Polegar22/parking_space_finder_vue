import Vue from 'vue'
import Router from 'vue-router'
import DefaultToolbar from '@/components/toolbars/DefaultToolbar'
import FindParkingSpace from '@/components/FindParkingSpace'

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
          pagetitle: 'Parking space finder'
        }
      }
    }
  ]
})
