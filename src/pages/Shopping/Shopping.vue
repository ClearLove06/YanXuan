<template>
  <div>
    <div class="shopping">
      <div class="shopping-header">
        <span>购物车</span>
        <div class="header-right">
          <a href="javascript:;">领券</a>
        </div>
      </div>
    </div>
    <div class="shopping-tap">
      <ul>
        <li>
          <i class="iconfont icon-yuanquan"></i>
          <p>30天无忧退货</p>
        </li>
        <li>
          <i class="iconfont icon-yuanquan"></i>
          <p>48小时快速退款</p>
        </li>
        <li>
          <i class="iconfont icon-yuanquan"></i>
          <p>满88元免邮费</p>
        </li>
      </ul>
    </div>
    <div class="shopping-content">
      <div class="shopping-warp">
        <div class="shopping-img"></div>
        <div class="shopping-text">
          <div class="add">去添加点什么吧</div>
          <div class="loading">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .shopping
    height: 45px
    position: fixed!important;
    left: 0;
    top: 0;
    z-index: 5;
    width: 100%;
    &:after
      content: '';
      position: absolute;
      background-color: #d9d9d9;
      left: 0;
      width: 100%;
      height: 1px;
      transform-origin: 50% 100% 0;
      bottom: 0;
    .shopping-header
      height: 1.17333rem;
      padding: 0 .4rem;
      line-height: 0.7rem;
      text-align: center;
      background-color: #fff;
      position relative
      >span
        display: inline-block;
        font-size: .48rem;
        line-height  .48rem;
      .header-right
        position: absolute;
        top: 9px;
        right: .4rem;
        font-size: .4rem;
        >a
          color: #B4282D
          margin-right 10px
  .shopping-tap
    margin-top 45px
    >ul
      position: relative;
      z-index: 1;
      height: .93333rem;
      padding: 0 .4rem;
      background: #f4f4f4;
      display: flex;
      justify-content space-around
      >li
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        font-size: .32rem;
        color: #666;
        >i
          font-size 8px
          opacity 0.5
          margin-top 1px
  .shopping-content
    position: fixed;
    top: 1.17333rem;
    left: 0;
    bottom: 0;
    z-index: 0;
    width: 100%;
    background-color: #f4f4f4;
    text-align: center;
    .shopping-warp
      position: absolute;
      top: -.66667rem;
      right: 0;
      bottom: 0;
      left: 0;
      height: 4rem;
      margin: auto;
      .shopping-img
        display: inline-block;
        vertical-align: middle;
        width: 3.30667rem;
        height: 3.30667rem;
        margin-bottom: .10667rem;
        background-size: 3.30667rem 3.30667rem;
        background-position: center center;
        background-repeat: no-repeat;
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png)
      .shopping-text
        .add
          box-sizing border-box
          margin-bottom: .66667rem;
          line-height: 1;
          font-size: .37333rem;
          color: #999;
        .loading
          margin: auto;
          width: 6.4rem;
          height: 1.22667rem;
          font-size: .4rem;
          line-height: 1.22667rem;
          color: #fff;
          background-color: #b4282d;
          border-radius: .04rem
</style>
