<template>
<div class="sidebar" :class="{open:'/order/sidebar'===$route.path}">
  <div class="header_content">
    <div class="content_back"></div>
    <div class="content_frame">
      <div class="content_head">
        <div class="head_image">
          <img src="../../images/2.jpg" alt="">
        </div>
        <div class="head_name">
          <span>眼里都是星辰大海</span>
        </div>
        <div class="head_center">
          <span>签到</span>
        </div>
      </div>
      <detailed-list></detailed-list>
    </div>
  </div>
</div>
</template>

<script>
  import DetailedList from '../../../components/DetailedList/DetailedList'
    export default {
      mounted () {
        this.$store.dispatch('getSidebars')
      },
      components: {
        DetailedList
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .sidebar
    right-border-1px(black)
    position fixed
    z-index 100
    left 0
    right 0
    width 80%
    height 100%
    display none
    &.open
      display flex
    .header_content
      height 100%
      width 100%
      overflow-y auto
      overflow-x hidden
      background darkslategray
      position absolute
      .content_back
        position relative
        box-sizing border-box
        width 100%
        height 130px
      .content_frame
        width 100%
        height 625px
        background white
        position: absolute;
        border-radius: 17px 17px 0 0;
        .content_head
          height 80px
          width 100%
          padding-top: 8px;
          position relative
          .head_image
            margin: 16px 0 0 10px;
            height: 66%;
            width: 17%;
            border-radius: 50px;
            float: left;
            overflow: hidden;
            img
              width: 100%;
              height 100%
              float: left
          .head_name
            float left
            height 20%
            margin: 10% 0 0 2%;
            width: 45%;
            span
              font-size 12px
              color black
          .head_center
            float right
            height 22%
            margin-top 10%
            margin-right: 10%
            width: 14%;
            border: 1px solid red;
            border-radius: 20px;
            span
              margin-left: 23%;
              font-size 13px
              color red
            span:nth-child(2)
              font-size 18px
              width 16px
        .content_message
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          height 55px
        .guide_item
          width: 25%;
          color red
          line-height 18px
          font-size 22px
          span
            line-height 18px
          .item_icon
            font-size 22px
            margin-top 1px
          .text
            font-size 11px
            margin-top 1px
            color black
            .iconfont
              font-size 18px


</style>
