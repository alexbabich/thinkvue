<template>
    <b-container class="pt-5 pb-5" id="result">
        <p class="text-center th-block-title">Результат внедрения</p>
        <div class="row">
            <ul class="col-12 col-md-6 list-unstyled th-result-list">
                <li v-for="item in resultList" :key="item.id" class="th-result-item">
                    <p class="th-result-title" :class="item.img">{{item.label}}</p>
                </li>
            </ul>
            <span class="col-12 col-md-6 th-result-img"></span>
        </div>
    </b-container>
</template>

<script>
/* eslint-disable indent */

  export default {
    name: 'IntroductionResult',
    data () {
      return {
        resultList: [
          {
            img: 'th-chart',
            label: 'Рост прибыли бизнеса'
          },
          {
            img: 'th-heart',
            label: 'Повышение доверия к бренду'
          },
          {
            img: 'th-connection',
            label: 'Постоянная связь с клиентом'
          },
          {
            img: 'th-smile',
            label: 'Удовольствие от покупок'
          },
          {
            img: 'th-phone',
            label: 'Удобство в использовании'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
    .th-result-list {
        margin-top: 15px;
    }
    .th-result-item {
        margin: 40px 0;
    }
    .th-result-img {
        width: 588px;
        height: 465px;
        background: url("../assets/img/image-introduction.png") no-repeat;
        background-size: contain;
        display: inline-block;
    }
    .th-result-title {
        font-size: 1.5rem;
        font-weight: 400;
        padding-left: 68px;
        position: relative;
        &:before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            background-image: url("../assets/img/icon-sprite-introduction.png");
            background-repeat: no-repeat;
            background-size: cover;
            height: 40px;
            width: 36px;
            margin: auto;
        }
        &.th-heart:before {
            background-position: 0 26%;
        }
        &.th-connection:before {
            background-position: 0 50%;
        }
        &.th-smile:before {
            background-position: 0 75%;
        }
        &.th-phone:before {
            background-position: 0 100%;
        }
    }

    @media only screen and (max-width : 1200px) {
        .th-result-list {
            margin-top: 5px;
        }
        .th-result-item {
            margin: 30px 0;
        }
    }

    @media only screen and (max-width : 992px) {
        .th-result-list {
            margin-top: 10px;
        }
        .th-result-item {
            margin: 0 0 25px;
            .th-result-title {
                line-height: 1.2;
                font-size: 1.3rem;
                padding-left: 40px;
                &:before {
                    height: 30px;
                    width: 30px;
                }
            }
        }
    }
</style>
