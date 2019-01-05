
import Vue from 'vue'
import VueRouter from 'vue-router'
//五大路由

import SortList from '../pages/Sort/SortList.vue'
import MSite from '../pages/MSite/MSite.vue'
import Sort from '../pages/Sort/Sort.vue'
import Find from '../pages/Find/Find.vue'
import Shopping from '../pages/Shopping/Shopping.vue'
import Person from '../pages/Person/Person.vue'

/*const MSite = () => import('../pages/MSite/MSite.vue')
const Sort = () => import('../pages/Sort/Sort.vue')
const Find = () => import('../pages/Find/Find.vue')
const Shopping = () => import('../pages/Shopping/Shopping.vue')
const Person = () => import('../pages/Person/Person.vue')*/

//识物界面二级路由
import FindTab from '../pages/Find/FindTab/FindTab.vue'
import Expert from '../pages/Find/FindTab/Expert.vue'
import Update from '../pages/Find/FindTab/Update.vue'
import Share from '../pages/Find/FindTab/Share.vue'
import Home from '../pages/Find/FindTab/Home.vue'

/*const FindTab = () => import('../pages/Find/FindTab/FindTab.vue')
const Expert = () => import('../pages/Find/FindTab/Expert.vue')
const Update = () => import('../pages/Find/FindTab/Update.vue')
const Share = () => import('../pages/Find/FindTab/Share.vue')
const Home = () => import('../pages/Find/FindTab/Home.vue')*/
//搜索一级路由
const Search = () => import('../pages/Search/ search.vue')
//登陆注册一级路由
import Phone from '../pages/Person/login/Phone.vue'
import PostBox from '../pages/Person/login/PostBox.vue'
import Register from '../pages/Person/login/Register.vue'




Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/msite',
      component:MSite,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/search',
      component:Search,
    },
    {
      path:'/sort',
      component:Sort,
      redirect:'/sort/sortlist',
      meta: {
        showFooter: true
      },
      children:[
        {
          name: 'sortlist',
          path:'/sort/sortlist',
          component:SortList,
          meta: {
            showFooter: true
          }
        }
      ]
    },
    {
      path:'/find',
      component:Find,
      meta: {
        showFooter: true
      },
      children:[
        {
          path:'/find/findtab',
          component:FindTab,
          meta: {
            showFooter: true
          }
        },
        {
          path:'/find/expert',
          component:Expert,
          meta: {
            showFooter: true
          }
        },
        {
          path:'/find/update',
          component:Update,
          meta: {
            showFooter: true
          }
        },
        {
          path:'/find/share',
          component:Share,
          meta: {
            showFooter: true
          }
        },
        {
          path:'/find/home',
          component:Home,
          meta: {
            showFooter: true
          }
        },
        {
          path:'/',
          redirect:'/find/findtab'
        },

      ]
    },
    {
      path:'/shopping',
      component:Shopping,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/person',
      component:Person,
    },
    {
      path:'/phone',
      component:Phone,
    },
    {
      path:'/postbox',
      component:PostBox,
    },
    {
      path:'/register',
      component:Register,
    },
    {
      path:'/',
      redirect:'/msite'
    },
  ]
})


/*
*  children:[
 {
 path:'/person/phone',
 component:Phone,
 },
 {
 path:'/person/postbox',
 component:PostBox,
 },
 {
 path:'/person/register',
 component:Register,
 },
 ]
* */
