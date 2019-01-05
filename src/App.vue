<template>
  <div>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <FooterList v-show="$route.meta.showFooter"/>
  </div>
</template>
<script>
  import FooterList from './components/FooterList/FooterList.vue'
  export default {
    components:{
      FooterList
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
