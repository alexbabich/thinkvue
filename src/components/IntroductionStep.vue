<template>
    <b-container class="pt-5 pb-5" id="application">
        <p class="text-center th-block-title">Как происходит внедрение?</p>
        <div class="row">
            <div v-for="step in stepList" :key="step.id" class="col-12 col-xl-6 mb-5">
                <p class="text-center th-step-title">{{step.title}}</p>
                <ul class="list-unstyled" :class="step.className">
                    <li v-for="steps in step.steps" :key="steps.id" :class="steps.img">
                        <p class="th-step-label">{{steps.label}}</p>
                    </li>
                </ul>
                <div class="th-step-price">
                    <span>{{step.text1}}</span>
                    <span>{{step.text2}}</span>
                </div>
            </div>
        </div>
    </b-container>
</template>

<script>
  const otherStep = [
    {
      img: 'th-idea',
      label: 'Идея'
    },
    {
      img: 'th-discause',
      label: 'Общение'
    },
    {
      img: 'th-design',
      label: 'Дизайн'
    },
    {
      img: 'th-tech',
      label: 'Исправление\nдизайна'
    },
    {
      img: 'th-programming',
      label: 'Разработка'
    },
    {
      img: 'th-connection',
      label: 'Внесение\nтоваров'
    },
    {
      img: 'th-exam',
      label: 'Тестирование/\nнастройка аналитики'
    },
    {
      img: 'th-tech2',
      label: 'Исправление\nошибок разработки'
    },
    {
      img: 'th-shopping',
      label: 'Отправление в\nPlay Market и App Store'
    }
  ]
  const ourStep = [
    {
      img: 'th-design',
      label: 'Настройка стиля приложения'
    },
    {
      img: 'th-connection',
      label: 'Внесение\nтоваров'
    },
    {
      img: 'th-exam',
      label: 'Тестирование/\nнастройка аналитики'
    },
    {
      img: 'th-shopping',
      label: 'Отправление в\nPlay Market и App Store'
    }
  ]
  export default {
    name: 'IntroductionStep',
    data () {
      return {
        stepList: [
          {
            className: 'th-our',
            title: 'У нас',
            text1: 'Цена: 99$ в месяц',
            text2: 'Сроки: 1 месяц',
            steps: ourStep
          },
          {
            className: 'th-other',
            title: 'У других',
            text1: 'Цена: от 5000$',
            text2: 'Сроки: от 4 месяцев',
            steps: otherStep
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
    .th-step-price {
        width: 100%;
        font-weight: 700;
        font-size: 1.375rem;
        line-height: 1.2;
        text-align: center;
        margin-bottom: 5px;
        margin-top: 130px;
        span {
            display: block;
        }
    }
    .th-other {
        background: url("../assets/img/line-2.png") no-repeat;
        height: 1260px;
    }
    .th-our {
        background: url("../assets/img/line.png") no-repeat;
        height: 570px;
    }
    .th-step-label {
        text-align: center;
        font-size: 1.375rem;
        line-height: 1;
        font-weight: 300;
        width: 175px;
        padding-top: 75px;
        position: relative;
        background: #fff;
        border-radius: 20px;
        &:before {
            content: '';
            position: absolute;
            background-position: center !important;
            background-size: contain;
            height: 70px;
            width: 80px;
            top: 0;
            margin: auto;
            left: 0;
            right: 0;
        }
    }

    .th-our,
    .th-other {
        position: relative;
        background-size: 100% 100%;
        li {
            width: 100%;
            clear: both;
            &:nth-child(odd) {
                text-align: left;
                margin-top: 20px;
                .th-step-label {
                    float: left;
                }
            }
            &:nth-child(even) {
                text-align: right;
                .th-step-label {
                    float: right;
                }
            }
            &:first-child {
                position: relative;
                top: -100px;
                left: 0;
            }
        }
        .th-design {
            .th-step-label:before {
                background: url("../assets/img/icon-design.png") no-repeat;
            }
        }
        .th-connection {
            .th-step-label:before {
                background: url("../assets/img/icon-connection.png") no-repeat;
            }
        }
        .th-exam {
            .th-step-label:before {
                background: url("../assets/img/icon-exam.png") no-repeat;
            }
        }
        .th-shopping {
            .th-step-label:before {
                background: url("../assets/img/icon-shopping.png") no-repeat;
            }
        }
        .th-idea {
            .th-step-label:before {
                background: url("../assets/img/icon-idea.png") no-repeat;
            }
        }
        .th-discause {
            .th-step-label:before {
                background: url("../assets/img/icon-discause.png") no-repeat;
            }
        }
        .th-tech,
        .th-tech2 {
            .th-step-label:before {
                background: url("../assets/img/icon-tech.png") no-repeat;
            }
        }
        .th-programming {
            .th-step-label:before {
                background: url("../assets/img/icon-programming.png") no-repeat;
            }
        }
    }

    .th-other {
        .th-idea {
            .th-step-label {
                top: 45px;
                width: 100px;
            }
        }
        .th-discause {
            .th-step-label {
                top: 10px;
                right: 23px;
                width: 122px;
                padding-bottom: 10px;
            }
        }
        .th-design {
            .th-step-label {
                margin-top: 74px;
                left: 20px;
                width: 102px;
            }
        }
        .th-tech,
        .th-tech2 {
            .th-step-label {
                margin-top: 48px;
                padding-bottom: 10px;
                width: 145px;
                right: -46px;
            }
        }
        .th-programming {
            .th-step-label {
                top: 48px;
                padding-bottom: 10px;
                width: 125px;
                left: -30px;
            }
        }
        .th-connection {
            .th-step-label {
                top: 50px;
                left: -50px;
                width: 106px;
            }
        }
        .th-exam {
            .th-step-label {
                width: 235px;
                top: 41px;
                padding-right: 10px;
                left: -49px;
            }
        }
        .th-shopping {
            .th-step-label {
                top: -40px;
                left: -30px;
            }
        }
    }

    .th-our {
        .th-design {
            .th-step-label {
                top: 45px;
            }
        }
        .th-connection {
            .th-step-label {
                left: 45px;
                top: -67px;
                width: 120px;
                padding-left: 10px;
                padding-right: 10px;
                text-align: center;
            }
        }
        .th-exam {
            .th-step-label {
                bottom: -43px;
                padding-bottom: 5px;
                left: -44px;
            }
        }
        .th-shopping {
            .th-step-label {
                bottom: -65px;
                right: -44px;
            }
        }
    }

    .th-step-title {
        font-size: 1.375rem;
        font-weight: 700;
        margin-bottom: 60px ;
    }
    .th-step-list {

    }

    @media only screen and (max-width : 1200px) {
        .th-our .th-connection .th-step-label {
            left: 60px;
        }
        .th-other .th-connection .th-step-label {
            left: -120px;
        }
    }

    @media only screen and (max-width : 768px) {
        .th-other .th-connection .th-step-label {
            left: -24px;
            top: 65px;
        }
    }

    @media only screen and (max-width : 576px) {
        .th-step-label {
            font-size: 0.875rem;
            line-height: 1.2;
        }
        .th-other {
            .th-discause {
                .th-step-label {
                    top: 20px;
                    right: -20px;
                }
            }
            .th-design {
                .th-step-label {
                    margin-top: 90px;
                    padding-bottom: 10px;
                    left: -13px;
                    width: 80px;
                }
            }
            .th-exam {
                .th-step-label {
                    top: 90px;
                    width: 160px;
                    left: -21px;
                }
            }
            .th-shopping {
                .th-step-label {
                    top: -40px;
                    left: -30px;
                }
            }
            .th-tech2 {
                .th-step-label {
                    margin-top: 105px;
                    right: -20px;
                }
            }
        }

        .th-our {
            .th-connection {
                .th-step-label {
                    left: 37px;
                }
            }
            .th-exam {
                .th-step-label {
                    left: -36px;
                    top: 100px;
                }
            }
            .th-shopping {
                .th-step-label {
                    bottom: -135px;
                }
            }
        }
    }
    @media only screen and (min-device-width: 320px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
        .th-our .th-exam .th-step-label {
            left: -20px;
            top: 90px;
        }
        .th-our .th-shopping .th-step-label {
            right: -20px;
        }
        .th-our .th-connection .th-step-label {
            left: 27px;
            top: -44px;
        }
        .th-other .th-tech .th-step-label,
        .th-other .th-tech2 .th-step-label {
            right: -26px;
        }
    }

    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait){
        .th-other .th-connection .th-step-label {
            left: -124px;
        }
    }
</style>
