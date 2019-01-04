<template>
  <div class="Sort-scrollC">
    <div>
      <div class="Sort"></div>
      <div class="SortList">
        <ul>
          <li v-for="(list,index) in SortLi" :key="index">
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
    data(){
      return {
        SortLi:[]
      }
    },
    props:{
      indexs:Number,
    },
    computed:{
      ...mapState(['sortList']),
    },
    watch:{
     sortList () {
       this.SortLi=this.sortList[this.indexs].subCateList
       this.$nextTick(()=>{
         new BScroll('.Sort-scrollC',{
           click:true
         })
       })
      },
      indexs(){
        this.SortLi=this.sortList[this.indexs].subCateList
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .Sort-scrollC
    height 530px
    .Sort
      position: relative;
      width: 100%;
      height: 2.56rem;
      display: table;
      margin-bottom: .42667rem;
      background: center no-repeat #f4f4f4;
      background-size: cover;
      border-radius: 4px;
      background-image:url(http://yanxuan.nosdn.127.net/38b49a2863971efec7ec9b6ad3c0f96a.png?imageView&thumbnail=0x196&quality=75);
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
