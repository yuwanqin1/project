import Vue from 'vue'
import Router from 'vue-router'
import user from './login'

Vue.use(Router)
/* const About = () => import(/* webpackChunkName: "about" */ /* './views/About.vue'); */
const routers = new Router({
  mode: "history",
  base: '/',
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
