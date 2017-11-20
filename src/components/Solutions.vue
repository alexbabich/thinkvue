<template>
    <b-container class="pt-5 pb-5">
        <p class="th-block-title text-center">Наши решения</p>
        <ul class="list-unstyled row th-solution-list" v-bind:class="{'is-collapsed' : collapsed }">
            <li v-for="solution in solutionList" :key="solution.id" class="col-sm-12 col-md-6 col-lg-4 th-solution-item">
                <p class="mb-3 th-solution-title" :class="solution.img">{{solution.title}}</p>
                <p class="th-solution-text">{{solution.text}}</p>
            </li>
        </ul>
        <button v-on:click=" collapsed = !collapsed" class="th-view-more">Посмотреть все<i class="fa fa-angle-down" aria-hidden="true"></i></button>
    </b-container>
</template>

<script>
  export default {
    name: 'Solutions',
    data () {
      return {
        collapsed: true,
        solutionList: [
          {
            img: 'th-rocket',
            title: 'Ваше соственное приложение',
            text: 'Ваше название, логотип, цвет и т. д., чтобы увеличить доверия к вашему бренду.'
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
            img: 'th-rocket',
            title: 'Категории',
            text: 'Категории и подкатегории отображаются в динамических, а также в настраиваемых макетах.'
          },
          {
            img: 'th-rocket',
            title: 'Полностью Native',
            text: 'Это полностью собственные приложения. Производительность и пользовательский интерфейс лучше, когда вы используете Native приложения.'
          },
          {
            img: 'th-rocket',
            title: 'Способы оплаты',
            text: 'Платежи privat24, liqpay, возможность оплаты банковской картой интегрированы в мобильное приложение.'
          },
          {
            img: 'th-rocket',
            title: 'Вход в приложение',
            text: 'Вы сможете напрямую войти в систему.'
          },
          {
            img: 'th-rocket',
            title: 'Сообщения и уведомления',
            text: 'Получить сообщение об ошибке на ваш имейл. Отправить предложение или информацию о новых поступлениях вашим пользователям.'
          },
          {
            img: 'th-rocket',
            title: 'Deep Linking',
            text: 'Пользователь делится своими продуктами с помощью Deep linking. Это дает лучший UX и увеличивает базу пользователей.'
          },
          {
            img: 'th-rocket',
            title: 'Несколько видов отображения товаров',
            text: 'Мы предоставляем возможность выбора между отображением "Список" и "Сетка & Столбец".'
          },
          {
            img: 'th-rocket',
            title: 'Сортировка продуктов',
            text: 'Сортируйте список товаров по датам, ценам, алфавитным или индивидуальным заказам.'
          },
          {
            img: 'th-rocket',
            title: 'Обновления приложений',
            text: 'Обновления приложений будут предоставлены для исправления проблем и в соответствии с требованиями.'
          },
          {
            img: 'th-rocket',
            title: 'Загрузки приложений',
            text: 'Неограниченное количество загрузок приложения для Android и iOS..'
          },
          {
            img: 'th-rocket',
            title: 'Плата за транзакцию - 0,0%',
            text: 'Дополнительная плата отсутствует.'
          },
          {
            img: 'th-rocket',
            title: 'Местные языки',
            text: 'Получите приложение на своем языке. Подключайтесь к своим людям.'
          },
          {
            img: 'th-rocket',
            title: 'Синхронизация хранилища в реальном времени',
            text: 'Все категории продуктов и списки синхронизируются с приложением в режиме реального времени.'
          },
          {
            img: 'th-rocket',
            title: 'Поддержка',
            text: 'Мы обеспечиваем поддержку мирового класса, 24 * 7 - через звонки, электронную почту и портал поддержки.'
          },
          {
            img: 'th-rocket',
            title: 'Интеграция с Poster',
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
    }

    @media only screen and (max-width : 768px) {
        .th-solution-title {
            min-height: auto;
        }
        .th-solution-item {
            margin-bottom: 30px;
        }
    }

    @media only screen and (max-width : 576px) {
        .th-solution-item {
            padding: 0;
        }
        .th-solution-title {
            padding-left: 45px;
            padding-right: 0;
        }
    }

</style>
