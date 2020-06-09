import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/pages/Home'
import Blog from '@/components/pages/Blog'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
