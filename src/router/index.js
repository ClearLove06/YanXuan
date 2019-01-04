
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Sort from '../pages/Sort/Sort.vue'
import Find from '../pages/Find/Find.vue'
import Shopping from '../pages/Shopping/Shopping.vue'
import Person from '../pages/Person/Person.vue'
import FindTab from '../pages/Find/FindTab/FindTab.vue'
import Expert from '../pages/Find/FindTab/Expert.vue'
import Update from '../pages/Find/FindTab/Update.vue'
import Share from '../pages/Find/FindTab/Share.vue'
import Home from '../pages/Find/FindTab/Home.vue'
import Search from '../pages/Search/ search.vue'

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
      meta: {
        showFooter: true
      }
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
