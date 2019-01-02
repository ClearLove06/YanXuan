

import {
  RECEIVE_CATELIST,
  RECEIVE_SORTLIST,
  RECEIVE_TOGGLEID,
  RECEIVE_FINDTAB,
  RECEIVE_RECMANUAL,
  RECEIVE_TABDATA
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
    state.TabData=TabData
  }
}
