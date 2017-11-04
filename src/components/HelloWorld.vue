<template>
  <div id="app">
    <header-menu></header-menu>
    <div class="hello">
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
  import HeaderMenu from '@/components/HeaderMenu.vue'

  export default {
    name: 'HelloWorld',
    components: {
      'header-menu': HeaderMenu
    },
    data () {
      return {
        msg: 'iThink SPA'
      }
    }
  }
</script>

<style lang="scss">
  .hello {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    h1 {
      font-weight: normal;
    }
  }
</style>
