import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/layouts/Home.vue'
import Contact from './components/layouts/Contact.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
