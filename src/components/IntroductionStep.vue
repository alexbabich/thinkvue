<template>
    <b-container class="pt-5 pb-5">
        <p class="text-center th-block-title">Как происходит внедрение?</p>
        <div class="row">
            <div v-for="step in stepList" :key="step.id" class="col-12 col-xl-6 mb-5 th-steps-wrapper">
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
/* eslint-disable indent */

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
        margin-top: 179px;
        margin-bottom: 100px;
        span {
            display: block;
        }
    }
    .th-other {
        background: url("../assets/img/line-2.png") no-repeat;
        height: 965px;
    }
    .th-our {
        background: url("../assets/img/line.png") no-repeat;
        height: 415px;
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
        height: 0;
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
        width: 80%;
        padding: 0 10px;
        margin: auto;
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
        &:before {
            content: "";
            position: absolute;
            left: -70px;
            top: 10px;
            width: 2px;
            background-color: #57b1b3;
            height: 118%;
        }
        .th-idea {
            .th-step-label {
                top: 50px;
                width: 100px;
            }
        }
        .th-discause {
            .th-step-label {
                top: -5px;
                right: 10px;
                width: 110px;
                padding-bottom: 10px;
                height: auto;
            }
        }
        .th-design {
            .th-step-label {
                margin-top: 20px;
                width: 90px;
                height: auto;
            }
        }
        .th-tech,
        .th-tech2 {
            .th-step-label {
                margin-top: 20px;
                width: 145px;
                right: -46px;
                height: auto;
            }
        }
        .th-tech2 {
            .th-step-label {
                margin-top: 0;
                top: -40px;
            }
        }
        .th-programming {
            .th-step-label {
                padding-bottom: 10px;
                width: 125px;
                left: -30px;
                height: auto;
            }
        }
        .th-connection {
            .th-step-label {
                top: -15px;
                left: -35px;
                width: 106px;
                height: auto;
            }
        }
        .th-exam {
            .th-step-label {
                width: 235px;
                padding-right: 10px;
                left: -60px;
                top: -40px;
                height: auto;
                &:before {
                    background-color: #fff;
                    width: 55px;
                }
            }
        }
        .th-shopping {
            .th-step-label {
                top: -130px;
                left: -50px;
                background: transparent;
                &:before {
                    background-color: #fff;
                    width: 60px;
                }
            }
        }
    }

    .th-our {
        width: 65%;
        .th-design {
            .th-step-label {
                top: 50px;
                left: -100px;
                background: transparent;
                width: 200px;
                &:before {
                    background-color: #fff;
                }
            }
        }
        .th-connection {
            .th-step-label {
                left: 70px;
                top: -32px;
                width: 120px;
                padding-left: 10px;
                padding-right: 10px;
                text-align: center;
                height: auto;
            }
        }
        .th-exam {
            .th-step-label {
                top: 5px;
                padding-bottom: 5px;
                left: -120px;
                width: 250px;
                height: auto;
            }
        }
        .th-shopping {
            .th-step-label {
                right: -90px;
                background: transparent;
                &:before {
                    background-color: #fff;
                }
            }
        }
    }

    .th-step-title {
        font-size: 1.375rem;
        font-weight: 700;
        margin-bottom: 60px ;
    }

    @media only screen and (max-width : 1300px) {
        .th-our .th-design .th-step-label {
            width: 200px;
            left: -18%;
        }
    }

    @media only screen and (max-width : 1200px) {
        .th-our {
            width: 55%;
            .th-design .th-step-label {
                left: -70px;
            }
            .th-connection .th-step-label {
                left: 45px;
            }
        }
        .th-other {
            width: 70%;
            &:before {
                display: none;
            }
            .th-connection .th-step-label {
                left: -50px;
                top: -10px;
            }
            .th-tech .th-step-label,
            .th-tech2 .th-step-label {
                margin-top: 10px;
                right: -70px;
            }
            .th-tech2 .th-step-label {
                top: -78px;
            }
        }

        .th-steps-wrapper {
            margin-bottom: 60px;
        }

    }

    @media only screen and (max-width : 960px) {

    }

    @media only screen and (max-width : 767px) {
        .th-other .th-connection .th-step-label {
            left: 10px;
        }
        .th-our {
            width: 70%;
        }

        .th-other {
            width: 85%;
        }
    }

    @media only screen and (max-width : 575px) {
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
                    margin-top: 20px;
                    padding-bottom: 10px;
                    left: -13px;
                    width: 80px;
                }
            }
            .th-exam {
                .th-step-label {
                    top: 0;
                    width: 155px;
                    left: -60px;
                }
            }
            .th-shopping {
                .th-step-label {
                    top: -50px;
                    left: -70px;
                }
            }
            .th-programming {
                .th-step-label {
                    top: 29px;
                    width: 85px;
                }
            }
            .th-connection {
                .th-step-label {
                    top: 15px;
                    width: 80px;
                    left: -15px;
                }
            }
            .th-tech .th-step-label,
            .th-tech2 .th-step-label {
                top: 10px;
                width: 96px;
                right: -60px;
            }
            .th-tech2 {
                .th-step-label {
                    margin-top: 0;
                    right: -20px;
                    top: -30px;
                }
            }
        }

        .th-our {
            .th-connection {
                .th-step-label {
                    top: -55px;
                    padding-bottom: 5px;
                    left: 58px;
                    width: 83px;
                }
            }
            .th-exam {
                .th-step-label {
                    left: -65px;
                    top: 13px;
                    width: 145px;
                }
            }
            .th-shopping {
                .th-step-label {
                    top: 20px;
                    right: -75px;
                }
            }
        }

        .th-step-price {
            margin-top: 125px;
            margin-bottom: 70px;
        }
    }
    @media only screen and (min-device-width: 320px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
        .th-our .th-exam .th-step-label {
            left: -60px;
            top: 0;
        }
        .th-our .th-shopping .th-step-label {
            right: -70px;
            width: 140px;
        }
        .th-our .th-connection .th-step-label {
            width: 80px;
            padding-left: 0;
            padding-right: 0;
            top: -30px;
        }
        .th-other .th-tech .th-step-label,
        .th-other .th-tech2 .th-step-label {
            right: -26px;
        }

        .th-other .th-idea .th-step-label {
            top: 61px;
            left: -48px;
            width: 80px;
        }

        .th-other .th-discause .th-step-label {
            top: -10px;
            right: -40px;
        }

        .th-other .th-design .th-step-label {
            left: -31px;
        }

        .th-other .th-connection .th-step-label {
            left: 30px;
        }
    }

    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait){
        .th-other .th-connection .th-step-label {
            left: -40px;
        }
    }

</style>
