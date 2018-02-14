<template>
    <b-modal id="modal1" centered class="th-modal" :class="formClass" :hide-footer="true">
        <div class="modal-body m-0">
            <div v-if="formClass" class="pt-0 pl-4 pr-4 pb-1">
                <h2 class="mb-4 mt-2 text-center" v-if="formClass">Настройка Вашего приложения</h2>
                <p>Чтобы посмотреть, как будет выглядеть Ваше приложение, выполните несколько действий:</p>
                <p>1) Скачайте тестовое приложение "Суши e-app"</p>
                <ul class="list-unstyled th-appList">
                    <li><a href="#"><i class="fa fa-android"></i>Android</a></li>
                    <li><a href="https://itunes.apple.com/us/app/суши-e-app/id1327375087?ls=1&mt=8"><i class="fa fa-apple"></i>IOS</a></li>
                </ul>
                <p>2) Нажмите кнопку "Войти с кодом"</p>
                <p>3) Введите Код вашей конфигурации</p>
                <h2 class="mb-4 mt-2 text-center bold"><strong>{{formClass}}</strong></h2>
                <p>Готово!</p>
                <p><small>*Для выбора другой палитры или набора функций - сгенерируйте новый Код конфигурации и введите его снова.</small></p>
            </div>

            <h2 v-else class="text-center">Пожалуйста заполните необходимые поля</h2>
        </div>
    </b-modal>
</template>

<script>
/* eslint-disable indent */
  export default {
    name: 'ModalWindow',
    props: ['formClass'],
    data () {
      return {
        formSendMessage: ''
      }
    }
  }
</script>

<style lang="scss" scoped>

    .th-modal {
        position: relative;
        z-index: 99999;
    }

    .modal-body h2 {
        margin-top: 0;

        @media (max-width: 767px) {
            margin-bottom: 5px !important;
            font-size: 26px;
        }
    }

    .th-appList {
        position: relative;

        @media (max-width: 767px) {
            text-align: center;
        }

        &::after {
            content: '';
            background: url("../assets/img/qrcode.png");
            height: 134px;
            width: 134px;
            display: block;
            position: absolute;
            right: 35%;
            top: 10px;

            @media (max-width: 767px) {
                position: relative;
                right: -25%;
            }
        }

        li {
            padding: 17px 0;
            font-size: 24px;
            text-decoration: underline;

            @media (max-width: 767px) {
                padding: 5px 0;
                margin: 0 10px;
                display: inline-block;
            }

            i {
                color: #000;
                font-size: 24px;
                margin-right: 10px;
            }
        }
    }

    @media (max-width: 767px) {
        p {
            font-size: 14px;
        }
    }

</style>
