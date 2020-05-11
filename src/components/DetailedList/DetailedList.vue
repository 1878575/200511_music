<template>
  <div>
    <div class="content_message" v-if="'/order'===$route.path">
      <a href="javascript:;" class="guide_item" v-for="(me, index) in info.menu" :key="index">
        <span class="item_icon">
          <i class="iconfont" :class="`${me.icon}`"></i>
        </span>
        <span class="text">{{me.text}}</span>
      </a>
    </div>
    <div class="content_message" v-if="'/find'===$route.path">
      <a href="javascript:;" class="guide_item" v-for="(rat, index) in ratings.rating" :key="index">
        <span class="item_icon">
          <i class="iconfont" :class="`${rat.icon}`"></i>
        </span>
        <span class="text">{{rat.text}}</span>
      </a>
    </div>
    <div class="content_message" v-if="'/order/sidebar'===$route.path">
      <a href="javascript:;" class="guide_item" v-for="(rat, index) in sidebars.sidebar" :key="index">
        <span class="item_icon">
          <i class="iconfont" :class="`${rat.icon}`"></i>
        </span>
        <span class="text">{{rat.text}}</span>
      </a>
    </div>
    <div class="content_message" v-if="'/music'===$route.path">
      <a href="javascript:;" class="guide_item" v-for="(me, index) in info.tonight" :key="index">
        <span class="item_icon">
          <i class="iconfont" :class="`${me.icon}`"></i>
        </span>
        <span class="text">{{me.text}}</span>
      </a>
    </div>
  </div>

</template>

<script>
  import {mapState} from 'vuex'
    export default {
      computed: {
        ...mapState(['info', 'ratings', 'sidebars'])
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .content_message
    height 90px
    width 100%
    position absolute
    .guide_item
      width 20%
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      float left
      span
        height 100%
        font-size 20px
        margin-top 18px
        line-height: 30px;
      .text
        font-size 14px
        margin-top 2px

</style>
