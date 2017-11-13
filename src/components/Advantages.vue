<template>
    <b-container class="mt-5">
        <p class="text-center th-block-title">Наши преимущества</p>
        <div class="row">
            <div v-for="parent in advantegsList" :key="parent.id" class="col-12 col-md-6" :class="[$style.thAdvantegList]">
                <p class="text-center mb-4" :class="[$style.thAdvantTitle]">{{parent.title}}</p>
                <ul class="list-unstyled">
                    <li v-for="item in parent.moreinfo" :key="item.id">
                        <p :class="[$style.thAdvantSubtitle]">{{item.subtitle}}</p>
                        <p :class="[$style.thAdvantText]">{{item.text}}</p>
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

<style lang="scss" module>
    .thAdvantTitle {
        font-size: 1.875rem;
    }
    .thAdvantegList {
        position: relative;
        padding: 0 50px;
        &:first-child {
            &:before {
                width: 0;
            }
        }
        &:before {
            content: '';
            position: absolute;
            height: 80%;
            width: 2px;
            background-color: #57b1b3;
            left: -6px;
        }
        li {
            margin-bottom: 25px;
        }
    }
    .thAdvantSubtitle {
        font-size: 1.5625rem;
    }
    .thAdvantText {
        font-size: 1.1875rem;
        line-height: 1.4;
    }

    @media (max-width: 768px) {
        .thAdvantegList:before {
            width: 0;
        }
    }

    @media only screen and (max-width : 576px) {
        .thAdvantegList {
            padding: 0;
            margin: 15px 0;
        }
    }
</style>
