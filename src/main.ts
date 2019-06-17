import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import './registerServiceWorker'
import element from 'element-ui'
/* 替换:import Vue, {PluginObject} from 'vue' */
import iView from 'iview'
import 'element-ui/lib/theme-chalk/index.css'
import 'iview/dist/styles/iview.css'
import '../public/static/iconfont/iconfont.css'
/* 炫酷背景:vue粒子效果 */
import VueParticles from 'vue-particles'

/* public\static\iconfont\iconfont.css */

Vue.config.productionTip = false
Vue.use(element)
Vue.use(iView)
Vue.use(VueParticles)

new Vue({ router, store, render: h => h(App) }).$mount('#app')
