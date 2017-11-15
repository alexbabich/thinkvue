<template>
    <div class="th-header">
        <HeaderMenu/>
        <b-container>
            <b-row>
                <b-col lg="7" class="p-0">
                    <h1 class="th-page-title">Приложения для вашего бизнеса по цене чашки кофе</h1>
                    <p class="th-page-subtitle">Увеличь прибыль своего бизнеса в 2 раза используя мобильное приложение.</p>
                    <div class="row justify-content-start">
                        <p class="col-5 col-lg-4 th-cups">40 Чашек</p>
                        <p class="col-1 th-empty"></p>
                        <p class="col-6 col-lg-5 th-app">1 месяц аренды приложения</p>
                    </div>
                </b-col>
                <FormSend :formTitle="formSendMessage" />
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
      HeaderMenu,
      FormSend
    },
    data () {
      return {
        formSendMessage: 'Узнай как использовать\nприложение в своем бизнесе'
      }
    }
  }
</script>

<style lang="scss" scoped>
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
        letter-spacing: 0.3px;
    }
    .th-page-subtitle {
        font-size: 1.875rem;
        font-style: italic;
        line-height: 1;
        color: #fff;
        font-weight: 300;
        opacity: 0.7;
        letter-spacing: 0.3px;
    }

    .th-cups,
    .th-app,
    .th-empty {
        color: #fff !important;
        margin-top: 15px;
    }

    .th-empty {
        /*width: 10px;*/
        /*max-width: 10px;*/
    }

    .th-cups,
    .th-app,
    .th-empty {
        padding-top: 180px;
        padding-top: 6em;
        font-size: 1.875rem;
        line-height: 1;
        text-align: center;
        position: relative;
        &:before {
            content: "";
            position: absolute;
            top: 0;
            margin: auto;
            left: 0;
            right: 0;
            max-width: 170px;
            max-height: 155px;
            width: 13.3vw;
            height: 12.15vw;
            background-size: contain !important;
        }
    }
    .th-cups {
        &:before {
            background: url("../assets/img/icon-cups.png") no-repeat center top;
        }
    }
    .th-app {
        &:before {
            background: url("../assets/img/icon-phon.png") no-repeat center top;
        }
    }
    .th-empty {
        &:before {
            width: 47px;
            height: 17px;
            margin: auto;
            top: -40%;
            right: -65px;
            bottom: 0;
            background: url("../assets/img/icon-equal.png") no-repeat center top;
        }
    }

    @media only screen and (max-width : 991px) {
        .th-header {
            height: 950px;
        }
        .th-cups,
        .th-app,
        .th-empty {
            padding-top: 5em;
        }
    }

    @media only screen and (max-width : 768px) {
        .th-header {
            height: 960px;
        }
        .th-cups,
        .th-app,
        .th-empty {
            padding-top: 4em;
        }
    }

    @media only screen and (max-width : 576px) {
        .th-header {
            height: 920px;
        }
        .th-cups,
        .th-app,
        .th-empty {
            padding-top: 3em;
        }
    }

    @media only screen and (min-device-width: 320px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
        .th-header {
            height: 100%;
            padding-bottom: 20px;
        }
        .th-cups,
        .th-app,
        .th-empty {
            max-width: 100%;
            flex: 100%;
            font-size: 1.5rem;
            &:before {
                min-width: 85px;
                min-height: 70px;
            }
        }
        .th-empty {
            padding-top: 1.4em;
            &:before {
                min-width: 47px;
                min-height: 17px;
                max-width: 47px;
                max-height: 17px;
                right: 0;
            }
        }
        .th-app {
            margin-bottom: 40px;
        }
    }
</style>
