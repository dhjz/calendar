<template>
  <div class="header">
    <div class="nav">
      <template v-for="(item,index) in nav">
        <div 
        :key="item" 
        :class="{active:index===activeIndex}"
        @click="navChange(index)"
        >
          <router-link :to="item.toLocaleLowerCase()">{{item}}</router-link>
        </div>
      </template>
    </div>
    <div class="bread">{{nav[activeIndex]}}</div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      activeIndex: 0,
      nav: ['Entries', 'Calendar', 'Diary']
    }
  },
  methods: {
    navChange (index) {
      this.activeIndex = index
    }
  }
}
</script>
<style lang="stylus" scoped>
.header
  padding-top 30px
  margin-bottom 2px
  background #fff
.nav
  width 80%
  margin 0 auto
  text-align center
  display flex
  font-size 35px;/*px*/
  color #2980b9
  & > div
    flex 1
    padding 12px 10px
    border 1.5px solid #2980b9;/*no*/
    a
      display block
    &.active
      background #2980b9
      a
        color #fff
    &:first-child
      border-radius 10px 0 0 10px
    &:last-child
      border-radius 0 10px 10px 0
.bread
  color #2980b9
  font-size 40px
  text-align center
  margin-top 20px
  padding-bottom 10px
  box-shadow 0 2px 0 #ccc
</style>
