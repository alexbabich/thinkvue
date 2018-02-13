<template>
    <b-modal id="modal1" centered class="th-modal" :class="formClass" :hide-footer="true">
        <div class="modal-body m-0">
            <div v-if="formClass" class="pt-0 pl-4 pr-4 pb-1">
                <h2 class="mb-4 mt-2 text-center" v-if="formClass">Код вашей конфигурации</h2>
                <p>Чтобы посмотреть, как будет выглядеть Ваше приложение, выполните несколько действий:</p>
                <p>1) Скачайте тестовое приложение на свой iPhone <a href="https://itunes.apple.com/us/app/суши-e-app/id1327375087?ls=1&mt=8">https://itunes.apple.com/us/app/суши-e-app/id1327375087?ls=1&mt=8</a></p>
                <p>2) Зайдите в Настройки/Применить конфигурацию</p>
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

    .modal-body h2 {
        margin-top: 0;
    }

</style>
