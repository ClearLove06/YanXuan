<template>
  <div class="update-scroll">
    <div>
      <div class="update" v-for="(li,index) in Update">
        <a href="javascript:;">
          <div class="update-title">{{li.title}}</div>
          <div class="update-text">{{li.subTitle}}</div>
        </a>
        <ul class="update-nav">
          <li  v-for="(c,index) in li.itemList" v-if="li.itemList[index]">
            <img :src="c.itemUrl" alt="">
          </li>
        </ul>
        <div class="update-look">
          <i class="iconfont icon-shequneiicon-"></i>
          <span>{{(li.readCount/1000).toFixed(1)}}k人看过</span>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    computed:{
      ...mapState(['Update']),
    },
    mounted(){
      this.$store.dispatch('getUpdate')
      this.scroll = new BScroll ('.update-scroll',{
        click:true,
        pullUpLoad: true
      })
    },
    watch:{
      Update(){
        this.$nextTick(()=>{
          this.scroll = new BScroll ('.update-scroll',{
            click:true,
            pullUpLoad:true
          })
          this.scroll.on('pullingUp',()=>{
            this.$store.dispatch('getUpdate',()=>{
              this.scroll.finishPullUp()
            })
          })
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .update-scroll
    height 530px
    .update
      width: 100%;
      background: #fff;
      margin: .2rem 0;
      box-sizing: border-box;
      padding: .36rem .3rem;
      >a
        .update-title
          width: 100%;
          color: #333;
          font-size: .48rem;
          line-height: .66rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-family: PingFangSC-Regular;
        .update-text
          font-size: .38rem;
          color: #7F7F7F;
          line-height: .55rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          padding-top: .12rem;
      .update-nav
        display flex
        flex-wrap wrap
        justify-content space-between
        margin .3rem 0
        >li
          width: 2.22rem;
          height: 2.22rem;
          border-radius: .04rem;
          overflow: hidden;
          background: #f4f4f4;
          margin-bottom: .1rem;
          >img
            width 100%
            height 100%
      .update-look
        font-size: .22rem;
        color: #999;
        line-height: .32rem;
        margin-top: .18rem;
        >i
          vertical-align: middle;
</style>
