
import {
  reqCateList,
  reqSortList,
  reqFindTab,
  reqRecManual,
  reqTabData,
  reqDataOne,
  reqDataTwo,
  reqDataThree,
  reqSearch,
  reqSearchList
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
  RECEIVE_DATATHREE,
  RECEIVE_REQSEARCH,
  RECEIVE_SEARCHLIST,
  RECEIVE_SORTID
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
  async getRecManual({commit},cb){
    const result = await reqRecManual()
    if(result.code==="200"){
      const FindList = result.data
      commit(RECEIVE_RECMANUAL,{FindList})
      typeof cb==='Function'&&cb()
    }
  },
  async getTabData({commit,state},cb){
    if(state.Update.length>0 && state.TabData.length>0 && state.HomeData.length>0){
      return
    }
    num++
    const result = await reqTabData(num,5,4)
    if(result.code ==="200"){
      const TabData = result.data.result
      commit(RECEIVE_TABDATA,{TabData})
      typeof cb==='Function'&&cb()
    }
  },
  async getUpdate({commit,state},cb){
    if(state.Update.length>0 && state.TabData.length>0 && state.HomeData.length>0){
      return
    }
    page++
    console.log(page);
    const result = await reqTabData(page,5,5)
    if(result.code ==="200"){
      const Update = result.data.result
      commit(RECEIVE_GETUPDATE,{Update})
      typeof cb==='Function'&&cb()
    }
  },
  async getHomeData({commit,state}){
    if(state.Update.length>0 && state.TabData.length>0 && state.HomeData.length>0){
      return
    }
    home++
    const result = await reqTabData(home,5,6)
    if(result.code ==="200"){
      const HomeData = result.data.result
      commit(RECEIVE_HOMEDATA,{HomeData})
    }
  },
  //  晒新页面头部
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
//  晒新页面list
  async getDataThree({commit,state},{id}){
    const result = await reqDataThree(id)
    if(result.code ==="200"){
      const shareDataThree = result.data
      commit(RECEIVE_DATATHREE,{shareDataThree})
    }
  },
//  热搜
  async getSearchs({commit}){
    const result = await reqSearch()
    if(result.code === "200"){
      const Searchs = result.data
      commit(RECEIVE_REQSEARCH,{Searchs})
    }

  },
//  搜索
  async getSearchList({commit},keywordPrefix){
    const result = await reqSearchList(keywordPrefix)
    if(result.code === '200'){
      const SearchList = result.data
      commit(RECEIVE_SEARCHLIST,{SearchList})
    }
  },

  getSortId({commit},SortId){
    commit(RECEIVE_SORTID,{SortId})
  }

}
