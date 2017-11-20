<template>
    <b-container class="text-center">
        <button v-on:click=" collapsed = !collapsed" class="th-view-more">Посмотреть все<i class="fa fa-angle-down" aria-hidden="true"></i></button>
    </b-container>
</template>

<script>
  export default {
    name: 'ViewMore',
    data () {
      return {
        collapsed: true
      }
    }
  }
</script>

<style lang="scss" scoped>
    .th-view-more {
        font-size: 1.25rem;
        color: #282828;
        i {
            margin-left: 10px;
        }
    }
</style>
