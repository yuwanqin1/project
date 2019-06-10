import Vue from 'vue'
import Router from 'vue-router'
import user from './login'

Vue.use(Router)
const routers = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../components/index.vue'),
      children: [
        {
          ...user
        }
      ]
    }
  ]
})

export default routers
