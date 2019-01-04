<template>
  <div class="Person-header">
    <header>
      <div class="header-topbar">
        <div class="header-row">
          <div class="header-left">
            <i class="iconfont icon-shouye" @click="$router.replace('/msite')"></i>
          </div>
          <div class="header-content" >
            <span>网易严选</span>
          </div>
          <div class="header-right">
            <div class="left">
              <i class="iconfont icon-gouwuche" @click="$router.replace('/Shopping')"></i>
            </div>
            <div class="right">
              <i class="iconfont icon-fangdajing" @click="$router.push('/Search')"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
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

</style>
