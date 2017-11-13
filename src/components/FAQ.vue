<template>
    <b-container class="pt-5 pb-5">
        <p class="text-center th-block-title">Часто задаваемые вопросы</p>
        <ul class="list-unstyled row th-ask-list">
            <li v-for="answer in questionList" :key="answer.id" class="col-sm-6 mb-5 th-ask-item">
                <p class="th-ask-title">{{answer.title}}</p>
                <p class="th-ask-text">{{answer.text}}</p>
            </li>
        </ul>
        <view-more/>
    </b-container>
</template>

<script>
  import ViewMore from '@/components/ViewMore.vue'
  export default {
    components: {ViewMore},
    name: 'FAQ',
    data () {
      return {
        questionList: [
          {
            title: 'Вы отправите исходный код?',
            text: 'Мы можем делать любые настройки, но мы не добавляем никаких новых функций. Однако, если мы добавим новую функцию в будущем, ваше приложение обновиться автоматически в вашем плане.'
          },
          {
            title: 'Что вы делаете в поддержке и обслуживании?',
            text: 'Все обновления ОС. Обновление функции в рамках плана. Поддержка электронной почты и звонков по любой проблеме или простым запросам. Исправление ошибок.'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
    .th-ask-list {
        margin-top: 78px;
    }
    .th-ask-item {

    }
    .th-ask-title {
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 1;
        min-height: 48px;
        margin-bottom: 38px;
    }

    .th-ask-text {
        font-size: 1.125rem;
        line-height: 1.5rem;
        font-weight: 400;
    }
    @media only screen and (max-width : 576px) {
        .th-ask-item {
            padding: 0;
        }
    }
</style>
