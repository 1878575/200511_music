import Vue from 'vue'
import Router from 'vue-router'

import Sidebar from '../pages/Order/Sidebar/Sidebar.vue'
import Order from '../pages/Order/Order.vue'
import Find from '../pages/Find/Find.vue'
import Village from '../pages/Village/Village.vue'
import Square from '../pages/Village/Square/Square.vue'
import Follow from '../pages/Village/Follow/Follow.vue'
import Music from '../pages/Music/Music.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true,
        showHeader: true
      },
      children: [
        {
          path: '/order/sidebar',
          component: Sidebar,
          meta: {
            showFooter: true,
            showHeader: true
          },
        },
      ]
    },
    {
      path: '/find',
      component: Find,
      meta: {
        showFooter: true,
        showHeader: true
      },
    },
    {
      path: '/music',
      component: Music,
      meta: {
        showFooter: true
      },
    },
    {
      path: '/village',
      component: Village,
      children:[
        {
          path: '/village/square',
          component: Square,
          meta: {
            showFooter: true,
            showHeader: true
          },
        },
        {
          path: '/village/follow',
          component: Follow,
          meta: {
            showFooter: true,
            showHeader: true
          },
        },
        {
          path: '',
          redirect: '/village/square'
        },
      ]
    },
    {
      path: '/',
      redirect: '/order'
    },

  ]
})
