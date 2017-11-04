<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'iThink SPA'
    }
  }
}
</script>

<style lang="scss">
  .hello {
    h1 {
      font-weight: normal;
    }
  }
</style>
