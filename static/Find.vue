<template>
  <div class="find">
    <div class="find-header">
      <header>
        <div class="header-topbar">
          <div class="header-row">
            <div class="header-left">
              <i class="iconfont icon-shouye"></i>
            </div>
            <div class="header-content" >
              <span>发现</span>
              <span>甄选家</span>
            </div>
            <div class="header-right">
              <div class="left">
                <i class="iconfont icon-gouwuche"></i>
              </div>
              <div class="right">
                <i class="iconfont icon-fangdajing"></i>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
    <div class="find-tap">
      <ul>
        <li v-for="(li,index) in FindTab" :key="index">{{li.tabName}}</li>
      </ul>
    </div>

    <div class="find-content">
      <div class="content-list" v-for="(li,index) in lists">
        <a href="javascript:;" class="a1" v-show="li.style===1">
          <div>
            <span class="content-title">
              <img :src="li.avatar" alt="">
            </span>
            <span class="content-text">{{li.nickname}}</span>
          </div>
          <div>{{li.title}}</div>
          <div>
            <img :src="li.picUrl" alt="">
          </div>
          <div>
            <i class="iconfont icon-shequneiicon-"></i>
            <span>{{(li.readCount/1000).toFixed(1)}}k人看过</span>
          </div>
        </a>
        <a href="javascript:;" class="a2" v-show="li.style===2">
          <div class="a2-left">
            <div>
              <span class="content-title">
                <img :src="li.avatar" alt="">
              </span>
              <span class="content-text">{{li.nickname}}</span>
            </div>
            <div>{{li.title}}</div>
            <div>严选海外超走心新年礼</div>
            <div>
              <i class="iconfont icon-shequneiicon-"></i>
              <span>{{(li.readCount/1000).toFixed(1)}}k人看过</span>
            </div>
          </div>
          <div class="a2-right">
            <img :src="li.picUrl" alt="">
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        lists:[]
      }
    },
    mounted(){
      this.$store.dispatch('getFindTab')
      this.$store.dispatch('getRecManual')
    },
    computed:{
      ...mapState(['FindTab','FindList']),
      list(){
        this.FindList.forEach((item,index)=>{
          item.topics.forEach((i,index)=>{
            return this.lists.push(i)
          })
        })
      }
    },
    watch:{
      FindList(){
        this.FindList.forEach((item,index)=>{
          item.topics.forEach((i,index)=>{
            return this.lists.push(i)
          })
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .find-header
    height: 1.3434rem;
    position: fixed !important;
    left: 0;
    top: 0;
    z-index: 10;
    width: 100%;
    >header
      .header-topbar
        height: 1.3434rem;
        background-color: #fafafa;
        box-sizing: border-box;
        border-bottom: .01rem solid #d9d9d9
        .header-row
          box-sizing: border-box;
          margin: auto;
          overflow: hidden;
          height: 1.3434rem;
          padding: 0 .26rem 0 .24rem;
          .header-left
            display block
            float left
            .iconfont
              font-size 0.6rem

          .header-content
            position: absolute;
            width: 3.2rem;
            height: 100%;
            line-height: 1.3434rem
            text-align: center;
            left: 50%;
            top: 0;
            margin-left: -1.6rem;
            font-size: .28rem;
            color: #7F7F7F;
            z-index: 1;
            >span
              line-height: 1.3434rem
              &:first-child
                padding: 0 .16rem;
                vertical-align: middle;
                font-size: .52rem;
                color: #b4282d;
                font-weight: bold;
              &:last-child
                padding: 0 .16rem;
                vertical-align: middle
                color: #7F7F7F
                font-size: .4rem;
          .header-right
            float: right;
            line-height 1rem;
            .left
              float right
              .iconfont
                font-size 0.6rem
            .right
              float right
              .iconfont
                font-size 0.6rem
                margin-right: .4rem

  .find-tap
    width: 100%;
    height: 0.9rem;
    background: #fafafa;
    border-bottom: .01rem solid #d9d9d9;
    box-sizing: border-box;
    overflow: hidden;
    position: fixed;
    top: 1.3434rem;
    left: 0;
    z-index: 5;
    >ul
      display flex
      justify-content: space-around;
      margin: 0;
      >li

        display: inline-block;
        height: .9rem;
        line-height: .9rem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        font-size: .38rem;
        color: #7F7F7F;
        padding: 0 .08rem;
        margin: 0 .2rem;
        vertical-align: middle;

  .find-content
    padding: 2.24rem 0 1.2rem 0;
    .content-list
      width: 100%;
      background: #fff;
      margin: .2rem 0;
      box-sizing: border-box;
      padding: .36rem .3rem;
      position relative
      .a1
        >div
          &:nth-child(1)
            margin-bottom: .24rem;
            font-size: .28rem;
            color: #333;
            line-height: .36rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis
            .content-title
              width: .76rem;
              height: .76rem;
              overflow: hidden;
              border-radius: 50%;
              box-sizing: border-box;
              border: .01rem solid #d9d9d9;
              margin-right: .12rem;
              display: inline-block;
              vertical-align: middle
              >img
                display block
                width 100%
            .content-text
              font-size: 0.38rem;
              color: #333;
              line-height: .38rem;
              white-space: nowrap;
          &:nth-child(2)
            font-size: .5rem;
            color: #333;
            line-height: .72rem;
            margin: -.08rem 0 .16rem 0;
            overflow: hidden;
            text-overflow: ellipsis;
            display:block;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            font-family: PingFangSC-Regular;
          &:nth-child(3)
            width:100%
            height: 5rem;
            margin-bottom: .2rem;
            overflow: hidden;
            border-radius: .08rem
            >img
              width 100%
              height 100%


          &:nth-child(4)
            font-size: .22rem;
            color: #999;
            line-height: .32rem;
            margin-top: .18rem;
            >i
              vertical-align: middle;



      .a2
        .a2-left
          width: 5.5rem
          >div
            &:nth-child(1)
              font-size: .28rem;
              color: #333;
              line-height: .36rem;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis
              .content-title
                width: .76rem;
                height: .76rem;
                overflow: hidden;
                border-radius: 50%;
                box-sizing: border-box;
                border: .01rem solid #d9d9d9;
                margin-right: .12rem;
                display: inline-block;
                vertical-align: middle
                >img
                  display block
                  width 100%
              .content-text
                font-size: 0.38rem;
                color: #333;
                line-height: .38rem;
                white-space: nowrap;
            &:nth-child(2)
              width: 100%;
              font-size: .5rem;
              color: #333;
              line-height: 0.72rem;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              padding-top: .32rem;
              font-family: PingFangSC-Regular
            &:nth-child(3)
              width: 100%;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              font-size: .38rem;
              line-height: .4rem;
              padding-top: .08rem;
              color: #7f7f7f;
            &:nth-child(4)
              font-size: .22rem;
              color: #999;
              line-height: .32rem;
              margin-top: .18rem;
              >i
                vertical-align: middle;


        .a2-right
          position absolute
          top: 16px
          right: 19px
          width: 3.5rem;
          height: 3.5rem;
          border-radius: .08rem;
          overflow hidden
          >img
            width: 100%
            height 100%
            transform scale(1.8,1)
</style>
