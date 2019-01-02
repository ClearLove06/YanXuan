
import ajax from './ajax'

const BASE = '/yanxuan';

export const reqCateList = ()=>ajax('/cateList')
export const reqSortList = ()=>ajax('/fenLei')
//识物tab
export const reqFindTab = ()=>ajax(BASE+'/getTabs.json')
//识物list
export const reqRecManual = ()=>ajax(BASE+'/recManual.json')
//识物达人
export const reqTabData= ({page,size,tabId})=>ajax(BASE+'/getTabData.json',{page,size,tabId})

