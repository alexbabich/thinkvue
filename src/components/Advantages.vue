<template>
    <b-container class="mt-5" id="advantages">
        <p class="text-center th-block-title">Наши преимущества</p>
        <div class="row">
            <div v-for="parent in advantegsList" :key="parent.id" class="col-12 col-md-6" :class="[$style.thAdvantegList]">
                <p class="text-center mb-4" :class="[$style.thAdvantTitle]">{{parent.title}}</p>
                <ul class="list-unstyled">
                    <li v-for="item in parent.moreinfo" :key="item.id">
                        <p :class="[$style.thAdvantSubtitle]">{{item.subtitle}}</p>
                        <p :class="[$style.thAdvantText]" v-if="item.subtext">{{item.subtext}}</p>
                        <ul class="list-unstyled" :class="[$style.thSublist]" v-if="item.list">
                            <li v-for="listItem in item.list" :key="listItem.id">
                                {{listItem.text}}
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <vm-back-top :bottom="30" :duration="1000" :timing="'ease'">
            <div :class="[$style.top]"><i class="fa fa-arrow-up" aria-hidden="true"></i></div>
        </vm-back-top>
    </b-container>
</template>

<script>
import VmBackTop from 'vue-multiple-back-top'

export default {
  components: {
    VmBackTop
  },
  name: 'Advantages',
  filters: {
  },
  data () {
    return {
      advantegsList: [
        {
          title: 'Обычно',
          moreinfo: [
            {
              subtitle: 'Цена разрабоки:  от 5000$',
              subtext: 'Дизайн + разработка двух приложений под платформу iOS и Android.'
            },
            {
              subtitle: 'Время разработки: от 4 мес.',
              subtext: 'Разработка дизайна, разработка, тестирование, исправление ошибок, публикация в магазины.'
            },
            {
              subtitle: 'Риски при разработке - высокие',
              list: [
                {
                  text: 'Сложно найти качественного исполнителя'
                },
                {
                  text: 'Ваши идеи могут быть реализованы неверно'
                },
                {
                  text: 'Несоответствие готового приложения вашим ожиданиям'
                }
              ]
            }
          ]
        },
        {
          title: 'Мы предлагаем',
          moreinfo: [
            {
              subtitle: 'Цена разрабоки:  от 99$',
              subtext: 'Аренда двух приложений (iOS и Android) в месяц.'
            },
            {
              subtitle: 'Время разработки: от 1 мес.',
              subtext: 'Настройка дизайна, добавление товаров, публикация в магазины.'
            },
            {
              subtitle: 'Риски внедрения - минимальные',
              list: [
                {
                  text: 'Вы сможете протестировать аналогичные приложения'
                },
                {
                  text: 'Вы видите сразу каким будет приложение'
                },
                {
                  text: 'Вы платите сразу за готовый, разработанный продукт'
                }
              ]
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
        min-height: 52px;
    }

    .top {
        padding: 5px;
        background: rgba(195, 195, 195, 0.7);
        color: #fff;
        text-align: center;
        border-radius: 2px;
        &:hover {
            background: rgba(195, 195, 195, 0.4);
        }
    }

    .thSublist {
        padding-left: 20px;
        li {
            list-style: circle;
            margin: 5px 0;
        }
    }

    @media (max-width: 767px) {
        .thAdvantegList:before {
            width: 0;
        }
    }

    @media only screen and (max-width : 575px) {
        .thAdvantegList {
            padding: 0;
            margin: 15px 0;
        }
    }
</style>
