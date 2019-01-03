<template>
  <div class="share-scrollC">
    <div>
      <div class="share">
        <div class="share-top">
          <p >让生活更好的N种方法</p>
        </div>
        <div class="share-title">
          <p >{{shareDataThree.title}}</p>
        </div>
        <div class="share-nav">
          <ul ref="ulWidth">
            <li v-for="(s,index) in shareDataThree.lookList">
              <img :src="s.banner.picUrl" alt="">
            </li>
          </ul>
        </div>
      </div>
      <div class="share-content">
        <div class="content-title">
          <p>TA们的严选生活</p>
        </div>
        <div class="content-tap">
          <ul  class="content-warp">
            <li >
              <p class="active">最新</p>
            </li>
            <li>
              <p>{{shareDataOne.hotTabName}}</p>
            </li>
            <li>
              <p>晒单合集</p>
            </li>
          </ul>
        </div>
        <div class="content-list">
          <ul class="list-left">
            <li v-for="(s,index) in shareDataTwo" :key="index" v-show="index%2 === 1">
              <div class="left-warp">
                <div class="box1">
                  <img :src="s.bannerInfo.picUrl" alt="">
                </div>
                <p>{{s.content}}</p>
                <div class="box2">
                  <div class="left">
                    <img src="https://yanxuan.nosdn.127.net/485ff1be6912be6ae696b6d360d1b101.png?imageView&quality=65&thumbnail=48x48" alt="">
                    <p>{{s.nickName}}</p>
                  </div>
                  <div class="right">
                    <p>{{s.topicId}}</p>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAAAAACpleexAAABNUlEQVQ4y73UwUsCQRQG8P1rP9fVSImWwA1CqQgPURDkTWITqkNbXfRQhwiKDl0EwSSKDksRYmiFtbtOzrYrsuW+h4e+w3ww8zsNb0YRzChTwsF5PqlXejTchYzRpWAT6auvxwJ2KGjCGq7PyFBwFS1ZKlwC6ujImkebgLP4kLWGBgEzeJd1hAoBDdiy7ESqHQ83cON3CZteLLRw4PdrFmU3Dt5iMbj5NIp2FDrVfAqj3P/st3So29e2OwadIsazFxz0TC3c0iwf1qDX++KPdM5yofRhAXUxKcBoVUQWbzy4hDseNFHjwUts8eAL5gYsOBzCJx4s4YIHT1HmwQcYPOjNoMuCYj0YVxKeYJ8HG1jhwb6a/GRBsTxp0qKwioWmx4GR1/ArWgiFc5xLxLhDMf3X/J/wG8ARlk4IVyR9AAAAAElFTkSuQmCC" alt="">
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul class="list-left">
            <li v-for="(s,index) in shareDataTwo" :key="index"  v-show="index%2 !== 1">
              <div class="left-warp">
                <div class="box1">
                  <img :src="s.bannerInfo.picUrl" alt="">
                </div>
                <p>{{s.content}}</p>
                <div class="box2">
                  <div class="left">
                    <img src="https://yanxuan.nosdn.127.net/485ff1be6912be6ae696b6d360d1b101.png?imageView&quality=65&thumbnail=48x48" alt="">
                    <p>{{s.nickName}}</p>
                  </div>
                  <div class="right">
                    <p>{{s.content}}</p>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAAAAACpleexAAABNUlEQVQ4y73UwUsCQRQG8P1rP9fVSImWwA1CqQgPURDkTWITqkNbXfRQhwiKDl0EwSSKDksRYmiFtbtOzrYrsuW+h4e+w3ww8zsNb0YRzChTwsF5PqlXejTchYzRpWAT6auvxwJ2KGjCGq7PyFBwFS1ZKlwC6ujImkebgLP4kLWGBgEzeJd1hAoBDdiy7ESqHQ83cON3CZteLLRw4PdrFmU3Dt5iMbj5NIp2FDrVfAqj3P/st3So29e2OwadIsazFxz0TC3c0iwf1qDX++KPdM5yofRhAXUxKcBoVUQWbzy4hDseNFHjwUts8eAL5gYsOBzCJx4s4YIHT1HmwQcYPOjNoMuCYj0YVxKeYJ8HG1jhwb6a/GRBsTxp0qKwioWmx4GR1/ArWgiFc5xLxLhDMf3X/J/wG8ARlk4IVyR9AAAAAElFTkSuQmCC" alt="">
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        id:26,
      }
    },
    computed:{
      ...mapState(['shareDataOne','shareDataTwo','shareDataThree'])
    },
    mounted(){
      const {page,size,type,id}=this
      this.$store.dispatch('getDataOne')
      this.$store.dispatch('getDataTwo')
      this.$store.dispatch('getDataThree',{id})
      this.scroll = new BScroll('.share-scrollC',{
        pullUpLoad:true,
        click:true
      })
    },
    methods:{
      __initScroll(){
        const ul = this.$refs.ulWidth
        const liWidth = 120
        const space = 6
        const sizes = this.shareDataThree.lookList.length
        const width = (liWidth + space) * sizes - space
        ul.style.width = width + 'px'
        new BScroll('.share-nav',{
          click:true,
          scrollX:true
        })
      }
    },
    watch:{
      shareDataThree(){
        this.$nextTick(()=>{
          this. __initScroll()
        })
      },
      shareDataTwo(){
        this.$nextTick(()=>{
          this.scroll = new BScroll('.share-scrollC',{
            pullUpLoad:true,
            click:true
          })
          this.scroll.on('pullingUp',()=>{
            this.$store.dispatch('getDataTwo',()=>{
              this.scroll.finishPullUp()
            })

          })
        })
      }

    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

  .share-scrollC
    height 530px
    .share
      display flex
      align-items: center
      flex-direction: column
      background-color: #fff;
      padding-top: .37333rem;
      margin-bottom: .26667rem;
      padding-bottom: .53333rem;
      .share-top
        margin-bottom: .32rem;
        >p
          color: #7f7f7f;
          font-size: .37333rem;
          height: .53333rem;
          line-height: .53333rem;

      .share-title
        >p
          position: relative;
          max-width: 6rem;
          word-break: break-all;
          -webkit-box-orient: vertical;
          text-align: center;
          font-size: .42667rem;
          line-height: .64rem;
          color: #333;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
      .share-nav
        width: 10rem;
        height: 3.2rem;
        margin-top: .42667rem;
        overflow hidden
        >ul
          overflow hidden
          height: 100%
          >li
            float left
            display block
            width: 3.2rem ;
            height: 3.2rem;
            border-radius: 4px;
            overflow: hidden;
            margin: 0 .13333rem;
            &:first-child
              margin-left: .4rem
            >img
              width 100%
              height 100%
    .share-content
      display flex
      flex-direction: column
      align-items: center;
      background-color: #fff;
      padding-top: .8rem;
      .content-title
        margin-bottom: .26667rem;
        >p
          color: #333;
          font-size: .42667rem;
          height: .45333rem;
          line-height: .45333rem;
          margin: 0 .26667rem;
          font-weight: 700;
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          justify-content: center
      .content-tap
        width: 10rem;
        height: 1.76rem;
        padding-top: .32rem
        .content-warp
          display flex
          box-sizing border-box
          justify-content space-around
          width: 10rem;
          padding: 0 .26667rem;
          background-color: #fff;
          >li
            box-sizing border-box
            width: 2.29333rem;
            height: 1.6rem;
            margin: 0 .32rem;
            padding: .42667rem 0;
            >p
              width: 2.29333rem;
              height: .74667rem;
              border-radius: 4px;
              line-height: .74667rem;
              text-align: center;
              box-sizing: border-box;
              font-size: .37333rem;
              color: #333;
              background-color: #f4f4f4;
              font-family: PingFangSC-Light;
              &.active
                background-color: #ffe4af;
                color: #b0955f;
                font-weight: 700


      .content-list
        display flex
        width: 9.73333rem;
        min-height: 13.33333rem;
        margin-top: .26667rem;
        box-sizing: border-box;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-direction: row;
        .list-left
          display flex
          width: 4.86667rem;
          align-items: center;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -webkit-flex-direction: column;
          flex-direction: column;
          >li
            width: 4.6rem;
            box-sizing: border-box;
            margin-bottom: .26667rem;
            overflow: hidden;
            border 1px solid #eee
            border-radius: 4px;
            .left-warp
              width: 4.6rem;
              box-sizing: border-box;
              border-radius: 4px;
              overflow: hidden;
              .box1
                width: 4.6rem;
                height: 6.13024rem;
                >img
                  width: 4.6rem;
                  height: 6.13024rem;
              >p
                width: 4.57333rem;
                box-sizing: border-box;
                flex-direction: row;
                background-color: #fff
                padding: .24rem .21333rem 0;
                color: #333;
                font-size: .32rem;
                line-height: .48rem;
                display: -webkit-box;
                -webkit-box-orient: vertical
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
              .box2
                padding: .32rem .21333rem;
                justify-content: space-between
                display flex
                .left
                  display flex
                  >img
                    width: .64rem;
                    height: .64rem;
                    box-sizing: border-box;
                    border-radius: 24px;
                    border: 1px solid #dbdbdb;
                  >p
                    width: 1.6rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font-size: .32rem;
                    color: #7f7f7f;
                    height: .64rem;
                    line-height: .64rem;
                    margin-left: .10667rem;
                .right
                  width: 1.33333rem;
                  display flex
                  align-items center
                  >p
                    font-size: .32rem;
                    color: #7f7f7f;
                    width: 1.2rem;
                    text-align: right;
                    height: .64rem;
                    line-height: .64rem;
                    margin-right: .02667rem;
                  >img
                    display: block;
                    width: .37333rem;
                    height: .37333rem;
</style>
