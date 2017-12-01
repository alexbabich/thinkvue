<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-header">
                    <button class="btn btn-success" @click="$emit('close')">закрыть</button>
                </div>
                <div class="modal-body m-0">
                    <FormSend :formTitle="formSendMessage" :formClass="formSendClass"/>
                </div>
                <div class="modal-footer row justify-content-center">
                    <slot name="footer">
                        <button class="btn btn-success" @click="$emit('close')">закрыть</button>
                    </slot>
                </div>
            </div>
        </div>
    </div>
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
        formSendClass: 'th-form-price'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
