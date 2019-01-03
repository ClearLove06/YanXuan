<template>
  <h2>邮箱</h2>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .Person-header
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
            z-index: 1;
            >span
              line-height: 1.3434rem
              padding: 0 .16rem;
              vertical-align: middle;
              font-size: .52rem;
              color: #2C2C2C
              font-family '宋体'
              font-weight: bold;
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

  .Person-content
    margin-top 1.3434rem;
    height: 623px;
    .Person-login
      .log
        text-align: center;
        padding-top: 2.13333rem;
        padding-bottom: 2.13333rem;
        >img
          width: 3.57333rem;
          height: 1.2rem;

      .Person-input
        padding: 0 .53333rem;
        margin-bottom: 2.73333rem
        .Person-phone
          font-size: .37333rem;
          color: #fff;
          border: 1px solid #b4282d;
          background-color: #b4282d;
          height: 1.25333rem;
          line-height: 1.25333rem
          margin-bottom: .42667rem;
          border-radius: 2px
          width 100%
          text-align center
          >i
            margin-right: .1rem;
            top: 0.06rem;
            font-size 20px
        .Person-postbox
          font-size: .37333rem;
          color: #b4282d;
          border: 1px solid #b4282d
          height: 1.25333rem;
          line-height: 1.25333rem
          margin-bottom: .42667rem;
          border-radius: 2px
          text-align center
          width 100%
          >i
            margin-right: .1rem;
            top: 0.06rem;
            font-size 20px
        .Person-register
          color: #333;
          font-size: .37333rem;
          text-align: center;
          width: 100%;
          >i
            color: #ccc;
            font-size: .37333rem;
            text-align: center;
    .qq-wx
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 1.06667rem;
      height: .53333rem;
      text-align: center;
      >div
        height: .53333rem;
        border-right: 1px solid #979797;
        display: inline-block;
        text-align: center;
        padding: 0 .53333rem
        i
          font-size 20px
          color: #979797
          margin-right -0.2rem
        >span
          height: .53333rem;
          position: relative;
          top: -.45rem;
          width 100%
          >span
            font-size: .37333rem;
            line-height: .53333rem;
            height: .53333rem;
            color: #7F7F7F;
            margin-left: .06667rem;

</style>
