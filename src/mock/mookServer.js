

import Mock from 'mockjs'
import cateList from './cateList.json'
import fenLei from'./fenlei_zhuanqu.json'

// 推荐页顶部导航接口
Mock.mock('/cateList',{code:0,data:cateList});

Mock.mock('/fenLei',{code:0,data:fenLei});
