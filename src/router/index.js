import Vue from 'vue'
import Router from 'vue-router'
import MainView from '@/components/pages/MainView'
import Demo from '@/components/pages/Demo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainView',
      component: MainView
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    }
  ]
})
