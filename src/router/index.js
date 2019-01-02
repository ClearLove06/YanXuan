
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



Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/msite',
      component:MSite
    },
    {
      path:'/sort',
      component:Sort,
    },
    {
      path:'/find',
      component:Find,
      children:[
        {
          path:'/find/findtab',
          component:FindTab,
        },
        {
          path:'/find/expert',
          component:Expert,
        },
        {
          path:'/find/update',
          component:Update,
        },
        {
          path:'/find/share',
          component:Share,
        },
        {
          path:'/find/home',
          component:Home,
        },
        {
          path:'/',
          redirect:'/find/findtab'
        },

      ]
    },
    {
      path:'/shopping',
      component:Shopping
    },
    {
      path:'/person',
      component:Person
    },
    {
      path:'/',
      redirect:'/msite'
    },
  ]
})
