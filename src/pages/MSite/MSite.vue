<template>
  <div>
    <header class="header">
      <div class="header-top">
        <a href="javascript:;" class="logo"></a>
        <div class="header-center" @click="$router.push('/search')">
          <i></i>
          <span>搜索商品, 共19964款好物</span>
        </div>
        <div class="header-btn" @click="$router.push('/person')">登录</div>
      </div>
      <div class="header-bottom">
        <div class="Scroll-top">
          <ul class="bottom-nav" >
            <li class="active" >推荐</li>
            <li v-for="(cateList,index) in cateLists">{{cateList.name}}</li>
          </ul>
        </div>
        <div class="toggle" @click="isShow = !isShow">
          <div class="icon"></div>
        </div>
      </div>
    </header>
   <div class="header-scroll">
     <div>
       <div class="swiper-container">
         <div class="swiper-wrapper">
           <div class="swiper-slide">
             <img src="https://yanxuan.nosdn.127.net/bec4a597a9aed55605eeb7c0c7710f9b.jpg?imageView&quality=75&thumbnail=750x0">
           </div>
           <div class="swiper-slide">
             <img src="https://yanxuan.nosdn.127.net/981c28d7f7276a2c84bf8c7790a9b559.jpg?imageView&quality=75&thumbnail=750x0">
           </div>
           <div class="swiper-slide">
             <img src="https://yanxuan.nosdn.127.net/feadfbdcc0e2dea285d92c6740d46c66.jpg?imageView&quality=75&thumbnail=750x0">
           </div>
           <div class="swiper-slide">
             <img src="https://yanxuan.nosdn.127.net/791dda3ae432212164b1668b25fbd11c.jpg?imageView&quality=75&thumbnail=750x0">
           </div>
           <div class="swiper-slide">
             <img src="https://yanxuan.nosdn.127.net/5afff79cb85dfcd465e6da0d8404ddae.jpg?imageView&quality=75&thumbnail=750x0">
           </div>
           <div class="swiper-slide">
             <img src="https://yanxuan.nosdn.127.net/72d052bfced137a39f0680174f2a709f.jpg?imageView&quality=75&thumbnail=750x0">
           </div>
           <div class="swiper-slide">
             <img src="https://yanxuan.nosdn.127.net/ddd71df43a50749d140786dce1381e15.jpg?imageView&quality=75&thumbnail=750x0">
           </div>
           <div class="swiper-slide">
             <img src="https://yanxuan.nosdn.127.net/defcddd6a2241b217da7c957da755981.jpg?imageView&quality=75&thumbnail=750x0">
           </div>
         </div>
         <div class="swiper-pagination"></div>
       </div>
       <div class="MSite-security">
         <ul>
           <li>
             <i></i>
             <span>网易自营品牌</span>
           </li>
           <li>
             <i></i>
             <span>30天无忧退货</span>
           </li>
           <li>
             <i></i>
             <span>48小时快速退款</span>
           </li>
         </ul>
       </div>
       <!--内容区-->
       <div class="MSite-content">
         <!--导航分类-->
         <div class="content-navList">
           <div class="content-navList-pad">
             <ul class="navList">
               <li>
                 <a href="javascript:;">
                   <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png" alt="">
                   <div>居家</div>
                 </a>
               </li>
               <li>
                 <a href="javascript:;">
                   <img src="http://yanxuan.nosdn.127.net/855a0ee7410f534f3db3f7f3a687c153.png" alt="">
                   <div>鞋包配饰</div>
                 </a>
               </li>
               <li>
                 <a href="javascript:;">
                   <img src="http://yanxuan.nosdn.127.net/42b4ab968ae5b0f38e608131fb68a095.png" alt="">
                   <div>服装</div>
                 </a>
               </li>
               <li>
                 <a href="javascript:;">
                   <img src="http://yanxuan.nosdn.127.net/40e494813fae78a483483d32fd7338b1.png" alt="">
                   <div>电器</div>
                 </a>
               </li>
               <li>
                 <a href="javascript:;">
                   <img src="http://yanxuan.nosdn.127.net/8fab9e34dd0f078fc85dedfa8478b3d5.png" alt="">
                   <div>婴童</div>
                 </a>
               </li>
               <li>
                 <a href="javascript:;">
                   <img src="http://yanxuan.nosdn.127.net/449019db4190bf9ae98b7f2d62d42e26.png" alt="">
                   <div>饮食</div>
                 </a>
               </li>
               <li>
                 <a href="javascript:;">
                   <img src="http://yanxuan.nosdn.127.net/50acb3ffe87d9ef77834eb379fe017cc.png" alt="">
                   <div>洗护</div>
                 </a>
               </li>
               <li>
                 <a href="javascript:;">
                   <img src="http://yanxuan.nosdn.127.net/78616d875a47d3f4639f8448775b138e.png" alt="">
                   <div>餐厨</div>
                 </a>
               </li>
               <li>
                 <a href="javascript:;">
                   <img src="http://yanxuan.nosdn.127.net/21fd4a2a1cf38ce43c2b23825e5508a8.png" alt="">
                   <div>文体</div>
                 </a>
               </li>
               <li>
                 <a href="javascript:;">
                   <img src="http://yanxuan.nosdn.127.net/073855a1da7a21bf3cab628b99688cc1.png" alt="">
                   <div>特色区</div>
                 </a>
               </li>
             </ul>
           </div>
         </div>
         <!--新人专享礼-->
         <div class="content-newVip">
           <div class="newVip-title">
             <span>新人专享礼</span>
           </div>
           <div class="newVip-img">
             <div class="newVip-left">
               <a href="javascript:;">
                 <div>新人专享礼包</div>
                 <img src="//yanxuan.nosdn.127.net/a020bed0783956f650abc016e386bead.png" alt="">
               </a>
             </div>
             <div class="newVip-right">
               <a href="javascript:;">
                 <div>
                   <div class="left">
                     <span>福利社</span>
                     <span>今日特价</span>
                   </div>
                   <div class="right">
                     <img src="http://yanxuan.nosdn.127.net/02edea7f9b8ac4341a0372cd4075cea1.png?imageView&thumbnail=200x200&quality=75" alt="">
                     <div>
                       <div>¥72</div>
                       <div>¥98</div>
                     </div>
                   </div>
                 </div>
               </a>
               <a href="javascript:;">
                 <div>
                   <div class="left">
                     <span>新人拼团</span>
                     <span>一元起包邮</span>
                   </div>
                   <div class="right">
                     <img src="http://yanxuan.nosdn.127.net/d8d2a808ae9abdcdc337f521df0254ef.png?imageView&thumbnail=200x200&quality=75" alt="">
                     <div>
                       <div>¥1</div>
                       <div>¥14</div>
                     </div>
                   </div>
                 </div>
               </a>
             </div>
           </div>
         </div>
         <!--商家直销-->
         <div class="content-directSupply" >
           <div class="directSupply-title">
             <div class="title-left">品牌制造商直供</div>
             <div class="title-right">
               更多
               <i></i>
             </div>
           </div>
           <ul class="directSupply-list">
             <li>
               <div>
                 <h4>海外制造商</h4>
                 <div>
                   <span>9.9元起</span>
                 </div>
               </div>
             </li>
             <li>
               <div>
                 <h4>CK制造商</h4>
                 <div>
                   <span>25元起</span>
                 </div>
               </div>
             </li>
             <li>
               <div>
                 <h4>新秀丽制造商</h4>
                 <div>
                   <span>39.9元起</span>
                 </div>
               </div>
             </li>
             <li>
               <div>
                 <h4>MUJI制造商</h4>
                 <div>
                   <span>35元起</span>
                 </div>
               </div>
             </li>
           </ul>
         </div>
         <!--箱包-->
         <div class="content-warp">
           <div class="warp">
             <a href="javascript:;"></a>
             <div class="warp-list">
               <div class="warp-scroll">
                 <ul>
                   <li>
                     <a href="javascript:;">
                       <div class="warp-liTop">
                         <img src="http://yanxuan.nosdn.127.net/021188f19de55d4e146dee96b9a0e104.png?imageView&quality=65&thumbnail=330x330" alt="">
                       </div>
                       <div class="warp-liBottom">
                         <div class="liBottom">
                           <div>24寸 纯PC“铝框”（非全铝）拉杆箱</div>
                         </div>
                         <p>￥389</p>
                       </div>
                     </a>
                   </li>
                   <li>
                     <a href="javascript:;">
                       <div class="warp-liTop">
                         <img src="http://yanxuan.nosdn.127.net/e47906ac858beefcbcdb955285e46822.png?imageView&quality=65&thumbnail=330x330" alt="">
                       </div>
                       <div class="warp-liBottom">
                         <div class="liBottom">
                           <div>24寸 纯PC“铝框”（非全铝）拉杆箱</div>
                         </div>
                         <p>￥389</p>
                       </div>
                     </a>
                   </li>
                   <li>
                     <a href="javascript:;">
                       <div class="warp-liTop">
                         <img src="http://yanxuan.nosdn.127.net/f2d9d5200b13bdfc9e0ebba388e35e95.png?imageView&quality=65&thumbnail=330x330" alt="">
                       </div>
                       <div class="warp-liBottom">
                         <div class="liBottom">
                           <div>24寸 纯PC“铝框”（非全铝）拉杆箱</div>
                         </div>
                         <p>￥389</p>
                       </div>
                     </a>
                   </li>
                   <li>
                     <a href="javascript:;">
                       <div class="warp-liTop">
                         <img src="http://yanxuan.nosdn.127.net/89085a3e31be9724ffec17675891bc5a.png?imageView&quality=65&thumbnail=330x330" alt="">
                       </div>
                       <div class="warp-liBottom">
                         <div class="liBottom">
                           <div>24寸 纯PC“铝框”（非全铝）拉杆箱</div>
                         </div>
                         <p>￥389</p>
                       </div>
                     </a>
                   </li>
                   <li>
                     <a href="javascript:;">
                       <div class="warp-liTop">
                         <img src="http://yanxuan.nosdn.127.net/d802c391e6ff07b854ffdcec00b42a5b.png?imageView&quality=65&thumbnail=330x330" alt="">
                       </div>
                       <div class="warp-liBottom">
                         <div class="liBottom">
                           <div>24寸 纯PC“铝框”（非全铝）拉杆箱</div>
                         </div>
                         <p>￥389</p>
                       </div>
                     </a>
                   </li>
                   <li>
                     <a href="javascript:;">
                       <div class="warp-liTop">
                         <img src="http://yanxuan.nosdn.127.net/03297a1a6c1a00a1c9ed1eeff5a32614.png?imageView&quality=65&thumbnail=330x330" alt="">
                       </div>
                       <div class="warp-liBottom">
                         <div class="liBottom">
                           <div>24寸 纯PC“铝框”（非全铝）拉杆箱</div>
                         </div>
                         <p>￥389</p>
                       </div>
                     </a>
                   </li>
                 </ul>
               </div>
             </div>
           </div>
         </div>
         <!--商家直销-->
         <div class="content-directSupply" >
           <div class="directSupply-title">
             <div class="title-left">品牌制造商直供</div>
             <div class="title-right">
               更多
               <i></i>
             </div>
           </div>
           <ul class="directSupply-list">
             <li>
               <div>
                 <h4>海外制造商</h4>
                 <div>
                   <span>9.9元起</span>
                 </div>
               </div>
             </li>
             <li>
               <div>
                 <h4>CK制造商</h4>
                 <div>
                   <span>25元起</span>
                 </div>
               </div>
             </li>
             <li>
               <div>
                 <h4>新秀丽制造商</h4>
                 <div>
                   <span>39.9元起</span>
                 </div>
               </div>
             </li>
             <li>
               <div>
                 <h4>MUJI制造商</h4>
                 <div>
                   <span>35元起</span>
                 </div>
               </div>
             </li>
           </ul>
         </div>
         <!--商家直销-->
         <div class="content-directSupply" >
           <div class="directSupply-title">
             <div class="title-left">品牌制造商直供</div>
             <div class="title-right">
               更多
               <i></i>
             </div>
           </div>
           <ul class="directSupply-list">
             <li>
               <div>
                 <h4>海外制造商</h4>
                 <div>
                   <span>9.9元起</span>
                 </div>
               </div>
             </li>
             <li>
               <div>
                 <h4>CK制造商</h4>
                 <div>
                   <span>25元起</span>
                 </div>
               </div>
             </li>
             <li>
               <div>
                 <h4>新秀丽制造商</h4>
                 <div>
                   <span>39.9元起</span>
                 </div>
               </div>
             </li>
             <li>
               <div>
                 <h4>MUJI制造商</h4>
                 <div>
                   <span>35元起</span>
                 </div>
               </div>
             </li>
           </ul>
         </div>
         <!--商家直销-->
         <div class="content-directSupply" >
           <div class="directSupply-title">
             <div class="title-left">品牌制造商直供</div>
             <div class="title-right">
               更多
               <i></i>
             </div>
           </div>
           <ul class="directSupply-list">
             <li>
               <div>
                 <h4>海外制造商</h4>
                 <div>
                   <span>9.9元起</span>
                 </div>
               </div>
             </li>
             <li>
               <div>
                 <h4>CK制造商</h4>
                 <div>
                   <span>25元起</span>
                 </div>
               </div>
             </li>
             <li>
               <div>
                 <h4>新秀丽制造商</h4>
                 <div>
                   <span>39.9元起</span>
                 </div>
               </div>
             </li>
             <li>
               <div>
                 <h4>MUJI制造商</h4>
                 <div>
                   <span>35元起</span>
                 </div>
               </div>
             </li>
           </ul>
         </div>


       </div>
     </div>
   </div>
  </div>
</template>
<script>
  import {mapState}from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        isShow:false
      }

    },
    computed:{
      ...mapState(['cateLists'])
    },
    mounted(){
      this.$store.dispatch('getCateList')
      new BScroll('.Scroll-top',{
        scrollX: true,
        click: true
      })
      new BScroll('.warp-scroll',{
        scrollX: true,
        click: true
      })
      new BScroll('.header-scroll',{
        click: true
      })
      let mySwiper = new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        loop : true,
        pagination: {
          el: '.swiper-pagination',
        },
      })

    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" `>
  //<!--头部-->
  .header
    background-color #fff
    border-bottom 1px solid #d9d9d9
    .header-top
      position relative
      z-index 2
      display flex
      justify-content: space-around;
      align-items: center;
      background #fff
      box-sizing border-box
      padding 0.21333rem .4rem
      .logo
        width 1.84rem
        height 0.53333rem
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
        display inline-block
        margin-right 0.26667rem
        background-size cover
        background-position center
      .header-center
        display flex
        width 60%
        height .74667rem
        font-size .37333rem;
        background-color #ededed;
        border-radius .10667rem;
        justify-content: center
        align-items: center;
        flex: 1
        >i
          display: inline-block;
          vertical-align: middle;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: .37333rem;
          height: .37333rem;
          margin-right: .13333rem;
        >span
          color: #666;
          font-size: .37333rem;
      .header-btn
        box-sizing border-box
        width: .98667rem;
        height: .53333rem;
        line-height: .53333rem;
        text-align: center;
        color: #b4282d;
        border: 1px solid #b4282d;
        border-radius: .10667rem;
        margin-left: .21333rem;
        font-size: .32rem;
    .header-bottom
      position: relative;
      z-index: 2;
      background: #fff;
      margin-top: -0.01333rem;
      overflow hidden
      .Scroll-top
        display: flex;
        background-color: #fff;
      .bottom-nav
        display flex
        white-space:nowrap
        background: #fff;
        padding-left:  0.4rem;
        >li
          padding: 0 .21333rem;
          line-height: .8rem;
          font-size: .37333rem;
          color: #333;
          text-align: center;
          margin-left: .26667rem;
          &:nth-child(1)
            margin-left: 0;
          &:last-child
            padding-right: 2rem;
          &.active
            color: #b4282d;
            border-bottom 2px solid #b4282d
      .toggle
        position absolute
        z-index 5
        right 0
        top 0
        width: 1.33333rem;
        height: .8rem;
        text-align: center;
        background: #fff;
        display flex
        justify-content: center
        align-items: center
        .icon
          position absolute
          margin-top: .05rem;
          display: inline-block;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-a6045aadfd.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: .4rem;
          height: .4rem;
  .header-scroll
    height 530px
    //轮播
    .swiper-container
      width 100%
      height: 4.93333rem;
      .swiper-wrapper
        .swiper-slide
          width 100%
          height 100%
          >img
            width 100%
            height 100%
      .swiper-pagination
        .swiper-pagination-bullet
          border-radius 0
          width 0.55rem
          height 0.1rem
          background #fff
    //红标记30天退货
    .MSite-security
      background-color: #FFFFFF;
      color: #B4282D;
      >ul
        box-sizing border-box
        width 100%
        height .96rem
        padding 0 0.4rem
        display flex
        justify-content: space-around
        align-items: center;
        >li
          display flex
          flex: 1
          >i
            display: inline-block;
            vertical-align: middle;
            background-image: url(http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png)
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: .42667rem;
            height: .42667rem;
          >span
            background-color: #FFFFFF;
            color: #B4282D;
            font-size: .32rem;
            margin-left: .10667rem;
            line-height: .42667rem;
            display: inline-block;
            vertical-align: middle;

  //  内容区
    .MSite-content
      margin-bottom 1rem
      .content-navList
        background-image: url(http://yanxuan.nosdn.127.net/54e38f7ee78d0f85a56fc8bf58bf36d3.png);
        background-size: 100% 100%;
        width: 100%;
        height: 5.22667rem;
        .content-navList-pad
          width 100%
          height 100%
          padding-bottom: .69333rem;
          >ul
            >li
              clearFix()
              >a
                display: block;
                width: 1.46667rem;
                height: 2.08rem;
                float: left;
                margin: .13333rem .26667rem 0;
                margin-bottom: .12rem
                >img
                  width: 1.46667rem;
                  height: 1.46667rem
                >div
                  margin-top: .13333rem;
                  text-align: center;
                  font-size: .32rem;
                  line-height: .48rem;
                  white-space: nowrap;
                  color: #333333

      .content-newVip
        background: #fff;
        margin-top: .26667rem;
        padding-bottom: .4rem;
        margin-bottom: .26667rem;
        .newVip-title
          position relative
          box-sizing border-box
          height: 1.2rem;
          width: 100%;
          line-height: 1.2rem;
          text-align: center;
          font-family: PingFangSC-Regular;
          font-size: .42667rem;
          padding-left 0.4rem;
          padding-right 0.4rem;
          background: #fff;
          overflow: hidden;
          &:before
            content ''
            display block
            position: absolute;
            top: .6rem;
            left 3.4rem
            width: .32rem;
            height: .04rem;
            background: #333;
          &:after
            content ''
            display block
            position: absolute;
            top: .6rem;
            left 6.2rem
            width: .32rem;
            height: .04rem;
            background: #333;

        .newVip-img
          padding-left: .4rem;
          overflow: hidden;
          box-sizing: border-box
          .newVip-left
            width: 4.57333rem;
            height: 5.78667rem;
            background: #F9E9CF;
            border-radius: .05333rem;
            margin-right: .05333rem;
            float: left;
            color: #333;
            >a
              >div
                font-family: PingFangSC-Medium;
                font-size: .42667rem;
                padding: .4rem 0 0 .4rem;
              >img
                display block
                margin: .49333rem auto;
                width: 3.44rem;
                height: 3.42667rem;
          .newVip-right
            float: left;
            >a
              position relative
              display block
              &:nth-child(1)
                background: #FBE2D3;
                border-radius: 4px;
                width: 4.57333rem;
                height: 2.86667rem;
                margin-bottom: .05333rem;
                background-size: 100% 100%
                >div
                  box-sizing border-box
                  color: #333;
                  width: 4.57333rem;
                  float: left;
                  border-radius: .05333rem;
                  margin: 0 .05333rem .05333rem 0;
                  font-size: .32rem;
                  padding: .26667rem 0 0 .4rem;
                  .left
                    float left
                    >span
                      display: block
                      &:nth-child(1)
                        font-size: .42667rem;
                      &:nth-child(2)
                        font-size: .32rem;
                        color: #7F7F7F
                  .right
                    float right
                    >img
                      position absolute
                      top 0
                      right 0
                      width: 2.66667rem;
                      height: 2.66667rem;
                    >div
                      position: absolute;
                      top: 0;
                      right: .4rem
                      width: 1.06667rem;
                      height: 1.06667rem;
                      opacity: .8;
                      background: #F59524;
                      border-radius: 50%;
                      box-sizing border-box
                      padding-top: .13333rem;
                      color: #fff;
                      text-align: center;
                      >div
                        &:nth-child(1)
                          font-size: .32rem;
                        &:nth-child(2)
                          font-size: .26667rem;
                          margin-top: -.09333rem;
                          text-decoration: line-through;

              &:nth-child(2)
                background: #FFECC2;
                border-radius: 4px;
                width: 4.57333rem;
                height: 2.86667rem;
                margin-bottom: .05333rem;
                background-size: 100% 100%
                >div
                  box-sizing border-box
                  color: #333;
                  width: 4.57333rem;
                  float: left;
                  border-radius: .05333rem;
                  margin: 0 .05333rem .05333rem 0;
                  font-size: .32rem;
                  padding: .26667rem 0 0 .4rem;
                  .left
                    float left
                    >span
                      display: block
                      &:nth-child(1)
                        font-size: .42667rem;
                      &:nth-child(2)
                        padding: 0 .13333rem;
                        height: .42667rem;
                        background: #CBB693;
                        border-radius: .05333rem;
                        color: #fff;
                        font-size: .29333rem;
                        line-height: .42667rem;
                        text-align: center;
                  .right
                    float right
                    >img
                      position absolute
                      top 0
                      right 0
                      width: 2.66667rem;
                      height: 2.66667rem;
                    >div
                      position: absolute;
                      top: 0;
                      right: .4rem
                      width: 1.06667rem;
                      height: 1.06667rem;
                      opacity: .8;
                      background: #F59524;
                      border-radius: 50%;
                      box-sizing border-box
                      padding-top: .13333rem;
                      color: #fff;
                      text-align: center;
                      >div
                        &:nth-child(1)
                          font-size: .32rem;
                        &:nth-child(2)
                          font-size: .26667rem;
                          margin-top: -.09333rem;
                          text-decoration: line-through;



      .content-directSupply
        padding-bottom: .10667rem;
        .directSupply-title
          box-sizing border-box
          width: 100%;
          height: 1.33333rem;
          line-height: 1.33333rem;
          padding: 0 .4rem;
          background: #fff;
          overflow: hidden;
          .title-left
            float: left;
            font-size: .42667rem;
            font-family: PingFangSC-Regular;
          .title-right
            font-size: .37333rem;
            float: right;
            color: #333;
            line-height: 1.33333rem;
            >i
              display: inline-block;
              background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/index-titleArrow-219f348910.png);
              background-repeat: no-repeat;
              background-size: 100% 100%;
              width: .17333rem;
              height: .30667rem;
        .directSupply-list
          position: relative;
          overflow: hidden;
          background: #fff;
          margin-bottom: .26667rem;
          padding: 0 .34667rem .34667rem .4rem;
          >li
            float left
            display: inline-block;
            position: relative;
            margin: 0 .05333rem .05333rem 0;
            width: 4.57333rem;
            height: 3.46667rem;
            overflow: hidden;
            background-color: #f4f4f4;
            border-radius: .05333rem;
            background-image: url(http://yanxuan.nosdn.127.net/802ff06dd3ef161db046eeb8db6cb4be.jpg?imageView&thumbnail=343y260&enlarge=1)
            background-size: 100% 100%;
            &:nth-child(2)
              background-image: url(http://yanxuan.nosdn.127.net/c1e97be1b9730360c9c228b6a6448bca.png?imageView&thumbnail=343y260&enlarge=1)
              url(http://yanxuan.nosdn.127.net/e550a44d2a7a68ed38e6cfd380e514aa.png?imageView&thumbnail=343y260&enlarge=1)
            &:nth-child(3)
              background-image: url(http://yanxuan.nosdn.127.net/e550a44d2a7a68ed38e6cfd380e514aa.png?imageView&thumbnail=343y260&enlarge=1)
            &:nth-child(4)
              background-image: url(http://yanxuan.nosdn.127.net/053ecfefd033a9acd2cb95483e14fcb6.jpg?imageView&thumbnail=343y260&enlarge=1)
            >div
              position: absolute;
              left: 0;
              top: 0;
              padding-top: .30667rem;
              width: 100%;
              z-index: 4;
              text-align: center;
              >h4
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                color: #333;
                font-family: PingFangSC-Medium;
                font-size: .37333rem;
                line-height: .45333rem;
                margin-bottom: .04rem;
              >div
                >span
                  display block
                  color: #7F7F7F;
                  font-size: .32rem
                  &:after
                    content '上新'
                    display inline-block
                    width: .85333rem;
                    height: .42667rem;
                    color: #fff;
                    line-height: .42667rem;
                    text-align: center;
                    background: #CBB693;
                    border-radius: .05333rem;
                    margin-left: .13333rem;


      .content-warp
        .warp
          background-color: #fff
          margin-bottom: .26667rem;
          >a
            display: block;
            width: 100%;
            height: 4.93333rem;
            margin-bottom: .26667rem;
            background-image: url(https://yanxuan.nosdn.127.net/1a6763ce33440783cc6700fd132b6375.jpg?imageView&thumbnail=750x0&quality=75)
            background-size: 100% 100%;
            box-sizing: border-box
          .warp-list
            background-color: #fff;
            .warp-scroll
              height: auto;
              padding: 0 .4rem .4rem
              box-sizing border-box
              overflow: hidden
              >ul
                overflow: hidden
                height: auto;
                width 200%
                >li
                  float left
                  margin-right: .26667rem;
                  width: 2.66667rem;
                  box-sizing border-box
                  >a
                    .warp-liTop
                      background-color: #f4f4f4;
                      box-sizing: border-box
                      margin-bottom: .16rem
                      >img
                        display: block
                        width: 100%;
                        height: 100%

                    .warp-liBottom
                      .liBottom
                        padding-left: 0;
                        font-size: .32rem;
                        margin-top: 0;
                        line-height: .48rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        white-space: normal;
                      >p
                        font-size: .32rem;
                        line-height: .48rem;
                        color: #b4282d

</style>
