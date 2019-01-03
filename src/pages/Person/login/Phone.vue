<template>
    <div>
      <PersonHeader/>
      <div class="login ">
        <div class="login-wrap">
          <div class="log">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
          </div>
          <div class="login-import">
            <div class="input-top">
              <input type="text" placeholder="请输入手机号">
            </div>
            <div class="input-bottom">
              <input type="text" placeholder="请输入短信验证">
              <div>获取验证码</div>
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
    }
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
        margin-top: .53333rem;
        height: 138px;
        padding 0 0.4rem
        .input-top
          >input
            width: 100%;
            height: 1.2rem;
            font-size: 0.4rem;
            line-height: 0.6rem;
            margin: 0.39rem 0;
            padding-left: 0;
            outline none
            border-bottom 2px solid #eee
        .input-bottom
          position relative
          >input
            box-sizing border-box
            width: 100%;
            height: 0.6rem;
            font-size: 0.4rem;
            line-height: 0.6rem;
            margin: 0.39rem 0;
            padding-left: 0;
            outline none
            border-bottom 2px solid #eee
          >div
            position absolute
            top 20px
            right 0
            display inline
            border: 1px solid #ccc
            border-radius 4px
            font-size 15px
            color #7e8c8d
</style>
