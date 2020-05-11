<template>
  <div>
    <div class="tab">
      <div class="tab-item left-item">
        <router-link to="/village/square" replace>广场</router-link>
      </div>
      <div class="tab-item right-item">
        <router-link to="/village/follow" replace>关注</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .tab
    position: fixed;
    bottom-border-1px(rgba(7, 17, 27, 0.1))
    z-index: 2;
    width: 100%;
    height 40px
    line-height 40px
    background white
    margin-top: 50px;
    .tab-item
      position absolute
      float left
      width: 50%
      text-align center
      font-size 15px
      color rgb(77, 85, 93)
      a
        display block
        position relative
        &.router-link-active
          color red
          &::after
            content ''
            position absolute
            left 50%
            bottom 1px
            width 55px
            height 2px
            transform translateX(-50%)
            background red
            border-radius: 50%;
    .left-item
      a
        margin-left: 35%;
    .right-item
      margin-left 50%
      a
        margin-right 35%

</style>
