<template>
  <div class="better-scroll" >
    <div class="box" ref="picsUl">
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
    mounted(){
      this.timeoutId =  null
      this.$store.dispatch('getTabData')
      this._inScroll()
    },
    methods:{
      _inScroll(){
        if(!this.scroll){
          this.scroll = new BScroll('.better-scroll',{
            click:true,
            pullUpLoad: {
              threshold:1000
            }
          })
        }else{
          this.scroll.on('pullingUp',()=>{
            if(this.timeoutId !== null){
              clearTimeout(this.timeoutId)
            }
            this.timeoutId = setTimeout(()=>{
              this.$store.dispatch('getTabData')
            },1000)
            this.scroll.finishPullUp()
          })
        }
        this.scroll.refresh()
      }
    },
    watch:{
      TabData(){
        this._inScroll()
      }
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
    height 530px
    .box
      position relative
      .content-list
        width: 100%;
        background: #fff;
        margin: .2rem 0;
        box-sizing: border-box;
        padding: .36rem .3rem;
        position relative

</style>
