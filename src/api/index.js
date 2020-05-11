/*
包含n个接口请求函数的模块
 */
import ajax from './ajax'

export const reqInfo = () => ajax('/order')

export const reqRatings = () => ajax('/find')

export const reqSquares = () => ajax('/village/square')

export const reqSidebar = () => ajax('/order/sidebar')



