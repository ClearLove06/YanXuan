
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store  from './store'
import VueLazyload from 'vue-lazyload'
import './mock/mookServer'
import loading from './common/imgs/loading1.gif'

Vue.use(VueLazyload,{
  loading
}),


new Vue({
  el: '#app',
  render:h=>h(App),
  router,
  store
})

