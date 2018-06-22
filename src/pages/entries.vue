<template>
  <div class="entries">
    <template v-for="item of entries">
      <div class="item"
      :key="item.id"
      @click="showDetail"
      >
        <div class="date">
          <div class="day">{{item.day}}</div>
          <div class="week">{{item.week}}</div>
        </div>
        <div class="container">
          <div class="header">
            <div class="time">{{item.time}}</div>
            <div class="status">icon</div>
          </div>
          <div class="content">
            <div class="title">{{item.title}}</div>
            <div class="introduction">{{item.introduction}}</div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: 'List',
  data () {
    return {
      entries: []
    }
  },
  created () {
    this.$http.get('/api/entries.json')
    .then(res => {
      this.entries = res.data.data
    })
  },
  methods: {
    showDetail () {
      this.bus.$emit('entries', true)
    }
  }
}
</script>

<style lang="stylus" scoped>
dayFont = 70px
contentFont = 30px
introductionFont = 24px
weekFont = 24px
headerFont = 24px
normalColor = #2980b9

.entries
  flex 1
  overflow-y auto
  -webkit-overflow-scrolling touch
  padding-bottom 30px
.item,.container,.header
  display flex
.item
  color normalColor
  background #fff
  margin 30px 20px 0
  padding 30px
  border-radius 10px
  align-items center
  /.date
    text-align center
    margin-right 20px
    width 15%
    .day
      font-size dayFont;/*px*/
    .week
      font-size weekFont;/*px*/
  /.container
    flex 1
    flex-direction column
    .header
      font-size headerFont;/*px*/
      justify-content space-between
    .title
      padding 8px 0
    .content
       font-size contentFont;/*px*/
    .introduction
      font-size introductionFont;/*px*/
</style>
