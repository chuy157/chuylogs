import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Blog from '@/pages/Blog'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:'/home'
    },
    {
      path: '/home', // http://localhost:8080/#/
      name: 'Home',
      component: Home
    },
    {
      path: '/blog', // http://localhost:8080/#/blog
      name: 'Blog',
      component: Blog
    }
  ]
})
