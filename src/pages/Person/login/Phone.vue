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
              <input type="text" placeholder="请输入手机号" v-model="phone">
            </div>
            <div class="input-bottom">
              <input type="text" placeholder="请输入短信验证" v-model="code" >
              <div>
                <span @click="getCode">{{computeTime <= 0 ? '获取验证码': computeTime }}</span>
              </div>
            </div>
            <!--使用密码登录-->
            <div class="login-bottom">
              <div class="left">
                <span>遇到问题?</span>
              </div>
              <div class="right">
                <span style="color:#000">使用密码验证登录</span>
              </div>
            </div>
            <!--按钮-->
            <div class="Person-phone" @click.prevent="login">
              <span >登录</span>
            </div>
            <div class="Person-postbox" @click="$router.back()">
              <span>其他登录方式</span>
            </div>
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
  import {reqSendCode} from '../../../api'
  import { MessageBox, Toast} from 'mint-ui';
  export default {
    data(){
      return{
        phone:'',  //手机号
        code:'',    //密码
        computeTime:0, // 验证码倒计时
      }
    },
    computed:{
      isRightPhone(){
        return /^1\d{10}$/.test(this.phone)
      },
      isRightCode(){
        return /^\d{6}$/.test(this.code)
      }
    },
    methods:{
      async getCode(){
        if(this.computeTime>0){
          return
        }
        if(!this.isRightPhone){
          return Toast('请输入正确的手机号')
        }
        this.computeTime = 30
        const intervalId = setInterval(()=>{
          this.computeTime--
          if(this.computeTime <= 0 ){
            this.computeTime = 0
            clearInterval(intervalId)
          }
        },1000)

        const result = await reqSendCode(this.phone)
        if(result.code === 0){
          Toast('发送成功')
          this.computeTime = 0
        }else{
          MessageBox.alert(result.msg)
          this.computeTime = 0
        }
      },
      login(){
        //前台表单验证
        const {phone,code} = this
        if(!this.isRightPhone){
          return Toast('请输入正确的手机号')
        }else if(!this.isRightCode){
          return Toast('请输入六位验证码')
        }
      }


    },

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
        .login-bottom
          margin-top 16px
          display flex
          justify-content space-between
          align-items center
          font-size: 0.4rem;
          color #7e8c8d

        .Person-phone
          margin-top 20px
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

        .goLg
          font-size 14px
          text-align: center
          >i
            color: #ccc

</style>
