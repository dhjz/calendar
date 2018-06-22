<template>
  <div class="login">
    <div @click="test">日记页面</div>
  </div>
</template>

<script>
export default {
  name: 'login',
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
.login
  margin-right 30px
</style>
