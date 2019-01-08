

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

export default {
  //推荐页头部
  [RECEIVE_CATELIST] (state,{cateLists}) {
    state.cateLists = cateLists
  },

  [RECEIVE_SORTLIST] (state,{sortList}) {
    state.sortList = sortList
  },
  [RECEIVE_SORTID] (state,{SortId}) {
    state.SortId = SortId
  },
  [RECEIVE_FINDTAB] (state,{FindTab}) {
    state.FindTab = FindTab
  },
  [RECEIVE_RECMANUAL] (state,{FindList}) {
    state.FindList = FindList
  },
  [RECEIVE_TABDATA] (state,{TabData}) {
    TabData.forEach((item =>state.TabData.push(item) ))
  },
  [RECEIVE_GETUPDATE] (state,{Update}) {
    Update.forEach((item =>state.Update.push(item) ))
  },
  [RECEIVE_HOMEDATA] (state,{HomeData}) {
    HomeData.forEach(item => state.HomeData.push(item))
  },


  [RECEIVE_DATAONE] (state,{shareDataOne}) {
    state.shareDataOne = shareDataOne
  },
  [RECEIVE_DATATWO] (state,{shareDataTwo}) {
    shareDataTwo.forEach((item,index) => state.shareDataTwo.push(item))
  },
  [RECEIVE_DATATHREE] (state,{shareDataThree}) {
    state.shareDataThree = shareDataThree
  },

  [RECEIVE_REQSEARCH] (state,{Searchs}) {
    state.Searchs = Searchs
  },
  [RECEIVE_SEARCHLIST] (state,{SearchList}) {
    state .SearchList = SearchList
  },



}
