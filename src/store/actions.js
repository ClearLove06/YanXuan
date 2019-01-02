
import {
  reqCateList,
  reqSortList,
  reqFindTab,
  reqRecManual,
  reqTabData
} from '../api'
import {
  RECEIVE_CATELIST,
  RECEIVE_SORTLIST,
  RECEIVE_FINDTAB,
  RECEIVE_RECMANUAL,
  RECEIVE_TABDATA
}from './mutations-type'

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

  async getTabData({commit,state},{page,size,tabId}){
    const result = await reqTabData({page,size,tabId})
    if(result.code ==="200"){
      const TabData = result.data.result
      commit(RECEIVE_TABDATA,{TabData})
    }
  }
}
