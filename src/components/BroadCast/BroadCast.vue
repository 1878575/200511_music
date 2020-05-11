<template>
<div class="footer_guide">
  <div class="music_play"></div>
  <div class="music_menu">
    <a href="javascript:;">
    <span class="item_icon">
        <i class="iconfont icon-gedan"></i>
      </span>
    </a>
  </div>
</div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 99
    left 0
    right 0
    bottom -1px
    background-color white
    width 100%
    height 50px
    display flex
    .music_play
      background-color pink
      height 100%
      width 85%
    .music_menu
      height 100%
      width 15%
      a
        display flex
        flex 1
        text-align center
        flex-direction column
        align-items center
        margin 5px
        .iconfont
          font-size 40px
</style>
