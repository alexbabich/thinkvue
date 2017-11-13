<template>
    <b-container>
        <p class="text-center th-block-title">Наши преимущества</p>
        <div class="row">
            <div v-for="parent in advantegsList" :key="parent.id" class="col-6">
                <p class="text-center">{{parent.title}}</p>
                <ul class="list-unstyled th-advanteg-list">
                    <li v-for="item in parent.moreinfo" :key="item.id">
                        <p>{{item.subtitle}}</p>
                        <p>{{item.text}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </b-container>
</template>

<script>
  export default {
    name: 'Advantages',
    data () {
      return {
        advantegsList: [
          {
            title: 'Обычно',
            moreinfo: [
              {
                subtitle: 'Цена разрабоки:  от 5000$',
                text: 'Дизайн+разработка 2 приложений под платформу iOS и Android.'
              },
              {
                subtitle: 'Время разработки: от 4 мес.',
                text: 'Разработка дизайна, разработка, тестирование, исправление ошибок, публикация в магазины.'
              },
              {
                subtitle: 'Риски при разработке - высокие',
                text: 'Cложно найти качественного исполнителя, ваши идеи могут быть реализованы неверно, несоответствие готового приложения вашим ожиданиям.'
              }
            ]
          },
          {
            title: 'Мы предлагаем',
            moreinfo: [
              {
                subtitle: 'Цена разрабоки:  от 99$',
                text: 'Аренда двух приложений (iOS и Android) в месяц.'
              },
              {
                subtitle: 'Время разработки: от 1 мес.',
                text: 'Настройка дизайна, добавление товаров, публикация в магазины.'
              },
              {
                subtitle: 'Риски внедрения - минимальные',
                text: 'Вы сможете потестировать аналогичные приложения, вы видете сразу каким будет приложение, вы платите сразу за готовый, разработанный продукт.'
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
    .th-user-photo {
        height: 131px;
        width: 131px;
        border: 4px solid #fff;
        box-shadow: 5px 5px 29px 2px #f0f0f0;
        &.th-default-photo {
            background: url("../assets/img/default-user-photo.png") no-repeat;
            display: block;
            background-size: contain;
            margin: auto;
        }
    }
</style>
