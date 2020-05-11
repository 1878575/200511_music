<template>
    <div class="header_top">
      <a href="javascript:;" class="guide_item" @click="goTo('/order/sidebar')">
        <span class="item_icon" :class="{follow:'/order'===$route.path}">
          <i class="iconfont icon-menu icon-left" ></i>
        </span>
      </a>
      <a href="javascript:;" class="guide_item" @click="goTo('/order')">
        <span :class="{on:'/order'===$route.path}">我的</span>
      </a>
      <a href="javascript:;" class="guide_item" @click="goTo('/find')">
        <span :class="{on:'/find'===$route.path, follow:'/order'===$route.path}">发现</span>
      </a>
      <a href="javascript:;" class="guide_item" @click="goTo('/village')">
        <span :class="{on:'/village/square'===$route.path || '/village/follow'===$route.path,
        follow:'/order'===$route.path}">云村</span>
      </a>
      <a href="javascript:;" class="guide_item" >
        <span :class="{follow:'/order'===$route.path}">视频</span>
      </a>
      <a href="javascript:;" class="guide_item" >
        <span class="item_icon">
          <i class="iconfont icon-search icon-right" :class="{follow:'/order'===$route.path}"></i>
        </span>
      </a>
    </div>

</template>

<script>
    export default {
      methods: {
        goTo (path) {
          this.$router.replace(path)
        }
      },

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .header_top
    position fixed
    z-index 99
    left 0
    right 0
    top -1px
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      span
        height 100%
        font-size 20px
        margin-top 2px
        margin-bottom 8px
        color lightgrey
        line-height: 40px;
        &.on
          color black
        &.follow
          color white
        .iconfont
          font-size 24px
        .icon-left
          color black
          margin-right 20px
        .icon-right
          color black
          margin-left 20px

</style>
