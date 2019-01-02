<template>
  <div class="footer">
    <ul class="footer-list">
      <li class="footer-li " :class="{active:$route.path==='/msite'}" @click="$router.replace('/msite')">
          <i class="iconfont icon-shouye"></i>
        <span class="footer-name">首页</span>
      </li>
      <li class="footer-li" :class="{active:$route.path==='/sort'}" @click="$router.replace('/sort')">
          <i class="iconfont icon-chouti"></i>
        <span class="footer-name">分类</span>
      </li>
      <li class="footer-li" :class="{active:$route.path==='/find'}" @click="$router.replace('/find')">
          <i class="iconfont icon-tupian"></i>
        <span class="footer-name">识物</span>
      </li>
      <li class="footer-li" :class="{active:$route.path==='/shopping'}" @click="$router.replace('/shopping')">
          <i class="iconfont icon-cart"></i>
        <span class="footer-name">购物车</span>
      </li>
      <li class="footer-li" :class="{active:$route.path==='/person'}" @click="$router.replace('/person')">
          <i class="iconfont icon-geren"></i>
        <span class="footer-name">个人</span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .footer
    position fixed
    bottom 0
    left 0
    z-index 5
    width 100%
    height: 1.20667rem;
    background #FFFFFF
    border-top 1px solid #d9d9d9
    .footer-list
      width 100%
      display flex;
      flex 1
      justify-content: space-around;
      .footer-li
        display flex;
        flex 1
        flex-direction: column
        justify-content: center
        align-items: center
        &.active
          .iconfont
            color #b4282d
          .footer-name
            color #b4282d
        .iconfont
          font-size .53333rem
          margin-top 0.1333rem
        .footer-name
          display block
          margin-top 0.09333rem
          font-size 0.32rem
          color #666
</style>
