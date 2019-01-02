<template>
  <div class="better-scroll">
    <div class="box">
      <div class="content-list" v-for="(li,index) in TabData">
        <TypeOne :li="li" v-if="li.style===1"/>
        <TypeTwo :li="li" v-if="li.style===2"/>
      </div>
    </div>
  </div>

</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import TypeOne from '../../../components/FindList/TypeOne/TypeOne.vue'
  import TypeTwo from '../../../components/FindList/TypeTwo/TypeTwo.vue'
  export default {
    data(){
      return{
        page:1,
        size:5,
        tabId:4,
      }
    },
    mounted(){
      const{page,size,tabId} =this
      this.$store.dispatch('getTabData',{page,size,tabId})
        new BScroll('.better-scroll',{
          click:true,
          pullUpLoad: {

          }
        })

    },
    computed:{
      ...mapState(['TabData']),

    },
    components:{
      TypeOne,
      TypeTwo
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .better-scroll
    height 15rem
    .box
      .content-list
        width: 100%;
        background: #fff;
        margin: .2rem 0;
        box-sizing: border-box;
        padding: .36rem .3rem;
        position relative

</style>
