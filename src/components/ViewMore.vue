<template>
    <b-container class="text-center">
        <span v-on:click=" collapsed = !collapsed" class="th-view-more">Посмотреть все<i class="fa fa-angle-down" aria-hidden="true"></i></span>
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
        display: block;
        font-size: 1.25rem;
        color: #282828;
        i {
            margin-left: 10px;
        }
    }
</style>
