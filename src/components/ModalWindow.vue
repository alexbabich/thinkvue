<template>
    <b-modal id="modal1" centered class="th-modal" :hide-footer="true">
        <div class="modal-body m-0">
            <FormSend :formTitle="formSendMessage" :formClass="formSendClass" :buttonTitle="submitTitle" />
        </div>
    </b-modal>
</template>

<script>
  import FormSend from './FormSend.vue'

  export default {
    name: 'ModalWindow',
    components: {
      FormSend
    },
    data () {
      return {
        formSendMessage: 'Оставте свои контакты\nи мы вам презвоним',
        formSendClass: 'th-form-price',
        submitTitle: 'Отправить'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
