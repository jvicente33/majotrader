import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/layouts/Home.vue'
import Contact from './components/layouts/Contact.vue'
import AboutMe from './components/layouts/AboutMe.vue'
import Services from './components/layouts/ServicesAll.vue'
import Education from './components/layouts/EducationAll.vue'
import Blog from './components/layouts/BlogAll.vue'

Vue.use(Router)

export default new Router({
  //mode: 'history',
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
    },
    {
      path: '/about',
      name: 'about',
      component: AboutMe
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/education',
      name: 'education',
      component: Education
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    }
  ]
})
