<template>
    <b-container class="text-center">
        <b-link href="#foo" class="th-view-more">Посмотреть все<i class="fa fa-angle-down" aria-hidden="true"></i></b-link>
    </b-container>
</template>

<script>
  export default {
    name: 'ViewMore',
    data () {
      return {
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
