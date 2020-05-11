<template>
  <div class="app">
    <div class="over_face">
      <sidebar></sidebar>
    </div>
    <div class="footer_face">
      <header-top v-show="$route.meta.showHeader"></header-top>
      <div class="footer_top">
        <router-view/>
      </div>
      <broad-cast v-show="$route.meta.showFooter"></broad-cast>
    </div>
  </div>

</template>

<script>
  import HeaderTop from './components/HeaderTop/HeaderTop'
  import BroadCast from './components/BroadCast/BroadCast'
  import Sidebar from './pages/Order/Sidebar/Sidebar'
export default {
 components: {
   HeaderTop,
   BroadCast,
   Sidebar
 }
}
</script>

<style lang="stylus" rel="stylesheet/stylus-loader">
  .app
    width 100%
    height 100%
    .over_face
      z-index 2
      float left
      height: 100%;
      width: 80%;
    .footer_face
      width 100%
      height 100%
      .footer_top
        height 100%
        width 100%
        bottom 50px

</style>
