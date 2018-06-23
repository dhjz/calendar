<template>
  <div
    class="infoPage" 
    :style="{height:deviceHeight + 'px'}"
    >
      <div class="info-wrap">
        <div class="header">
          <div class="date">
            <div class="year">2016年 · 十二月</div>
            <div class="day">5</div>
            <div class="week">星期二 10:20</div>
          </div>
          <div class="close" @click="closeInfo">X</div>
        </div>
        <div class="content">
          <p>昨晚又做了同一个梦。</p>
          <p>我慢慢地知道了发生了什么。</p>
          <p>不定期和乡下的三叶交换身体。</p>
          <p>每周2至3次，没有征兆。</p>
          <p>总是在睡觉时交换。</p>
          <p>原因不明。</p>
          <p>昨晚又做了同一个梦。</p>
          <p>我慢慢地知道了发生了什么。</p>
          <p>不定期和乡下的三叶交换身体。</p>
          <p>每周2至3次，没有征兆。</p>
          <p>总是在睡觉时交换。</p>
          <p>原因不明。</p>
          <p>昨晚又做了同一个梦。</p>
          <p>我慢慢地知道了发生了什么。</p>
          <p>不定期和乡下的三叶交换身体。</p>
          <p>每周2至3次，没有征兆。</p>
          <p>总是在睡觉时交换。</p>
          <p>原因不明。</p>
        </div>
        <div class="footer">
          <div class="page">
            <i class="prev-icon" @click="prevPage"></i>
            <i class="next-icon" @click="nextPage"></i>
          </div>
          <div class="delete-icon" @click="deletePage"></div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'info',
  data () {
    return {
      // showInfo: false,
    }
  },
  computed: {
    deviceHeight () {
      return (document.documentElement.clientHeight)
    }
  },
  mounted () {

  },
  methods: {
    closeInfo () {
      this.$emit('closeInfo', false)
    },
    prevPage () {
      console.log('prevPage')
    },
    nextPage () {
      console.log('nextPage')
    },
    deletePage () {
      console.log('deletePage')
    }
  }
}
</script>

<style lang="stylus" scoped>
.v-enter-active,.v-leave-active
  transition all 1.25s cubic-bezier(0.5, 0.8, 0.8, 1.0)
.v-enter,.v-leave-to
  opacity 0
  transform:rotateY(180deg) scaleY(0) translate3d(0,0,0)

.infoPage
  position absolute
  padding 40px
  box-sizing border-box
  background rgba(0,0,0,.5)
  top 0
  left 0
  right 0
  z-index 999
  // transform-style preserve-3d
  .info-wrap
    height 100%
    border-radius 20px
    display flex
    flex-direction column
    background #fff
    .header
      position relative
      text-align center
      color #fff
      padding 30px 0
      font-size 30px;/*px*/
      background #2980b9
      border-radius 20px 20px 0 0
      .day
        font-size 100px
      .close
        position absolute
        width 48px
        height 48px
        right 5%
        top 10%
        color #ccc
    .content
      flex 1
      overflow-y auto
      -webkit-overflow-scrolling touch
      font-size 28px;/*px*/
      padding 30px 20px
      line-height 1.72
    .footer
      display flex
      background #2980b9
      padding 30px 40px
      justify-content space-between
      align-items center
      border-radius 0 0 20px 20px
      .page
        position relative

.prev-icon,.next-icon
  position absolute
  display inline-block
  width 0
  height 0
  border-style solid
  border-width 24px 18px

.prev-icon
  top -34px
  border-color transparent transparent #fff transparent
.next-icon
  top -10px
  border-color #fff transparent transparent transparent
  margin-left 80px

.delete-icon
  width 48px
  height 48px
  background url(../assets/delete.png) 0 0 no-repeat
  background-size cover
</style>
