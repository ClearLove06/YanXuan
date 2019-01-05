<template>
  <div class="Sort-scrollC" v-if="SortLi">
    <div >
      <div class="Sort">
        <img :src="SortLi.wapBannerUrl" alt="">
      </div>
      <div class="SortList">
        <ul >
          <li v-for="(list,index) in SortLi.subCateList " :key="index" >
            <div class="list-top">
              <img :src="list.bannerUrl" alt="">
            </div>
            <div class="list-bottom">{{list.name}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    computed: {
      ...mapState(['sortList', 'SortId']),
      SortLi(){
        return this.sortList.find((item, index) => item.id === this.SortId)
      }
    },
    watch:{
      SortLi () {
        this.$nextTick(()=>{
          new BScroll('.Sort-scrollC',{
            click:true
          })
        })
      },

    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .Sort-scrollC
    height 500px
    .Sort
      position: relative;
      width: 100%;
      height: 2.56rem;
      display: table;
      margin-bottom: .42667rem;
      background: center no-repeat #f4f4f4;
      background-size: cover;
      border-radius: 4px;
      >img
        width 100%
        height 100%
    .SortList
      >ul
        >li
          display: inline-block;
          margin-right: 0.4rem;
          font-size: 0;
          width: 1.92rem;
          vertical-align: top;
          .list-top
            width: 1.92rem;
            height: 1.92rem;
            >img
              display: block;
              width: 100%;
              background: #fff;
              height: 100%;
          .list-bottom
            height: .96rem;
            font-size: .32rem;
            text-align: center;
            line-height: .48rem;
            display: block;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
</style>
