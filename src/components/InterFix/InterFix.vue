<template>
 <div class="inner-wrapper">
   <div class="my_music">
     <div class="my_head">
       <span>我的音乐</span>
       <a href="javascript:;" class="guide_item">
        <span class="item_icon">
          <i class="iconfont icon-youjiantou icon-top"></i>
          <i class="iconfont icon-yinle"></i>
        </span>
       </a>
     </div>
     <ul class="list">
       <li>
         <a href="javascript:;" class="guide_item" @click="goTo('/music')">
            <img src="./images/3.jpg" alt="">
            <span class="item_icon">
              <i class="iconfont icon-shixin"></i>
            </span>
            <span class="item">我的音乐</span>
         </a>
       </li>
       <li>
         <a href="javascript:;" class="guide_item" >
            <img src="./images/3.jpg" alt="">
            <span class="item_icon">
              <i class="iconfont icon-shouyinji"></i>
            </span>
           <span class="item">私人FM</span>
         </a>
       </li>
       <li>
         <a href="javascript:;" class="guide_item" >
            <img src="./images/3.jpg" alt="">
            <span class="item_icon">
              <i class="iconfont icon-tuanduicankaoxian-"></i>
            </span>
           <span class="item">私藏推荐</span>
         </a>
       </li>
     </ul>
   </div>
   <div class="music_play">
     <div class="my_head">
       <span class="text">最近播放</span>
       <a href="javascript:;" class="guide_item" >
          <span class="item_icon">
            更多
            <i class="iconfont icon-youjiantou"></i>
          </span>
       </a>
     </div>
   </div>
 </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
      data() {
        return {
          scrollY: 0,
          top: [],
        }
      },
      computed: {

      },
      mounted() {

      },
      methods: {
        goTo (path) {
          this.$router.replace(path)
        },

      },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .my_music
    width 100%
    position relative
    margin-top 23px
    background-color white
    .my_head
      height 20px
      margin: 0 16px;
      span
        font-size 17px
        color black
      .iconfont
        float right
        color #7e8c8d
      .icon-top
        margin-left: 6px;
    .list
      width 100%
      height 160px
      margin-top: 5px;
      li
        border-radius: 9px;
        margin-left: 3%;
        height 100%
        width 29%
        float left
        background black
        overflow hidden
        a
          display: flex;
          height: 100%;
          img
            height: 100%;
            margin-left: -20px;
            opacity: 0.8;
          span
            position absolute
            color white
          .item_icon
            margin-top: 14%;
            margin-left: 10%;
            .iconfont
              font-size 27px
            .icon-shixin
              color red
          .item
            margin-top: 23%;
            margin-left: 6%;
  .music_play
    height 550px
    background pink
    position: relative;
    padding-top: 20px;
    .my_head
      height 20px
      margin: 0 16px;
      .text
        font-size 17px
        color black
      .guide_item
        float right
        color #7e8c8d
        .item_icon
          bottom 2px

</style>
