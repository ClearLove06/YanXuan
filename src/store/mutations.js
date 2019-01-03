

import {
  RECEIVE_CATELIST,
  RECEIVE_SORTLIST,
  RECEIVE_TOGGLEID,
  RECEIVE_FINDTAB,
  RECEIVE_RECMANUAL,
  RECEIVE_TABDATA,
  RECEIVE_GETUPDATE,
  RECEIVE_HOMEDATA,
  RECEIVE_DATAONE,
  RECEIVE_DATATWO,
  RECEIVE_DATATHREE
}from './mutations-type'

export default {
  //推荐页头部
  [RECEIVE_CATELIST] (state,{cateLists}){
    state.cateLists = cateLists
  },

  [RECEIVE_SORTLIST](state,{sortList}){
    state.sortList = sortList
  },
  [RECEIVE_TOGGLEID](state,{index}){
    state.index = index
  },
  [RECEIVE_FINDTAB](state,{FindTab}){
    state.FindTab = FindTab
  },
  [RECEIVE_RECMANUAL](state,{FindList}){
    state.FindList=FindList
  },
  [RECEIVE_TABDATA](state,{TabData}){
    state.TabData = state.TabData.concat(TabData)
  },
  [RECEIVE_GETUPDATE](state,{Update}){
    state.Update=state.Update.concat(Update)
  },
  [RECEIVE_HOMEDATA](state,{HomeData}){
    state.HomeData=state.HomeData.concat(HomeData)
  },


  [RECEIVE_DATAONE](state,{shareDataOne}){
    state.shareDataOne=shareDataOne
  },
  [RECEIVE_DATATWO](state,{shareDataTwo}){
    state.shareDataTwo=state.shareDataTwo.concat(shareDataTwo)
  },
  [RECEIVE_DATATHREE](state,{shareDataThree}){
    state.shareDataThree=shareDataThree
  },
}
