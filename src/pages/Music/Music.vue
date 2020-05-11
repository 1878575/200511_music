<template>
  <div class="music">
    <div class="header_content">
      <div class="content_back">
        <detailed-list></detailed-list>
      </div>
      <div class="content_frame">

      </div>
    </div>
  </div>
</template>

<script>
  import DetailedList from '../../components/DetailedList/DetailedList'
    export default {
      mounted () {
        this.$store.dispatch('getInfo')
      },
      components: {
        DetailedList
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .music
    position fixed
    left 0
    right 0
    width 100%
    height 100%
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
        height 160px
        .content_message
          height 55px
          bottom: 0px
          .guide_item
            width: 25%;
            color white
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
              .iconfont
                font-size 18px
      .content_frame
        width 100%
        height 625px
        background white
        position: absolute;
        border-radius: 17px 17px 0 0;

</style>
