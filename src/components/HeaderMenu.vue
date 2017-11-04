<template>
    <nav>
        <ul class="list-unstyled list-inline">
            <li class="list-inline-item">first</li>
            <li class="list-inline-item">srcond</li>
        </ul>
    </nav>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss">
    nav {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: red;
        margin-top: 60px;
        li {
            font-weight: normal;
        }
    }
</style>
