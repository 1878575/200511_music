/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data.json'

// 返回goods的接口
Mock.mock('/order', {code:0, data: data.info})
Mock.mock('/music', {code:0, data: data.info})
// 返回ratings的接口
Mock.mock('/find', {code:0, data: data.ratings})

Mock.mock('/village/square', {code:0, data: data.squares})

Mock.mock('/order/sidebar', {code:0, data: data.sidebars})

// export default ???  不需要向外暴露任何数据, 只需要保存能执行即可
