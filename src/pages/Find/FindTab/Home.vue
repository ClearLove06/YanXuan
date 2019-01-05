<template>
  <div class="home-scroll">
    <div ref="height">
      <div class="home" v-for="(h,index) in HomeData">
        <a href="javascript:;">
          <div class="home-title">{{h.title}}</div>
          <div class="home-img">
            <img v-lazy="h.picUrl" alt="">
          </div>
          <div class="home-look">
            <i class="iconfont icon-shequneiicon-"></i>
            <span>{{(h.readCount/1000).toFixed(1)}}k人看过</span>
          </div>
        </a>
      </div>
    </div>
  </div>

</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['HomeData']),
    },
    methods:{
      _inScroll(){
        if(!this.scroll){
          this.scroll = new BScroll('.home-scroll',{
            pullUpLoad:true,
            click:true
          })
        }else{
          this.scroll.on('pullingUp',()=>{
            if(this.timeoutId !== null){
              clearTimeout(this.timeoutId)
            }else{
              this.timeoutId = setTimeout(()=>{
                this.$store.dispatch('getHomeData')
                this.scroll.finishPullUp()
              },1000)
            }
          })
        }
      }
    },
    mounted(){
      this.timeoutId = null
      this.$store.dispatch('getHomeData')
      this._inScroll()
    },
    watch:{
      HomeData(){
        this._inScroll()
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .home-scroll
    height 500px
    .home
      width: 100%;
      background: #fff;
      margin: .2rem 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding: .36rem .4rem;
      >a
        .home-title
          font-size: 0.5rem;
          color: #333;
          line-height: 0.72rem;
          margin: -.08rem 0 .16rem 0;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          font-family: PingFangSC-Regular;
        .home-img
          width: 9.21rem;
          height: 5rem;
          position: relative;
          margin-bottom: .2rem;
          overflow: hidden;
          border-radius: .08rem
          >img
            height 100%
            width 100%
            display block
        .home-look
          font-size: .22rem;
          color: #999;
          line-height: .32rem;
          margin-top: .18rem;
          >i
            vertical-align: middle;
</style>
