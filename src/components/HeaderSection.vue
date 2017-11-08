<template>
    <div class="th-header">
        <header-menu></header-menu>
        <b-container>
            <b-row>
                <b-col lg="8">
                    <h1>Приложения для вашего бизнеса по цене чашки кофе</h1>
                    <p>Увеличь прибыль своего бизнеса в 2 раза используя мобильное приложение.</p>
                </b-col>
                <b-col lg="4">
                    <form-send></form-send>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
  import HeaderMenu from '@/components/HeaderMenu.vue'
  import FormSend from '@/components/FormSend.vue'

  export default {
    name: 'HeaderSection',
    components: {
      'header-menu': HeaderMenu,
      'form-send': FormSend
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss">
    .th-header {
        height: 800px;
        background: url("../assets/img/top-bg.png") no-repeat top center;
        background-size: cover;
        position: relative;
        z-index: 1;
        &:before {
            background-color: rgba(0,0,0,0.3);
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            z-index: 2;
        }
    }
    .container {
        z-index: 3;
        position: relative;
    }
</style>
