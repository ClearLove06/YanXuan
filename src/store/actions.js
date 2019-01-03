
import {
  reqCateList,
  reqSortList,
  reqFindTab,
  reqRecManual,
  reqTabData,
  reqDataOne,
  reqDataTwo,
  reqDataThree
} from '../api'
import {
  RECEIVE_CATELIST,
  RECEIVE_SORTLIST,
  RECEIVE_FINDTAB,
  RECEIVE_RECMANUAL,
  RECEIVE_TABDATA,
  RECEIVE_GETUPDATE,
  RECEIVE_HOMEDATA,
  RECEIVE_DATAONE,
  RECEIVE_DATATWO,
  RECEIVE_DATATHREE
}from './mutations-type'
let num = 0
let page = 0
let home = 0
let share=0
export default {
  async getCateList({commit} ){
    const result = await reqCateList()
    if(result.code === 0){
      const cateLists = result.data
      commit(RECEIVE_CATELIST,{cateLists})
    }
  },
  async getSortList({commit}){
    const result = await reqSortList()
    if(result.code === 0){
      const sortList = result.data.categoryL1List
      commit(RECEIVE_SORTLIST,{sortList})
    }
  },
  async getFindTab({commit}){
    const result = await reqFindTab()
    if(result.code === "200"){
      const FindTab = result.data
      commit(RECEIVE_FINDTAB,{FindTab})
    }
  },
  async getRecManual({commit}){
    const result = await reqRecManual()
    if(result.code==="200"){
      const FindList = result.data
      commit(RECEIVE_RECMANUAL,{FindList})
    }
  },
  async getTabData({commit,state},cb){
    num++
    if(state.Update>0||state.HomeData>0){
      return
    }
    const result = await reqTabData(num,5,4)
    if(result.code ==="200"){
      const TabData = result.data.result
      commit(RECEIVE_TABDATA,{TabData})
      typeof cb==='Function'&&cb()
    }
  },
  async getUpdate({commit,state},cb){
    page++
    if(state.TabData>0||state.HomeData>0){
      return
    }
    console.log(page);
    const result = await reqTabData(page,5,5)
    if(result.code ==="200"){
      const Update = result.data.result
      commit(RECEIVE_GETUPDATE,{Update})
      typeof cb==='Function'&&cb()
    }
  },
  async getHomeData({commit,state},cb){
    home++
    if(state.TabData>0||state.Update>0){
      return
    }
    const result = await reqTabData(home,5,6)
    if(result.code ==="200"){
      const HomeData = result.data.result
      commit(RECEIVE_HOMEDATA,{HomeData})
      typeof cb==='Function'&&cb()
    }
  },
  async getDataOne({commit}){
    const result = await reqDataOne()
    if(result.code === "200"){
      const shareDataOne = result.data
      commit(RECEIVE_DATAONE,{shareDataOne})
    }
  },
  async getDataTwo({commit,state},cb){
    share++
    const result = await reqDataTwo(share,20,1)
    if(result.code ==="200"){
      const shareDataTwo = result.data.topicList
      commit(RECEIVE_DATATWO,{shareDataTwo})
      typeof cb==='Function'&&cb()
    }
  },

  async getDataThree({commit,state},{id}){
    const result = await reqDataThree(id)
    if(result.code ==="200"){
      const shareDataThree = result.data
      commit(RECEIVE_DATATHREE,{shareDataThree})
    }
  },

}
