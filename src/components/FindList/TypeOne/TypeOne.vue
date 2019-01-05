<template>
  <a href="javascript:;" class="a1" >
    <div>
      <span class="content-title">
        <img v-lazy="li.avatar" alt="">
      </span>
      <span class="content-text">{{li.nickname}}</span>
    </div>
    <div>{{li.title}}</div>
    <div>
      <img v-lazy="li.picUrl" alt="">
    </div>
    <div>
      <i class="iconfont icon-shequneiicon-"></i>
      <span>{{(li.readCount/1000).toFixed(1)}}k人看过</span>
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
  .a1
    >div
      &:nth-child(1)
        margin-bottom: .24rem;
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
        font-size: .5rem;
        color: #333;
        line-height: .72rem;
        margin: -.08rem 0 .16rem 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display:block;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        font-family: PingFangSC-Regular;
      &:nth-child(3)
        width:100%
        height: 5rem;
        margin-bottom: .2rem;
        overflow: hidden;
        border-radius: .08rem
        >img
          width 100%
          height 100%


      &:nth-child(4)
        font-size: .22rem;
        color: #999;
        line-height: .32rem;
        margin-top: .18rem;
        >i
          vertical-align: middle;



</style>
