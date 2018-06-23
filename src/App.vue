<template>
  <div id="app">
    <!-- <div class="bg"></div> -->
    <Header></Header>
    <transition>
      <Info></Info>
    </transition>
    <router-view></router-view>
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
    
  }
}
</script>
<style lang="stylus">
html, body {
  width 100%
  height 100%
}

#app {
  display flex
  flex-direction column
  height 100%
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
