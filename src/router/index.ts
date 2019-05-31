import Vue from 'vue'
import Router from 'vue-router'

import user from './login'

Vue.use(Router)
const routers = new Router({
  base: '/',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../components/index.vue'),
      children: []
    },
    user
  ]
})

export default routers
