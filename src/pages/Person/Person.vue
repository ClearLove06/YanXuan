<template>
  <div>
    <PersonHeader/>
    <div class="Person-content">
      <div class="Person-login">
        <div class="log">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="Person-input">
          <div class="Person-phone" @click="$router.push('/phone')">
            <i class="iconfont icon-shouji1"></i>
            <span>手机号码登录</span>
          </div>
          <div class="Person-postbox " @click="$router.push('/postbox')">
            <i class="iconfont icon-xinfeng"></i>
            <span>邮箱账号登录</span>
          </div>
          <div class="Person-register">
            <span @click="$router.push('/register')">手机号快捷注册</span>
            <i class="iconfont icon-jiantouyou"></i>
          </div>
        </div>
      </div>
      <div class="qq-wx">
        <div>
          <span>
            <i class="iconfont icon-weixin"></i>
            <span>微信</span>
          </span>
        </div>
        <div>
          <span>
             <i class="iconfont icon-QQ"></i>
            <span>QQ</span>
          </span>
        </div>
        <div>
          <span>
             <i class="iconfont icon-weibo"></i>
            <span>微博</span>
          </span>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import PersonHeader from '../../components/PersonHeader/PersonHeader.vue'
  export default {
    components:{
      PersonHeader
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

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
