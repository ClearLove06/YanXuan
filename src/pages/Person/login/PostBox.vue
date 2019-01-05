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
            <input type="text" placeholder="邮箱账号" v-model="mailbox">
          </div>
          <div class="input-bottom">
            <input type="password" placeholder="密码" v-model="pwd">
          </div>
          <!--注册账号-->
          <div class="login-bottom">
            <div class="left">
              <span>注册账号</span>
            </div>
            <div class="right">
              <span >忘记密码</span>
            </div>
          </div>
          <!--按钮-->
          <div class="Person-phone" @click="login">
            <span >登录</span>
          </div>
          <div class="Person-postbox" @click="$router.back()">
            <span>其他登录方式</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import PersonHeader from '../../../components/PersonHeader/PersonHeader.vue'
  import { MessageBox, Toast} from 'mint-ui';
  export default {
    data(){
      return{
        mailbox:'',
        pwd:''
      }
    },
    computed:{
      isMailbox(){
        return /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(this.mailbox)
      }
    },
    methods:{
      login(){
        const {mailbox,pwd} =this
        if(!this.isMailbox){
            return Toast('请输入正确的邮箱地址')
        }else if(!pwd.trim()){
          return Toast('请输入密码')
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

</style>
