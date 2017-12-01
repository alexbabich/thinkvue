<template>
    <b-container class="pt-5 pb-5" id="solut">
        <p class="th-block-title text-center">Наши решения</p>
        <ul class="list-unstyled row th-solution-list" v-bind:class="{'is-collapsed' : collapsed }">
            <li v-for="solution in solutionList" :key="solution.id" class="col-sm-12 col-md-6 col-lg-4 th-solution-item">
                <p class="mb-3 th-solution-title" :class="solution.img">{{solution.title}}</p>
                <p class="th-solution-text">{{solution.text}}</p>
            </li>
        </ul>
        <span @click="toggleButton()" class="th-view-more">{{collapsedText}}<i class="fa fa-angle-down" aria-hidden="true"></i></span>
    </b-container>
</template>

<script>
  import constants from '@/constants'

  export default {
    name: 'Solutions',
    methods: {
      toggleButton () {
        this.collapsed = !this.collapsed
        if (this.collapsed) {
          this.collapsedText = constants.showTextMore
          this.$scrollTo(this.blockId, 400, constants.options)
        } else {
          this.collapsedText = constants.showTextLess
        }
      }
    },
    data () {
      return {
        blockId: '#solut',
        collapsedText: constants.showTextMore,
        collapsed: true,
        solutionList: [
          {
            img: 'th-rocket',
            title: 'Ваше собственное приложение',
            text: 'Ваше название, логотип, цвет и т. д., чтобы увеличить доверия к вашему бренду.'
          },
          {
            img: 'th-payment',
            title: 'Способы оплаты',
            text: 'Платежи privat24, liqpay, возможность оплаты банковской картой интегрированы в мобильное приложение.'
          },
          {
            img: 'th-path',
            title: 'Интеграция с Poster',
            text: 'Система автоматизации работы ресторанов и заведений общепита.'
          },
          {
            img: 'th-android',
            title: 'Android',
            text: 'Android приложение с множеством потрясающих функций и красивым видом.'
          },
          {
            img: 'th-apple',
            title: 'IOS',
            text: 'iOS приложение с множеством потрясающих функций и красивым видом.'
          },
          {
            img: 'th-bolt',
            title: 'Обновление товаров в реальном времени',
            text: 'Все категории продуктов и списки обновляются в приложении в режиме реального времени.'
          },
          {
            img: 'th-trash',
            title: 'Корзина',
            text: 'Ускорение процесса оформления заказа.'
          },
          {
            img: 'th-fb',
            title: 'Присоединение социальных сетей',
            text: 'Все страницы социальных сетей (Facebook, Twitter, Instagram и т. д.) будут добавлены в приложение.'
          },
          {
            img: 'th-category',
            title: 'Категории',
            text: 'Категории и подкатегории отображаются в динамических, а также в настраиваемых макетах.'
          },
          {
            img: 'th-user',
            title: 'Вход в приложение',
            text: 'Вы сможете напрямую войти в систему.'
          },
          {
            img: 'th-ring',
            title: 'Сообщения и уведомления',
            text: 'Получить сообщение об ошибке на ваш имейл. Отправить предложение или информацию о новых поступлениях вашим пользователям.'
          },
          {
            img: 'th-path',
            title: 'Deep Linking',
            text: 'Пользователь делится своими продуктами с помощью Deep linking. Это дает лучший UX и увеличивает базу пользователей.'
          },
          {
            img: 'th-mix',
            title: 'Несколько видов отображения товаров',
            text: 'Мы предоставляем возможность выбора между отображением "Список" и "Сетка & Столбец".'
          },
          {
            img: 'th-sort',
            title: 'Сортировка продуктов',
            text: 'Сортируйте список товаров по датам, ценам, алфавитным или индивидуальным заказам.'
          },
          {
            img: 'th-repeat',
            title: 'Обновления приложений',
            text: 'Обновления приложений будут предоставлены для исправления проблем и в соответствии с требованиями.'
          },
          {
            img: 'th-download',
            title: 'Загрузки приложений',
            text: 'Неограниченное количество загрузок приложения для Android и iOS..'
          },
          {
            img: 'th-money',
            title: 'Плата за транзакцию - 0,0%',
            text: 'Дополнительная плата отсутствует.'
          },
          {
            img: 'th-translate',
            title: 'Местные языки',
            text: 'Получите приложение на своем языке. Подключайтесь к своим людям.'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
    .is-collapsed {
        li:nth-child(n+7) {
            display: none;
        }
    }
    .th-solution-item {
        margin-bottom: 60px;
    }

    .th-solution-text {
        font-size: 1.125rem;
    }
    .th-solution-title {
        padding-right: 30px;
        padding-left: 75px;
        position: relative;
        font-size: 1.0625rem;
        min-height: 45px;
        &:before {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            background-image: url('../assets/img/icon-benefits.png');
            background-repeat: no-repeat;
            background-size: auto;
            height: 35px;
            width: 35px;
        }
        &.th-rocket:before {
            height: 29px;
            background-position: 0 0;
        }
        &.th-android:before {
            height: 33px;
            background-position: 50% 0;
        }
        &.th-apple:before {
            height: 34px;
            background-position: 100% 0;
        }
        &.th-bolt:before {
            background-position: 0 100%;
        }
        &.th-trash:before {
            background-position: 50% 100%;
        }
        &.th-fb:before {
            height: 29px;
            background-position: 100% 100%;
        }
        &.th-category:before {
            background-image: url("../assets/img/icon-category.png");
        }
        &.th-payment:before {
            background-image: url("../assets/img/icon-payment.png");
        }
        &.th-user:before {
            background-image: url("../assets/img/icon-user.png");
        }
        &.th-ring:before {
            background-image: url("../assets/img/icon-ring.png");
        }
        &.th-path:before {
            background-image: url("../assets/img/icon-path.png");
        }
        &.th-mix:before {
            background-image: url("../assets/img/icon-mix.png");
        }
        &.th-sort:before {
            background-image: url("../assets/img/icon-sort.png");
        }
        &.th-repeat:before {
            background-image: url("../assets/img/icon-repeat.png");
        }
        &.th-download:before {
            background-image: url("../assets/img/icon-download.png");
        }
        &.th-money:before {
            background-image: url("../assets/img/icon-money.png");
        }
        &.th-translate:before {
            background-image: url("../assets/img/icon-translate.png");
        }
    }

    @media only screen and (max-width : 767px) {
        .th-solution-title {
            min-height: auto;
        }
        .th-solution-item {
            margin-bottom: 30px;
        }
    }

    @media only screen and (max-width : 575px) {
        .th-solution-item {
            padding: 0;
        }
        .th-solution-title {
            padding-left: 45px;
            padding-right: 0;
        }
    }

</style>
