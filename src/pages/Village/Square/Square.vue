<template>
<div>
  <div class="village_square">
    <ul class="square-list">
      <li v-for="(squ, index) in squares.square" :key="index">
        <div class="liu-back">
          <img :src="squ.image">
        </div>
        <div class="liu-text" v-if="squ.texts">
          <span>{{squ.texts.text}}</span>
          <div class="footer">
            <span class="left">{{squ.texts.name}}</span>
            <span class="right">{{squ.texts.zan}}赞</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
      mounted () {
        this.$store.dispatch('getSquares')
      },
      computed: {
        ...mapState(['squares'])
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .village_square
    display: flex
    position: absolute
    top: 90px
    bottom: 46px
    width: 100%
    background: aliceblue;
    overflow: hidden
    .square-list
      width 100%
      height 100%
      li
        box-sizing border-box
        float left
        border-radius: 12px;
        margin: 1.5% 2%;
        height 210px
        width:46%
        background white
        overflow: hidden;
        .liu-back
          width 100%
          img
            width 100%
        .liu-text
          span
            color black
            font-size 14px
            margin-left: 8%;
            margin-top: 4px;
          .footer
            height 19px
            font-size 10px
            .left
              float: left
              margin-left: 8%;
            .right
              float: right
              margin-right: 8%;
</style>
