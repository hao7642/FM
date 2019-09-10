import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import { prototype } from 'eventemitter3';

Vue.use(Router)

const router= new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:'/user'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path:'/user',
      name:'user',
      component:()=>import('./views/user.vue' )
    },
    {
      path:'/list',
      name:'list',
      component:()=>import ('./views/list.vue')
    },
    {
      path:'/common',
      name:'common',
      component:()=>import('./views/common.vue')
    }
  ]
})

router.beforeEach((to,from,next)=>{
  let arr=['list','common']
  if(arr.includes(to.name)){
    if(!localStorage.getItem('token')){
      next({ path: '/user', query: { redirect: to.fullPath } })
    }else{
      next()
    }
  }else{
next()
  }
})



export default router