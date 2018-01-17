<template>
    <div class="th-demoApp">
        <b-container>
            <form id="form" @submit.prevent="addApp">
                <div class="row">
                    <p class="col-12">Система управления</p>
                    <ul class="list-unstyled col-12">
                        <li>
                            <label for="th-systemPoster">Poster</label>
                            <input type="radio" id="th-systemPoster" value="Poster" v-model="newApp.system.system">
                        </li>
                        <li>
                            <label for="th-systemShopify">Shopify</label>
                            <input type="radio" id="th-systemShopify" value="Shopify" v-model="newApp.system.system">
                        </li>
                    </ul>
                    <div class="form-group col-12">
                        <label for="th-userDomen">Domen</label>
                        <input type="text" id="th-userDomen" class="form-control" v-model="newApp.system.domen" />
                    </div>
                    <div class="form-group col-12">
                        <label for="th-userToken">Token</label>
                        <input type="text" id="th-userToken" class="form-control" v-model="newApp.system.token" />
                    </div>
                </div>
                <div class="row">
                    <p class="col-12">Информация о заведении</p>
                    <div class="form-group col-12">
                        <label for="th-userPhone">Телефон:</label>
                        <input type="text" id="th-userPhone" class="form-control" v-model="newApp.aboutUs.phone" />
                    </div>
                    <div class="form-group col-12">
                        <label for="th-userAddress">Адресс:</label>
                        <input type="text" id="th-userAddress" class="form-control" v-model="newApp.aboutUs.address" />
                    </div>
                    <div class="form-group col-12">
                        <label for="th-userEmail">Введите e-mail:</label>
                        <input type="text" id="th-userEmail" class="form-control" v-model="newApp.aboutUs.email" />
                    </div>
                </div>
                <div class="row">
                    <p class="col-12">Дополнительные возможности</p>
                    <ul class="list-unstyled col-12">
                        <li>
                            <input class="th-checkbox" type="checkbox" id="checkbox1" v-model="newApp.settings.wishList" />
                            <label for="checkbox1">Wish list</label>
                        </li>
                        <li>
                            <input class="th-checkbox" type="checkbox" id="checkbox2" v-model="newApp.settings.card" />
                            <label for="checkbox2">Оплата картой</label>
                        </li>
                        <li>
                            <input class="th-checkbox" type="checkbox" id="checkbox3" v-model="newApp.settings.oderList" />
                            <label for="checkbox3">Лист заказов</label>
                        </li>
                        <li>
                            <input class="th-checkbox" type="checkbox" id="checkbox4" v-model="newApp.settings.search" />
                            <label for="checkbox4">Поиск</label>
                        </li>
                        <li>
                            <input class="th-checkbox" type="checkbox" id="checkbox5" v-model="newApp.settings.filter" />
                            <label for="checkbox5">Фильтры</label>
                        </li>
                    </ul>
                </div>
                <button class="btn btn-primary th-cmdBuy" v-b-modal.modal1 type="submit">Заказать</button>
            </form>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>address</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>card</th>
                    <th>key</th>
                    <th>Remove</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(app, key) in appInfo" :key="app.id">
                    <td>{{app.aboutUs.address}}</td>
                    <td>{{app.aboutUs.email}}</td>
                    <td>{{app.aboutUs.phone}}</td>
                    <td>{{app.settings.card}}</td>
                    <td>{{app['.key']}}</td>
                    <td>
                        <span class="glyphicon glyphicon-trash" aria-hidden="true" @click="removeApp(app)">---</span>
                    </td>
                </tr>
                </tbody>
            </table>
        </b-container>
        <modal-window-demo :formTitle="newKey" />
    </div>
</template>

<script>
import ModalWindowDemo from '@/components/ModalWindowDemo'
import {db, appRef} from '@/firebase'
import moment from 'moment'

let newKey = ''

export default {
  name: 'Demo',
  methods: {
    addApp: function () {
      newKey = moment().format('X')
      db.ref(`/StoreInfo/${newKey}`).set({
        aboutUs: {
          address: this.newApp.aboutUs.address,
          email: this.newApp.aboutUs.email,
          phone: this.newApp.aboutUs.phone
        },
        colorScheme: {
          auxiliaryСolor: '',
          mainСolor: ''
        },
        settings: {
          card: this.newApp.settings.card,
          filter: this.newApp.settings.filter,
          oderList: this.newApp.settings.oderList,
          search: this.newApp.settings.search,
          wishList: this.newApp.settings.wishList
        },
        system: {
          domen: this.newApp.system.domen,
          system: this.newApp.system.system,
          token: this.newApp.system.token
        }
      })
    },
    removeApp: function (app) {
      appRef.child(app['.key']).remove()
    }
  },
  components: {
    ModalWindowDemo
  },
  data () {
    return {
      formSendMessage: moment().format('X'),
      appInfo: {},
      newApp: {
        aboutUs: {
          address: '',
          email: '',
          phone: ''
        },
        colorScheme: {
          auxiliaryСolor: '',
          mainСolor: ''
        },
        settings: {
          card: false,
          filter: false,
          oderList: false,
          search: false,
          wishList: false
        },
        system: {
          domen: '',
          system: '',
          token: ''
        }
      }
    }
  },
  firebase: {
    appInfo: {
      source: appRef,
      // Optional, allows you to handle any errors.
      cancelCallback (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .th-demoApp {
        background: #f8f8f8;
    }

    .th-cmdBuy {
        min-width: 226px;
        height: 70px;
        font-size: 1.875rem;
        color: #fff;
        background: #57b1b3;
        cursor: pointer;
    }

</style>
