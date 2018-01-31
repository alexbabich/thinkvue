<template>
    <b-modal id="modal1" centered class="th-modal" :class="formClass" :hide-footer="true">
        <div class="modal-body m-0">
            <h2 class="mb-4 mt-2" v-if="formClass">Код вашей конфигурации</h2>
            <h2 v-else class="text-center">Пожалуйста заполните необходимые поля</h2>
            <h2 class="mb-4 mt-2">{{formClass}}</h2>
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
