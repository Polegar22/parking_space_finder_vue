import Vue from 'vue'
import Router from 'vue-router'
import FindParkingSpace from '@/components/FindParkingSpace'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FindParkingSpace',
      component: FindParkingSpace
    }
  ]
})
