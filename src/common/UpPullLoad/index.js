export default function _inScroll(scroll){
  if(!scroll){
    scroll= new BScroll('.better-scroll',{
      click:true,
      pullUpLoad: {
        threshold:1000
      }
    })
  }else{
    scroll.on('pullingUp',()=>{
      if(this.timeoutId !== null){
        clearTimeout(this.timeoutId)
      }
      this.timeoutId = setTimeout(()=>{
        this.$store.dispatch('getTabData')
      },1000)
      scroll.finishPullUp()
    })
  }
  scroll.refresh()
}
