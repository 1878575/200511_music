<template>
<div>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(image, index) in ratings.images" :key="index">
        <a href="javascript:;" class="guide_item" >
          <img :src="image.path" alt="">
        </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
  <div class="list">
    <detailed-list></detailed-list>
  </div>
</div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  import {mapState} from 'vuex'

  import DetailedList from '../../components/DetailedList/DetailedList'
    export default {
      mounted () {
         this.$store.dispatch('getRatings'),

         new Swiper('.swiper-container' , {    //创建一个Swiper对象，来实现轮播
            loop: true,  //可以循环轮播
            autoplay: true,
            pagination: {
              el: '.swiper-pagination'
            }
         })
      },
      computed: {
        ...mapState(['ratings'])
      },
      components: {
        DetailedList
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .swiper-container
      width: 100%;
      height: 155px;
      margin-top 50px
      position absolute
      overflow: hidden;
      .swiper-wrapper
        margin-top: 10px;
        .swiper-slide
          height: 90%;
          overflow: hidden;
          img
            width 95%
            border-radius: 12px;
            margin-left: 2.5%;
    .list
      position absolute
      width 100%
      height: 100px;
      margin-top: 205px;
      .item_icon
        width: 51%;
        background-color: red;
        border-radius: 50px;
        padding: 4% 0;
        color white
        .iconfont
          font-size 22px
      .text
        color black

</style>
