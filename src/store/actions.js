/*
通过mutation间接更新state的多个方法的对象
 */
import {
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  RECEIVE_SQUARES,
  RECEIVE_SIDEBARS
} from './mutation-types'
import {
  reqInfo,
  reqRatings,
  reqSquares,
  reqSidebar
} from '../api'


export default {
  async getInfo({commit}) {
    const result = await reqInfo()
    if(result.code===0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },
  // 异步获取商家评价列表
  async getRatings({commit}) {
    const result = await reqRatings()
    if(result.code===0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
    }
  },

  async getSquares({commit}) {
    const result = await reqSquares()
    if(result.code===0) {
      const squares = result.data
      commit(RECEIVE_SQUARES, {squares})
    }
  },

  async getSidebars({commit}) {
    const result = await reqSidebar()
    if(result.code===0) {
      const sidebars = result.data
      commit(RECEIVE_SIDEBARS, {sidebars})
    }
  },

}
