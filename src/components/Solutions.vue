<template>
    <b-container class="pt-5 pb-5">
        <p class="th-block-title text-center">Некоторые факты</p>
        <ul class="list-unstyled row th-solution-list">
            <li v-for="solution in solutionList" :key="solution.id" class="col-sm-12 col-md-6 col-lg-4 th-solution-item">
                <p class="mb-4 th-solution-title" :class="solution.img">{{solution.title}}</p>
                <p class="th-solution-text">{{solution.text}}</p>
            </li>
        </ul>
        <view-more/>
    </b-container>
</template>

<script>
  import ViewMore from '@/components/ViewMore.vue'

  export default {
    components: {ViewMore},
    name: 'Solutions',
    data () {
      return {
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
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
    .th-solution-list {
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
