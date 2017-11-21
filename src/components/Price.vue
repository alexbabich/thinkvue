<template>
    <b-container class="pt-5 pb-5" id="price">
        <p class="text-center th-block-title">Цена</p>
        <!--<b-table responsive bordered :items="items" :fields="fields" class="th-table text-center"></b-table>-->
        <table class="table text-center th-table">
            <thead>
                <tr>
                    <th></th>
                    <th v-for="title in tableHeader" :key="title.id">
                        <p class="th-price-title" :class="title.style">{{title.label}}</p>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in tableContent" :key="item.id">
                    <td>{{item.label}}</td>
                    <td v-for="status in item.stat" :key="status.id">
                        <span :class="status.status"></span>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th></th>
                    <th v-for="foot in tableFooter">
                        <div class="mt-3 th-price-additional">
                            <p class="th-price-description">{{foot.text1}}</p>
                            <p class="th-new-price">{{foot.newPrice}}</p>
                            <p class="th-old-price">{{foot.oldPrice}}<span>{{foot.oldPrice2}}</span></p>
                            <button class="mt-3 btn th-cmdBuy">Заказать</button>
                        </div>
                    </th>
                </tr>
            </tfoot>
        </table>
    </b-container>
</template>

<script>
  const tableHeader = [
    {
      style: 'standard',
      label: 'Standard'
    },
    {
      style: 'gold',
      label: 'Gold'
    },
    {
      style: 'premium',
      label: 'Premium'
    }
  ]
  const tableContent = [
    {
      label: 'Платформа IOS или Android',
      stat: [
        {
          status: 'th-check'
        },
        {
          status: 'th-check'
        },
        {
          status: 'th-check'
        }
      ]
    },
    {
      label: 'Платформы IOS и Android',
      stat: [
        {
          status: 'th-uncheck'
        },
        {
          status: 'th-check'
        },
        {
          status: 'th-check'
        }
      ]
    },
    {
      label: 'Синхронизация хранилища в реальном времени',
      stat: [
        {
          status: 'th-check'
        },
        {
          status: 'th-check'
        },
        {
          status: 'th-check'
        }
      ]
    },
    {
      label: 'Неограниченное количество продуктов',
      stat: [
        {
          status: 'th-check'
        },
        {
          status: 'th-check'
        },
        {
          status: 'th-check'
        }
      ]
    },
    {
      label: 'Отслеживание заказов',
      stat: [
        {
          status: 'th-check'
        },
        {
          status: 'th-check'
        },
        {
          status: 'th-check'
        }
      ]
    },
    {
      label: 'Поиск',
      stat: [
        {
          status: 'th-check'
        },
        {
          status: 'th-check'
        },
        {
          status: 'th-check'
        }
      ]
    },
    {
      label: 'Рекомендуемые товары',
      stat: [
        {
          status: 'th-check'
        },
        {
          status: 'th-check'
        },
        {
          status: 'th-check'
        }
      ]
    },
    {
      label: 'Индивидуальные категории',
      stat: [
        {
          status: 'th-check'
        },
        {
          status: 'th-check'
        },
        {
          status: 'th-check'
        }
      ]
    }
  ]
  const tableFooter = [
    {
      text1: 'Стоимость сейчас',
      newPrice: '1150 грн',
      oldPrice: 'Стоимость :',
      oldPrice2: ' 1840 грн'
    },
    {
      text1: 'Стоимость сейчас',
      newPrice: '2150 грн',
      oldPrice: 'Стоимость :',
      oldPrice2: ' 3840 грн'
    },
    {
      text1: 'Стоимость сейчас',
      newPrice: '2550 грн',
      oldPrice: 'Стоимость :',
      oldPrice2: ' 4140 грн'
    }
  ]

  export default {
    name: 'Price',
    data () {
      return {
        tableHeader: tableHeader,
        tableContent: tableContent,
        tableFooter: tableFooter
      }
    }
  }
</script>

<style lang="scss">
    .th-cmdBuy {
        min-width: 226px;
        height: 70px;
        font-size: 1.875rem;
        color: #fff;
        background: #57b1b3;
    }
    .th-price-additional {
        line-height: 1;
    }
    .th-price-title {
        font-size: 3.125rem;
        font-weight: 400;
        &.standart {
            color: #00cbb0;
        }
        &.gold {
            color: #a160c8;
        }
        &.premium {
            color: #019aff;
        }
    }
    .th-price-description {
        font-size: 1.125rem;
    }
    .th-new-price {
        color: #57b1b3;
        font-weight: bold;
        font-size: 1.875rem;
    }
    .th-old-price {
        font-size: 1.125rem;
        span {
            margin: 0 5px;
            text-decoration: line-through;
        }
    }
    .th-table {
        table-layout: fixed;
        thead {
            th {
                border-left: 1px solid #e9ecef;
                border-bottom: 0;
                &:first-child {
                    border-top: 0;
                    border-left: 0;
                }
                &:last-child {
                    border-right: 1px solid #e9ecef;
                }
            }
        }
        tbody {
            tr {
                td {
                    border-left: 1px solid #e9ecef;
                    min-width: 266px;
                    vertical-align: middle;
                    &:first-child {
                        min-width: 304px;
                    }
                    &:last-child {
                        border-right: 1px solid #e9ecef;
                    }
                }
            }
        }

        thead,
        tbody {
            th:nth-child(3),
            td:nth-child(3) {
                background-color: #ebf6f6;
            }
        }
        .th-check {
            background: url("../assets/img/icon-check.png") no-repeat;
            background-size: contain;
            height: 24px;
            width: 27px;
            display: inline-block;
        }
        .th-uncheck {
            display: block;
            width: 16px;
            height: 3px;
            background: #333;
            margin: auto;
        }
    }

    @media only screen and (max-width : 1200px) {
        .th-table {
            tbody tr {
                td {
                    min-width: 200px;
                    &:first-child {
                        min-width: 250px;
                    }
                }
            }
        }
        .th-price-title {
            font-size: 2.6rem;
            margin: 0;
        }
        .th-cmdBuy {
            min-width: 80%;
        }
    }

    @media only screen and (max-width : 992px) {
        .th-table {
            tbody tr {
                td {
                    min-width: 100% !important;
                }
            }
        }
        .th-price-title {
            font-size: 2rem;
        }
        .th-cmdBuy {
            min-width: 100%;
        }
    }

    @media only screen and (max-width : 767px) {
        .th-table {
            tbody tr {
                td {
                    font-size: 0.75rem;
                    min-width: 100%;
                    &:first-child {
                        min-width: 100%;
                    }
                }
            }
        }
        .th-price-title {
            font-size: 1.6rem;
        }
        .th-old-price {
            font-size: 1rem;
        }
        .th-cmdBuy {
            font-size: 1.2rem;
            height: 50px;
        }
        .th-new-price {
            font-size: 1.275rem;
        }
    }
    @media only screen and (max-width : 575px) {
        .th-price-title {
            font-size: 1.2rem;
        }
        .th-cmdBuy {
            font-size: 1rem;
            height: 40px;
        }
        .th-price-description,
        .th-old-price {
            font-size: 0.875rem;
        }
    }

    @media only screen and (min-device-width: 320px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
        .th-table {
            display: block;
            width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            -ms-overflow-style: -ms-autohiding-scrollbar;
        }
    }
</style>
