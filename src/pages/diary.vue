<template>
  <div class="diary">
    <div class="header">
      <div class="date">
        <div class="year">2016年 · 十二月</div>
        <div class="day">5</div>
        <div class="week">星期二 10:20</div>
      </div>
    </div>
    <div class="main">
      <input type="text" placeholder="标题">
      <textarea placeholder="日记"></textarea>
    </div>
    <div class="footer">
      <div class="select-option">
        <i class="facial icon"></i>
        <i class="weather icon"></i>
      </div>
      <div class="save">
        <span class="tips">(未保存)</span>
        <i class="save-icon"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'diary',
  data () {
    return {

    }
  },
  mounted () {
    
  }
}
</script>

<style lang="stylus" scoped>
opacityBkg = rgba(255,255,255,.8)
.diary
  height 100%
  display flex
  flex-direction column
  .header
    position relative
    text-align center
    color #fff
    padding 30px 0
    font-size 30px;/*px*/
    background #2980b9
    // background transparent
    .day
      font-size 100px
  .main
    display flex
    flex 1
    flex-direction column
    font-size 32px;/*px*/
    input
      padding 20px 15px
      background opacityBkg
      font-weight 700
      outline none
      border none
    textarea
      flex 1
      overflow-y auto
      -webkit-overflow-scrolling touch
      background opacityBkg
      outline none
      padding 15px
  .footer
    display flex
    justify-content space-between
    align-items center
    font-size 24px;/*px*/
    background #2980b9
    color #fff
    padding 30px
    .select-option
      display flex
      align-items center
    .save
      display flex
      align-items center
      .save-icon
        display inline-block
        width 48px
        height 48px
        margin-left 20px
        background url(../assets/save.png) 0 0 no-repeat
        background-size 48px 48px

.select-option .icon
  display inline-block
  width 48px
  height 48px
  margin-right 30px
  background-size 48px 48px  
.weather
  background url(../assets/weather/sun.png) 0 0 no-repeat
.facial
  background url(../assets/facial/happy.png) 0 0 no-repeat
</style>
