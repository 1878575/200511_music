<template>
  <section class="order" ref="scroll">
    <div class="header_content">
      <div class="content_back">
        <div class="content_image">
          <img src="../images/1.jpg" alt="">
        </div>
        <div class="content_head">
          <div class="head_image">
            <img src="../images/2.jpg" alt="">
          </div>
          <div class="head_name">
            <span>眼里都是星辰大海</span>
          </div>
          <div class="head_center">
            <span>进入会员中心</span>
          </div>
        </div>
        <detailed-list></detailed-list>
      </div>
      <div class="content_frame"></div>
      <inter-fix></inter-fix>
    </div>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import InterFix from '../../components/InterFix/InterFix'
  import DetailedList from '../../components/DetailedList/DetailedList'
    export default {
      data() {
        return {
          scrollY: 0, // 右侧滑动的Y轴坐标 (滑动过程时实时变化)
          top: 0
        }
      },
      mounted () {
        this.$store.dispatch('getInfo'),
        this._initScroll()
        this._initTops()
      },
      methods: {
        // 初始化滚动
        _initScroll() {
          // 列表显示之后创建
          this.orderScroll = new BScroll('.order', {
            probeType: 2,
            click: true
          })

          this.orderScroll.on('scroll', ({x, y}) => {
            this.scrollY = Math.abs(y)
          })
          this.orderScroll.on('scrollEnd', ({y}) => {
            console.log('scrollEnd', y)
            this.top = Math.abs(y)
            console.log(this.top)
          })

        },

        _initTops() {

        },

      },
      components: {
        InterFix,
        DetailedList
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .order
    width 100%
    height 100%
    position fixed
    .header_content
      width 100%
      background ghostwhite
      position absolute
      .content_back
        position relative
        box-sizing border-box
        width 100%
        height 225px
        .content_image
          position absolute
          opacity: 0.8;
          width 100%
          height 100%
          img
            width: 100%;
        .content_head
          height 90px
          width 100%
          padding-top: 50px;
          position relative
          .head_image
            margin: 16px 0 0 10px;
            height: 76%;
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
            margin: 7% 0 0 2%;
            width: 45%;
            span
              font-size 20px
              color white
          .head_center
            float right
            height 20%
            margin-top 7%
            margin-right: 2px
            width: 24%;
            span
              font-size 13px
              color white
             span:nth-child(2)
              font-size 18px
              width 16px
        .guide_item
          color white
          .iconfont
            font-size 30px
      .content_frame
        width 100%
        height 25px
        background white
        position: absolute;
        border-radius: 40px 40px 0 0;

</style>
