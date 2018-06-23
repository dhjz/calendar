<template>
  <div class="calendar">
    <div class="wrap">
      <div class="header">
        header
      </div>
      <div class="day-words">
        来来去去我的心谁也不懂，等你照进我的窗口。
      </div>
      <div class="day-muisc">
        <i>icon</i>
        <span>hello-world</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'calendar',
  methods: {
    test () {
      this.$http.get('https://api.github.com/users/kotone')
      .then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.calendar
  display flex
  flex-direction column
  height 100%
  padding 70px 40px
  .wrap
    flex 1
    border 2px solid #fff
    border-radius 5px

</style>
