/*
直接更新state的多个方法的对象
 */
import Vue from 'vue'
import {
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  RECEIVE_SQUARES,
  RECEIVE_SIDEBARS
} from './mutation-types'

export default {
  [RECEIVE_INFO](state, {info}) {
    state.info = info
  },
  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },
  [RECEIVE_SQUARES](state, {squares}) {
    state.squares = squares
  },
  [RECEIVE_SIDEBARS](state, {sidebars}) {
    state.sidebars = sidebars
  },
}
