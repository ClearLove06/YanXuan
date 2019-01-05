<template>
  <div class="sort">
    <!--头部搜索栏-->
    <div class="sort-header">
      <div @click="$router.push('/search')">
        <i></i>
        <span>搜索商品, 共20018款好物</span>
      </div>
    </div>
    <!--左-->
    <div class="sort-left" >
      <ul class="sort-left-list">
        <li v-for="(List,index) in sortList"
            :key="List.id"
            :class="{active:List.id == $route.query.categoryId}"
            @click="toggleId(List.id)">
          <a  class="a1" href="javascript:;" @click="$router.replace(`/sort/sortlist?categoryId=${List.id}` )">{{List.name}}</a>
        </li>
      </ul>
    </div>
    <!--右-->
    <div class="sort-right">
        <router-view/>
      <!--<SortList :indexs="indexs" :sortList="sortList"/>-->
    </div>
  </div>
</template>
<script>
  import SortList from '../../components/SortList/SortList.vue'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['sortList']),
    },
    mounted(){
      this.$store.dispatch('getSortList')
      new BScroll('.sort-left',{
        click:true,
      })
    },
    methods: {
      toggleId (SortId){
        this.$store.dispatch('getSortId',SortId)
      },
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .sort
    .sort-header
      position fixed
      top 0
      z-index 2
      width 100%
      box-sizing border-box
      height: 1.17333rem;
      padding: 0 .4rem;
      background-color: #fff;
      padding-top 0.2rem
      bottom-border-1px(#eee)
      >div
        display flex
        align-items: center;
        justify-content: center;
        height: .74667rem;
        font-size: .37333rem;
        background-color: #ededed;
        border-radius: .10667rem;
        >i
          display: inline-block;
          vertical-align: middle;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
          background-repeat: no-repeat
          background-size: 100% 100%
          width: .37333rem
          height: .37333rem
          margin-right: .13333rem
        >span
          color: #666;
          font-size: .37333rem
    .sort-left
      position fixed
      top: 1.17333rem
      left 0
      width: 2.16rem;
      background-color: #fff;
      height 95%
      border-right 1px solid #eee
      .sort-left-list
        padding-bottom: 1.84rem;
        padding-top: .53333rem
        >li
          width: 100%;
          height: .66667rem;
          text-align: center;
          border: none;
          margin-top: .53333rem;
          box-sizing border-box
          &.active
            border-left 3px solid #ab2b2b
            .a1
              color: #ab2b2b;
          &:first-child
            margin-top:0;
          .a1
            display: block;
            color: #333;
            font-size: .37333rem;
            line-height: .66667rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            box-sizing border-box
    .sort-right
      height 600px
      margin-left: 2.16rem;
      padding: 0.4rem .4rem .28rem
      background #ffffff
</style>
