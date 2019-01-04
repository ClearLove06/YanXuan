<template>
  <div>
    <div class="search">
      <div class="search-warp">
        <div class="search-input">
          <div>
            <i class="iconfont icon-fangdajing"></i>
            <input type="text" placeholder="严选实时更新 热销排行榜" v-model="keywordPrefix">
            <i class="No iconfont icon-Group-" v-if="SearchList.length!==0" @click="clear"></i>
          </div>
        </div>
        <span @click="$router.back()">取消</span>
      </div>

      <div class="search-latest" v-if="SearchList.length===0">
        <div class="search-content">
          <header>
            <p>热门搜索</p>
          </header>
          <ul>
            <li :class="{active:s.highlight}" v-for="(s,index) in Searchs.hotKeywordVOList">{{s.keyword}}</li>
          </ul>
        </div>
      </div>
      <ul class="search-list" v-else>
        <li v-for="(li,index) in SearchList" :key="index">{{li}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        keywordPrefix:''
      }
    },
    computed:{
      ...mapState(['Searchs','SearchList'])
    },
    mounted(){
      this.$store.dispatch('getSearchs')
      this.timeout = null;
    },
    methods:{
      clear(){
        this.keywordPrefix = ''
      }
    },
    watch:{
      keywordPrefix(){
        if(this.timeout !==null){
          clearTimeout(this.timeout)
        }
        this.timeout = setTimeout(()=>{
          const {keywordPrefix} = this
          this.$store.dispatch('getSearchList',keywordPrefix)
        },2000)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .search
    .search-warp
      height: 1.17333rem;
      display flex
      justify-content space-around
      align-items center
      background #fff
      box-sizing border-box
      padding: 0 .4rem;
      .search-input
        background-color: #f4f4f4;
        height: .74667rem;
        border-radius: 4px;
        flex 1
        >div
          padding-left: .26667rem;
          background-color: #f4f4f4;
          height: .74667rem;
          border-radius: 4px;
          display flex
          align-items center
          >input
            width 100%
            height 100%
            background-color: #f4f4f4;
            padding-left: .3rem;
            font-size: .37333rem;
            outline none
          .No
            color: #ccc
            margin-right 10px
            margin-top 2px

      >span
        line-height: .53333rem;
        padding-left: .3rem;
        font-size: .37333rem;
    .search-latest
      background-color: #f4f4f4
      .search-content
        margin-bottom: .26667rem
        padding: 0 .4rem .4rem;
        background-color: #fff;
        overflow: hidden
        >header
          height: 1.2rem;
          font-size: .37333rem;
          color: #999;
          line-height 1.2rem
        >ul
          margin-right: -.4rem;
          margin-bottom: -.42667rem;
          >li
            float: left;
            padding: 0 .2rem;
            margin-right: .42667rem;
            margin-bottom: .42667rem;
            line-height: .61333rem;
            border: 1px solid #999;
            border-radius: 4px;
            color: #333;
            font-size: 10px;
            &.active
              border-color: #b4282d;
              color: #b4282d;



    .search-list
      display: block;
      padding-left: .4rem;
      background-color: #fff;
      >li
        height: 1.2rem;
        font-size: .37333rem
        line-height 1.2rem;
        bottom-border-1px(#d9d9d9)

</style>
