
import ajax from './ajax'

const BASE = '/yanxuan';

export const reqCateList = ()=> ajax('/cateList')
export const reqSortList = ()=> ajax('/fenLei')
//识物tab
export const reqFindTab = ()=> ajax(BASE+'/find/getTabs.json')
//识物list
export const reqRecManual = () => ajax(BASE+'/find/recManual.json')
//识物达人
export const reqTabData = (page,size,tabId) => ajax(BASE+'/find/getTabData.json',{page,size,tabId})
//晒单1
export const reqDataOne = ()=> ajax(BASE+'/look/homeData.json')
//晒单2
export const reqDataTwo = (page,size,type)=> ajax(BASE+'/look/getList.json',{page,size,type})
//晒单3
export const reqDataThree = (id)=> ajax(BASE+'/look/getCollection.json',{id})


