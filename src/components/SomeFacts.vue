<template>
    <b-container class="pt-5 pb-5">
        <p class="th-block-title text-center">Некоторые факты</p>
        <ul class="list-unstyled row th-fact-list">
            <li v-for="fact in factList" class="col-sm-6 th-fact-item mb-4">
                <p class="th-fact-text">{{fact.text}}</p>
            </li>
        </ul>
        <view-more/>
    </b-container>
</template>

<script>
  import ViewMore from '@/components/ViewMore.vue'

  export default {
    components: {ViewMore},
    name: 'SomeFacts',
    data () {
      return {
        factList: [
          {
            text: 'Покупатели, использующие мобильные приложения, \n' +
            'просмотрели на 286 процентов больше продуктов, \n' +
            'чем мобильные веб-покупатели'
          },
          {
            text: 'Процент добавления товаров в корзину на \n' +
            '90% выше, чем у мобильных браузеров.'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
    .th-fact-text {
        font-weight: 300;
        font-size: 1.25rem;
    }
</style>
