<template>
  <div class="find">
    <div class="find-header">
      <header>
        <div class="header-topbar">
          <div class="header-row">
            <div class="header-left">
              <i class="iconfont icon-shouye"></i>
            </div>
            <div class="header-content" >
              <span>发现</span>
              <span>甄选家</span>
            </div>
            <div class="header-right">
              <div class="left">
                <i class="iconfont icon-gouwuche"></i>
              </div>
              <div class="right">
                <i class="iconfont icon-fangdajing" @click="$router.push('/Search')"></i>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
    <div class="find-tap">
      <ul>
        <li class="find-headerTab"
            v-for="(li,index) in FindTab" :key="index"
            :class="{active:$route.path ===route[index] }"
            @click="toggle(index)">
          {{li.tabName}}
        </li>
      </ul>
    </div>
    <div class="find-content">
        <router-view/>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        route:['/find/findtab','/find/expert','/find/update','/find/share','/find/home']
      }
    },
    mounted(){
      this.$store.dispatch('getFindTab')
    },
    computed:{
      ...mapState(['FindTab']),
    },
    methods:{
      toggle(index){
        this.$router.replace(this.route[index])
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .find-header
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
            color: #7F7F7F;
            z-index: 1;
            >span
              line-height: 1.3434rem
              &:first-child
                padding: 0 .16rem;
                vertical-align: middle;
                font-size: .52rem;
                color: #b4282d;
                font-weight: bold;
              &:last-child
                padding: 0 .16rem;
                vertical-align: middle
                color: #7F7F7F
                font-size: .4rem;
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

  .find-tap
    width: 100%;
    height: 0.9rem;
    background: #fafafa;
    border-bottom: .01rem solid #d9d9d9;
    box-sizing: border-box;
    overflow: hidden;
    position: fixed;
    top: 1.3434rem;
    left: 0;
    z-index: 5;
    >ul
      display flex
      justify-content: space-around;
      margin: 0;
      .find-headerTab
        &.active
          color: #B4282D;
          border-bottom: .04rem solid #B4282D
        display: inline-block;
        height: .9rem;
        line-height: .9rem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        font-size: .38rem;
        color: #7F7F7F;
        padding: 0 .08rem;
        margin: 0 .2rem;
        vertical-align: middle;

  .find-content
    padding: 2.24rem 0 1.2rem 0;

</style>
