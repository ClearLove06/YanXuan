<template>
  <div>
    <PersonHeader/>
    <div class="login ">
      <div class="login-wrap">
        <div class="log">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="login-import">
          <!--input-->
          <div class="input-top">
            <input type="text" placeholder="请输入手机号">
          </div>
          <div class="input-bottom">
            <input type="text" placeholder="请输入短信验证">
            <div>
              <span>获取验证码</span>
            </div>
          </div>
          <div class="input-top">
            <input type="text" placeholder="请输入密码">
          </div>
          <!--按钮-->
          <div class="Person-phone">
            <span>注册</span>
          </div>
          <!--服务条款-->
          <div class="Person-terms">
            <input type="checkbox">
            <span>
              我同意霸王条款
            </span>
          </div>
          <!--跳转-->
          <div class="goLg">注册账号
            <i class="iconfont icon-jiantouyou"></i>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import PersonHeader from '../../../components/PersonHeader/PersonHeader.vue'
  export default {

    components:{
      PersonHeader
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .login
    background #fff
    visibility: visible;
    height: auto
    .login-wrap
      padding-top 2rem
      .log
        text-align: center;
        margin-top: .74667rem;
        margin-bottom: 0;
        >img
          width: 2.56rem;
          height: .85333rem;
      .login-import
        margin-top: 1.0rem;
        height: 490px;
        padding 0 0.4rem
        .input-top
          >input
            width: 100%;
            height: 1.2rem;
            font-size: 0.4rem;
            line-height: 0.6rem;
            padding-left: 0;
            outline none
            border-bottom 2px solid #eee
        .input-bottom
          position relative
          >input
            box-sizing border-box
            width: 100%;
            height: 1.2rem;
            font-size: 0.4rem;
            line-height: 0.6rem;
            padding-left: 0;
            outline none
            border-bottom 2px solid #eee
          >div
            position absolute
            top 15px
            right 0
            width 80px
            height 28px
            border: 1px solid #ccc
            border-radius 4px
            font-size 15px
            color #7e8c8d
            display flex
            justify-content space-around
            align-items center
        .Person-phone
          margin-top 20px
          font-size: .37333rem;
          color: #fff;
          border: 1px solid #b4282d;
          background-color: #b4282d;
          height: 1.25333rem;
          line-height: 1.25333rem
          margin-bottom: .1rem;
          border-radius: 2px
          width 100%
          text-align center

        .Person-terms
          >input
            width 15px
            height 15px
            vertical-align middle
          >span
            vertical-align middle
            font-size 15px

        .goLg
          margin-top 30px
          font-size 14px
          text-align: center
          >i
            color: #ccc
</style>
