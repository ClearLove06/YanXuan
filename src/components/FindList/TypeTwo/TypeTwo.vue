<template>
  <a href="javascript:;" class="a2" v-show="li.style===2">
    <div class="a2-left">
      <div>
              <span class="content-title">
                <img v-lazy="li.avatar" alt="">
              </span>
        <span class="content-text">{{li.nickname}}</span>
      </div>
      <div>{{li.title}}</div>
      <div>严选海外超走心新年礼</div>
      <div>
        <i class="iconfont icon-shequneiicon-"></i>
        <span>{{(li.readCount/1000).toFixed(1)}}k人看过</span>
      </div>
    </div>
    <div class="a2-right">
      <img v-lazy="li.picUrl" alt="">
    </div>
  </a>
</template>
<script>
  export default {
    props:{
      li:Object
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .a2
    .a2-left
      width: 5.5rem
      >div
        &:nth-child(1)
          font-size: .28rem;
          color: #333;
          line-height: .36rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis
          .content-title
            width: .76rem;
            height: .76rem;
            overflow: hidden;
            border-radius: 50%;
            box-sizing: border-box;
            border: .01rem solid #d9d9d9;
            margin-right: .12rem;
            display: inline-block;
            vertical-align: middle
            >img
              display block
              width 100%
          .content-text
            font-size: 0.38rem;
            color: #333;
            line-height: .38rem;
            white-space: nowrap;
        &:nth-child(2)
          width: 100%;
          font-size: .5rem;
          color: #333;
          line-height: 0.72rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          padding-top: .32rem;
          font-family: PingFangSC-Regular
        &:nth-child(3)
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: .38rem;
          line-height: .4rem;
          padding-top: .08rem;
          color: #7f7f7f;
        &:nth-child(4)
          font-size: .22rem;
          color: #999;
          line-height: .32rem;
          margin-top: .18rem;
          >i
            vertical-align: middle;


    .a2-right
      position absolute
      top: 16px
      right: 19px
      width: 3.5rem;
      height: 3.5rem;
      border-radius: .08rem;
      overflow hidden
      >img
        width: 100%
        height 100%
        transform scale(1.8,1)
</style>
