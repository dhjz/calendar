<template>
  <div id="app">
    <Header></Header>
    <transition>
      <Info
        v-show="showInfo"
        @closeInfo="handleCloseInfo"
      ></Info>
    </transition>
    <transition name="router" mode="out-in">
      <router-view 
        @showInfo="handleShowInfo"
      >
      </router-view>
    </transition>
  </div>
</template>

<script>
import Header from './pages/header'
import Info from './pages/info'
export default {
  name: 'App',
  data () {
    return {
      showInfo: false
    }
  },
  components: {
    Header,
    Info
  },
  mounted () {

  },
  computed: {
    
  },
  methods: {
    handleCloseInfo (value) {
      this.showInfo = value
    },
    handleShowInfo (value) {
      this.showInfo = value
    }
  }
}
</script>
<style lang="stylus">
.router-enter-active
  transition all .5s
.router-leave-active
  transition all .25s
.router-enter
  transform translate(100%)
.router-leave-to
  transform translate(-100%)

html, body {
  width 100%
  height 100%
}

#app {
  display flex
  flex-direction column
  height 100%
  overflow hidden
}

#app:before {
  content ''
  display block
  position absolute
  left 0
  right 0
  top 0
  bottom 0
  margin auto
  z-index -1
  background url('./assets/preview.jpg') 0 0 no-repeat
  background-size cover
  filter blur(20px)
}
</style>
