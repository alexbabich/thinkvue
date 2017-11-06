<template>
  <div id="app">
    <header-section></header-section>
    <b-container>
      <div class="hello">
        <h1>{{ msg }}</h1>
      </div>
    </b-container>
  </div>
</template>

<script>
  import HeaderSection from '@/components/HeaderSection.vue'
  export default {
    name: 'HelloWorld',
    components: {
      'header-section': HeaderSection
    },
    data () {
      return {
        msg: ''
      }
    }
  }
</script>

<style lang="scss">
  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
  }

</style>
