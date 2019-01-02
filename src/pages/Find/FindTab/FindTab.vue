<template>
  <div>
    <div class="content-list" v-for="(li,index) in lists" :key="index">
      <TypeOne :li="li" v-if="li.style===1"/>
      <TypeTwo :li="li" v-if="li.style===2"/>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import TypeOne from '../../../components/FindList/TypeOne/TypeOne.vue'
  import TypeTwo from '../../../components/FindList/TypeTwo/TypeTwo.vue'
  export default {
    data(){
      return{
        lists:[]
      }
    },
    mounted(){
      this.$store.dispatch('getRecManual')
    },
    computed:{
      ...mapState(['FindList']),
      list(){
        this.FindList.forEach((item,index)=>{
          item.topics.forEach((i,index)=>{
            return this.lists.push(i)
          })
        })
      }
    },
    watch:{
      FindList(){
        this.FindList.forEach((item,index)=>{
          item.topics.forEach((i,index)=>{
            return this.lists.push(i)
          })
        })
      }
    },
    components:{
      TypeOne,
      TypeTwo
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .content-list
    width: 100%;
    background: #fff;
    margin: .2rem 0;
    box-sizing: border-box;
    padding: .36rem .3rem;
    position relative

</style>
