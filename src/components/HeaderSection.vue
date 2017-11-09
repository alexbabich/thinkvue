<template>
    <div class="th-header">
        <header-menu></header-menu>
        <b-container>
            <b-row>
                <b-col lg="7" class="p-0">
                    <h1 class="th-page-title">Приложения для вашего бизнеса по цене чашки кофе</h1>
                    <p class="th-page-subtitle">Увеличь прибыль своего бизнеса в 2 раза используя мобильное приложение.</p>
                </b-col>
                <form-send/>
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
        position: relative;
        &:after,
        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
        }
        &:after {
            background: url("../assets/img/top-bg.png") no-repeat top center;
            background-size: cover;
            z-index: -2;
        }
        &:before {
            background-color: rgba(0, 0, 0, 0.3);
            z-index: -1;
        }
    }

    .th-page-title {
        font-size: 3rem;
        line-height: 1;
        color: #fff;
        font-weight: 300;
    }
    .th-page-subtitle {
        font-size: 1.875rem;
        font-style: italic;
        line-height: 1;
        color: #fff;
        font-weight: 300;
    }
</style>
