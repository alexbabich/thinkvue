<template>
    <b-modal id="modal1" centered class="th-modal" :hide-footer="true">
        <div class="modal-body m-0">
            <h2 class="mb-4 mt-2">{{formTitle}}</h2>
        </div>
    </b-modal>
</template>

<script>
/* eslint-disable indent */
  export default {
    name: 'ModalWindow',
    props: ['formTitle'],
    data () {
      return {
        formSendMessage: 'Оставте свои контакты\nи мы вам презвоним'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
