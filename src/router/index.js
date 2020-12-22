import Vue from 'vue'
import Router from 'vue-router'
import Container from '../layout/Container'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Container',
      component: Container,
      redirect: '/main-dashboard',
      children: [
        {
            path: '/main-dashboard',
            name: 'Dashboard'
        }
      ]
    }
  ]
})
