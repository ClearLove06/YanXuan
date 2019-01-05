

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
    state.TabData  = state.TabData.concat(TabData)
  },
  [RECEIVE_GETUPDATE] (state,{Update}) {
    state.Update = state.Update.concat(Update)
  },
  [RECEIVE_HOMEDATA] (state,{HomeData}) {
    HomeData.forEach((item,index) => {
      state.HomeData.push(item)
    })
  },


  [RECEIVE_DATAONE] (state,{shareDataOne}) {
    state.shareDataOne = shareDataOne
  },
  [RECEIVE_DATATWO] (state,{shareDataTwo}) {
    state.shareDataTwo = state.shareDataTwo.concat(shareDataTwo)
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
