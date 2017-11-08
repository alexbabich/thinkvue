<template>
    <b-container>
        <p class="text-center th-block-title">Часто задаваемые вопросы</p>
        <ul class="list-unstyled row th-ask-list">
            <li v-for="answer in questionList" class="col-6 th-ask-item">
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
          { title: 'Вы отправите исходный код?', text: 'Мы можем делать любые настройки, но мы не добавляем никаких новых функций. Однако, если мы добавим новую функцию в будущем, ваше приложение обновиться автоматически в вашем плане.' },
          { title: 'Что вы делаете в поддержке и обслуживании?', text: 'Все обновления ОС. Обновление функции в рамках плана. Поддержка электронной почты и звонков по любой проблеме или простым запросам. Исправление ошибок.' }
        ]
      }
    }
  }
</script>

<style lang="scss">
    .th-ask-list {
        margin-top: 78px;
    }
    .th-ask-item {

    }
    .th-block-title {
        font-size: 2.875rem;
        font-weight: 300;
        line-height: 1;
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
</style>
