<template>
    <b-container class="pt-5 pb-5" id="price">
        <b-table responsive bordered :items="items" :fields="fields" class="th-table text-center"></b-table>
        <!--<table>-->
            <!--<tr>-->
                <!--<td>-->
                    <!--<div class="">1</div>-->
                <!--</td>-->
                <!--<td>-->
                    <!--<div class="">2</div>-->
                <!--</td>-->
                <!--<td>-->
                    <!--<div class="">3</div>-->
                <!--</td>-->
            <!--</tr>-->
            <!--<tr>-->
                <!--<td>-->
                    <!--<div class="">21</div>-->
                <!--</td>-->
                <!--<td>-->
                    <!--<div class="">22</div>-->
                <!--</td>-->
                <!--<td>-->
                    <!--<div class="">23</div>-->
                <!--</td>-->
            <!--</tr>-->
            <!--<tr>-->
                <!--<td>-->
                    <!--<div class="">31</div>-->
                <!--</td>-->
                <!--<td>-->
                    <!--<div class="">32</div>-->
                <!--</td>-->
                <!--<td>-->
                    <!--<div class="">33</div>-->
                <!--</td>-->
            <!--</tr>-->
        <!--</table>-->
    </b-container>
</template>

<script>
  const items = [
    {
      isActive: 'Платформа IOS или Android',
      standard: true,
      gold: true,
      premium: true,
      _cellVariants: {
        gold: 'best-choose',
        premium: 'th-inner-table',
        standard: 'th-inner-table'
      }
    },
    {
      isActive: 'Платформы IOS и Android',
      standard: true,
      gold: true,
      premium: true,
      _cellVariants: {
        gold: 'best-choose',
        premium: 'th-inner-table',
        standard: 'th-inner-table'
      }
    },
    {
      isActive: 'Синхронизация хранилища в реальном времени',
      standard: true,
      gold: true,
      premium: true,
      _cellVariants: {
        gold: 'best-choose',
        premium: 'th-inner-table',
        standard: 'th-inner-table'
      }
    },
    {
      isActive: 'Неограниченное количество продуктов',
      standard: true,
      gold: true,
      premium: true,
      _cellVariants: {
        gold: 'best-choose',
        premium: 'th-inner-table',
        standard: 'th-inner-table'
      }
    },
    {
      isActive: 'Плата за транзакцию - 0,0%',
      standard: true,
      gold: true,
      premium: true,
      _cellVariants: {
        gold: 'best-choose',
        premium: 'th-inner-table',
        standard: 'th-inner-table'
      }
    },
    { isActive: 'Отслеживание заказов',
      standard: true,
      gold: true,
      premium: true,
      _cellVariants: {
        gold: 'best-choose',
        premium: 'th-inner-table',
        standard: 'th-inner-table'
      }
    },
    {
      isActive: 'Поиск',
      standard: true,
      gold: true,
      premium: true,
      _cellVariants: {
        gold: 'best-choose',
        premium: 'th-inner-table',
        standard: 'th-inner-table'
      }
    },
    {
      isActive: 'Рекомендуемые товары',
      standard: true,
      gold: true,
      premium: true,
      _cellVariants: {
        gold: 'best-choose',
        premium: 'th-inner-table',
        standard: 'th-inner-table'
      }
    },
    {
      isActive: 'Индивидуальные категории',
      standard: true,
      gold: true,
      premium: true,
      _cellVariants: {
        gold: 'best-choose',
        premium: 'th-inner-table',
        standard: 'th-inner-table'
      }
    }
  ]
  const fields = [
    {
      key: 'isActive',
      label: ' '
    },
    {
      key: 'standard',
      label: 'Standard',
      formatter: (value) => { return value ? '-' : '+' }
    },
    {
      key: 'gold',
      label: 'Gold',
      variant: 'best-choose',
      formatter: (value) => { return value ? '-' : '+' }
    },
    {
      key: 'premium',
      label: 'Premium',
      formatter: (value) => { return value ? '-' : '+' }
    }
  ]
  export default {
    name: 'Price',
    data () {
      return {
        fields: fields,
        items: items
      }
    }
  }
</script>

<style lang="scss" scoped>
    .th-testimonial-photo {
        height: 131px;
        width: 131px;
        border: 4px solid #fff;
        border-radius: 50%;
        box-shadow: 5px 5px 29px 2px #f0f0f0;
    }

    .th-table {
        tr {
            td {
                min-width: 266px;
                vertical-align: middle;
            }
            td:first-child {
                min-width: 304px;
            }
        }
    }

    .table-best-choose {
        background-color: #ebf6f6;
    }
</style>
