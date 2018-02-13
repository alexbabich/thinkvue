<template>
    <div class="th-demo-app">
        <b-container>
            <form id="form" @submit.prevent="submitre">
                <div class="row">
                    <h2 class="col-12">Цветовая палитра</h2>
                    <p class="col-12" :class="{ 'error': errors.has('radio_group_1') }">Выберите одну из цветовых палитр Вашего приложения</p>
                    <span class="col-12 is-danger" v-show="errors.has('radio_group_1')">Обязательно укажите одну из предложенных цветовых палитр</span>
                    <div class="th-color-map" :class="auxiliaryColor">
                        <div class="th-single-color th-view-first"></div>
                        <div class="th-single-color th-view-second"></div>
                        <div class="th-single-color th-view-third"></div>
                    </div>
                    <ul class="list-unstyled col-12 th-color-theme">
                        <li>
                            <input name="radio_group_1" v-validate="'required'" type="radio" id="th-1" value="th-1" class="th-radio-button" v-model="auxiliaryColor">
                            <label for="th-1" class="th-1">1</label>
                        </li>
                        <li>
                            <input name="radio_group_1" v-validate="'required'" type="radio" id="th-2" value="th-2" class="th-radio-button" v-model="auxiliaryColor">
                            <label for="th-2" class="th-2">2</label>
                        </li>
                        <li>
                            <input name="radio_group_1" v-validate="'required'" type="radio" id="th-3" value="th-3" class="th-radio-button" v-model="auxiliaryColor">
                            <label for="th-3" class="th-3">3</label>
                        </li>
                        <li>
                            <input name="radio_group_1" v-validate="'required'" type="radio" id="th-4" value="th-4" class="th-radio-button" v-model="auxiliaryColor">
                            <label for="th-4" class="th-4">4</label>
                        </li>
                        <li>
                            <input name="radio_group_1" v-validate="'required'" type="radio" id="th-5" value="th-5" class="th-radio-button" v-model="auxiliaryColor">
                            <label for="th-5" class="th-5">5</label>
                        </li>
                        <li>
                            <input name="radio_group_1" v-validate="'required'" type="radio" id="th-6" value="th-6" class="th-radio-button" v-model="auxiliaryColor">
                            <label for="th-6" class="th-6">6</label>
                        </li>
                    </ul>
                    <h2 class="col-12">Система управления</h2>
                    <ul class="list-unstyled col-12 th-system-list">
                        <li>
                            <input type="radio" id="th-systemPoster" value="Poster" v-model="system" checked>
                            <label for="th-systemPoster"><img src="../../assets/img/icon-poster.png" /></label>
                        </li>
                    </ul>
                    <h2 class="col-12">Звездочкой отмечены обязательные поля для заполнения</h2>
                    <div class="form-group col-12 col-md-6 required">
                        <label for="th-userDomen">Domen</label>
                        <p :class="{ 'control': true }">
                            <input id="th-userDomen" class="form-control" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('domen') }" name="domen" type="text" placeholder="Введите домен" v-model="domen" />
                            <i class="fa fa-info-circle" aria-hidden="true"><span class="th-tooltip">Domen - первое слово в ссылке на админ панель Joinposter (например, доменом для ссылки https://shifu.joinposter.com/api/auth/login является - shifu)</span></i>
                            <span v-show="errors.has('domen')" class="is-danger">Укажите Ваш домен</span>
                        </p>
                    </div>
                    <div class="form-group col-12 col-md-6 required">
                        <label for="th-userToken">Token</label>
                        <p :class="{ 'control': true }">
                            <input id="th-userToken" class="form-control" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('token') }" name="token" type="text" placeholder="Введите адрес" v-model="token" />
                            <i class="fa fa-info-circle" aria-hidden="true"><span class="th-tooltip">Token - находится в Poster/Доступ/Итеграции/Личная интеграция (например - cd11f969e95959595n89005e8bb4a093)</span></i>
                            <span v-show="errors.has('token ')" class="is-danger">Укажите токен</span>
                        </p>
                    </div>
                    <h2 class="col-12">Информация о заведении</h2>
                    <div class="form-group col-12 col-md-6 required">
                        <label for="th-userPhone">Телефон</label>
                        <p :class="{ 'control': true }">
                            <input id="th-userPhone" class="form-control" v-validate="'required|numeric|min:10'" :class="{'input': true, 'is-danger': errors.has('phone') }" name="phone" type="text" placeholder="Например 0961111111" v-model="phone" />
                            <span v-show="errors.has('phone')" class="is-danger">Укажите Ваш номер телефона</span>
                        </p>
                    </div>
                    <div class="form-group col-12 col-md-6 required">
                        <label for="th-userAddress">Адрес:</label>
                        <p :class="{ 'control': true }">
                            <input id="th-userAddress" class="form-control" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('address') }" name="address" type="text" placeholder="Введите адрес" v-model="address" />
                            <span v-show="errors.has('address')" class="is-danger">Укажите Ваш адрес</span>
                        </p>
                    </div>
                    <div class="form-group col-12 col-md-6 required">
                        <label for="th-userEmail">Введите e-mail</label>
                        <p :class="{ 'control': true }">
                            <input id="th-userEmail" class="form-control" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" placeholder="Введите e-mail" v-model="email" />
                            <span v-show="errors.has('email')" class="is-danger">Укажите Ваш email</span>
                        </p>
                    </div>
                    <h2 class="col-12">Дополнительные возможности</h2>
                    <p class="col-12">Можете указать дополнительные функции в Вашем приложении</p>
                    <ul class="list-unstyled col-12 th-more-service">
                        <li>
                            <input class="th-checkbox" type="checkbox" id="checkbox1" v-model="wishList" />
                            <label for="checkbox1">Wish list</label>
                            <i class="fa fa-info-circle" aria-hidden="true"><span class="th-tooltip"></span></i>
                        </li>
                        <li>
                            <input class="th-checkbox" type="checkbox" id="checkbox2" v-model="card" />
                            <label for="checkbox2">Оплата картой</label>
                            <i class="fa fa-info-circle" aria-hidden="true"><span class="th-tooltip"></span></i>
                        </li>
                        <li>
                            <input class="th-checkbox" type="checkbox" id="checkbox3" v-model="orderList" />
                            <label for="checkbox3">Лист заказов</label>
                            <i class="fa fa-info-circle" aria-hidden="true"><span class="th-tooltip"></span></i>
                        </li>
                        <li>
                            <input class="th-checkbox" type="checkbox" id="checkbox4" v-model="search" />
                            <label for="checkbox4">Поиск</label>
                            <i class="fa fa-info-circle" aria-hidden="true"><span class="th-tooltip"></span></i>
                        </li>
                        <li>
                            <input class="th-checkbox" type="checkbox" id="checkbox5" v-model="filter" />
                            <label for="checkbox5">Фильтры</label>
                            <i class="fa fa-info-circle" aria-hidden="true"><span class="th-tooltip"></span></i>
                        </li>
                    </ul>
                </div>
                <button class="btn th-cmd-buy" v-b-modal.modal1 type="submit">Создать</button>
            </form>
            <modal-window-demo :formClass="newKey" />
        </b-container>
    </div>
</template>

<script>
import ModalWindowDemo from '@/components/ModalWindowDemo'
import {db, appRef} from '@/firebase'
import moment from 'moment'
import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

export default {
  name: 'Demo',
  data () {
    return {
      formClass: '',
      newKey: '',
      formSendMessage: moment().format('X'),
      appInfo: {},
      address: '',
      email: '',
      phone: '',
      auxiliaryColor: 'th-1',
      mainColor: '',
      card: false,
      filter: false,
      orderList: false,
      search: false,
      wishList: false,
      domen: '',
      system: 'Poster',
      token: ''
    }
  },
  components: {
    ModalWindowDemo
  },
  vuelidation: {
    data: {
      address: {
        required: true
      },
      email: {
        required: true
      },
      phone: {
        required: true
      },
      domen: {
        required: true
      },
      system: {
        required: true
      },
      token: {
        required: true
      }
    }
  },
  methods: {
//    phoneValidator: function () {
//      let phoneno = /^((\+380)+([0-9]){9})$/
//      if (this.phone.match(phoneno)) {
//        console.log('true')
//      } else {
//        console.log('false')
//      }
//    },
    submitre: function () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line

          this.newKey = moment().format('X')
          console.log(this.newKey)
          db.ref(`/StoreInfo/${this.newKey}/Design`).set({
            aboutUs: {
              address: this.address,
              email: this.email,
              phone: this.phone
            },
            colorScheme: {
              auxiliaryColor: this.auxiliaryСolor,
              mainColor: ''
            },
            settings: {
              card: this.card,
              filter: this.filter,
              orderList: this.orderList,
              search: this.search,
              wishList: this.wishList
            },
            system: {
              domen: this.domen,
              system: this.system,
              token: this.token
            }
          })
        }
      })
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

<style lang="scss">
    @import '../../assets/css/font-awesome.min.css';
    @import '../../assets/css/fonts.css';

    button:disabled {
        pointer-events: none;
    }

    .modal-header {
        padding: 5px 10px !important;
    }

    .close {
        cursor: pointer;
    }

    h2 {
        margin: 40px auto 20px;
    }

    label {
        color: #7f8fa4;
    }

    input {
        max-width: 280px;
    }

    .required {
        position: relative;

        label::after {
            content: '*';
            display: inline-block;
            color: red;
        }
    }

    p.required {

        &::after {
            content: '*';
            display: inline-block;
            color: red;
        }
    }

    .is-danger {
        color: red;
        font-size: 16px;
        font-weight: bold;
    }

    .th-color-map {
        width: 96%;
        margin: auto;
        text-align: center;

        &.th-1 {
            .th-single-color.th-view-first {
                &::after {
                    background: url("../../assets/img/1_1.png") no-repeat;
                    background-size: contain;
                }
            }
            .th-single-color.th-view-second {
                &::after {
                    background: url("../../assets/img/1_2.png") no-repeat;
                    background-size: contain;
                }
            }
            .th-single-color.th-view-third {
                &::after {
                    background: url("../../assets/img/1_3.png") no-repeat;
                    background-size: contain;
                }
            }
        }

        &.th-2 {
            .th-single-color.th-view-first {
                &::after {
                    background: url("../../assets/img/2_1.png") no-repeat;
                    background-size: contain;
                }
            }
            .th-single-color.th-view-second {
                &::after {
                    background: url("../../assets/img/2_2.png") no-repeat;
                    background-size: contain;
                }
            }
            .th-single-color.th-view-third {
                &::after {
                    background: url("../../assets/img/2_3.png") no-repeat;
                    background-size: contain;
                }
            }
        }

        &.th-3 {
            .th-single-color.th-view-first {
                &::after {
                    background: url("../../assets/img/3_1.png") no-repeat;
                    background-size: contain;
                }
            }
            .th-single-color.th-view-second {
                &::after {
                    background: url("../../assets/img/3_2.png") no-repeat;
                    background-size: contain;
                }
            }
            .th-single-color.th-view-third {
                &::after {
                    background: url("../../assets/img/3_3.png") no-repeat;
                    background-size: contain;
                }
            }
        }

        &.th-4 {
            .th-single-color.th-view-first {
                &::after {
                    background: url("../../assets/img/4_1.png") no-repeat;
                    background-size: contain;
                }
            }
            .th-single-color.th-view-second {
                &::after {
                    background: url("../../assets/img/4_2.png") no-repeat;
                    background-size: contain;
                }
            }
            .th-single-color.th-view-third {
                &::after {
                    background: url("../../assets/img/4_3.png") no-repeat;
                    background-size: contain;
                }
            }
        }

        &.th-5 {
            .th-single-color.th-view-first {
                &::after {
                    background: url("../../assets/img/5_1.png") no-repeat;
                    background-size: contain;
                }
            }
            .th-single-color.th-view-second {
                &::after {
                    background: url("../../assets/img/5_2.png") no-repeat;
                    background-size: contain;
                }
            }
            .th-single-color.th-view-third {
                &::after {
                    background: url("../../assets/img/5_3.png") no-repeat;
                    background-size: contain;
                }
            }
        }

        &.th-6 {
            .th-single-color.th-view-first {
                &::after {
                    background: url("../../assets/img/6_1.png") no-repeat;
                    background-size: contain;
                }
            }
            .th-single-color.th-view-second {
                &::after {
                    background: url("../../assets/img/6_2.png") no-repeat;
                    background-size: contain;
                }
            }
            .th-single-color.th-view-third {
                &::after {
                    background: url("../../assets/img/6_3.png") no-repeat;
                    background-size: contain;
                }
            }
        }
    }

    .th-single-color {
        position: relative;
        width: 360px;
        height: 726px;
        display: inline-block;

        &::after,
        &::before {
            content: '';
            position: absolute;
        }
        
        &::before {
            background: url("../../assets/img/mocup.png") no-repeat;
            background-size: contain;
            width: 360px;
            height: 726px;
            z-index: 2;
            left: 0;
        }

        &::after {
            background-size: contain !important;
            height: 688px;
            width: 316px;
            top: 20px;
            left: 22px;
            z-index: 1;
        }

        &.th-view-first {
            z-index: 5;
            left: 37px;

            &::after {
                background: url("../../assets/img/1_1.png") no-repeat;
            }
        }

        &.th-view-second {
            z-index: 4;

            &::after {
                background: url("../../assets/img/1_2.png") no-repeat;
            }
        }

        &.th-view-third {
            z-index: 3;
            left: -37px;

            &::after {
                background: url("../../assets/img/1_3.png") no-repeat;
            }
        }
    }

    .th-demo-app {
        background: #f8f8f8;
        padding: 50px 0;
    }

    .th-cmd-buy {
        min-width: 236px;
        height: 45px;
        font-size: 1.275rem;
        color: #fff;
        background: #57b1b3;
        cursor: pointer;
    }

    .fa {
        font-size: 18px;
        display: inline-block;
        vertical-align: top;
        height: 16px;
        width: 16px;
        color: #c5d0de;
        margin-top: 4px;
        margin-left: 3px;
        cursor: pointer;
        position: relative;
    }

    .th-tooltip {
        display: none;
        height: 250px;
        width: 250px;
        position: absolute;
        top: -125px;
        left: 40px;
        z-index: 3;
    }

    #th-userDomen + .fa:hover > .th-tooltip,
    #th-userToken + .fa:hover > .th-tooltip,
    .th-more-service .fa:hover .th-tooltip {
        display: block;
    }

    #th-userDomen,
    #th-userToken {
        display: inline-block;

        + .fa {
            margin-top: 10px;

            > .th-tooltip {
                background: #f4f4f4;
                border-radius: 10px;
                color: #222;
                width: auto;
                padding: 10px;
                top: 35px;
                left: -200px;
                border: 1px solid #e4e4e4;
                height: auto;
                font-family: 'Open Sans', sans-serif;
                font-size: 14px;
                line-height: 1.2;
            }
        }
    }

    #checkbox1 ~ .fa > .th-tooltip {
        background: url("../../assets/img/wish-list.png") no-repeat;
        background-size: contain;
    }

    #checkbox2 ~ .fa > .th-tooltip {
        background: url("../../assets/img/paycard.png") no-repeat;
        background-size: contain;
    }

    #checkbox3 ~ .fa > .th-tooltip {
        background: url("../../assets/img/my-order.png") no-repeat;
        background-size: contain;
    }

    #checkbox4 ~ .fa > .th-tooltip {
        background: url("../../assets/img/search.png") no-repeat;
        background-size: contain;
    }

    #checkbox5 ~ .fa > .th-tooltip {
        background: url("../../assets/img/filtrs.png") no-repeat;
        background-size: contain;
    }

    .th-color-theme {
        font-size: 0;
        text-align: center;

        li {
            display: inline-block;
            width: 150px;
            height: 200px;
            margin: 0 10px;

            &:first-child {
                margin-left: 0;
            }

            &:last-child {
                margin-right: 0;
            }
        }

        [type="radio"]:checked,
        [type="radio"]:not(:checked) {
            position: absolute;
            left: -9999px;
        }

        [type="radio"]:checked + label,
        [type="radio"]:not(:checked) + label {
            position: relative;
            width: 150px;
            cursor: pointer;
        }

        [type="radio"]:checked + label::before,
        [type="radio"]:not(:checked) + label::before {
            content: '';
            position: absolute;
            left: 25px;
            top: 25px;
            width: 100px;
            height: 100px;
            border-radius: 100%;
            box-shadow: 0 0 10px 10px #f2f2f2;
            z-index: 4;
            background-size: contain;
        }

        [type="radio"]:checked + label.th-1::before,
        [type="radio"]:not(:checked) + label.th-1::before {
            background: url("../../assets/img/icon-radio1.png") no-repeat;
        }

        [type="radio"]:checked + label.th-2::before,
        [type="radio"]:not(:checked) + label.th-2::before {
            background: url("../../assets/img/icon-radio2.png") no-repeat;
        }

        [type="radio"]:checked + label.th-3::before,
        [type="radio"]:not(:checked) + label.th-3::before {
            background: url("../../assets/img/icon-radio3.png") no-repeat;
        }

        [type="radio"]:checked + label.th-4::before,
        [type="radio"]:not(:checked) + label.th-4::before {
            background: url("../../assets/img/icon-radio4.png") no-repeat;
        }

        [type="radio"]:checked + label.th-5::before,
        [type="radio"]:not(:checked) + label.th-5::before {
            background: url("../../assets/img/icon-radio5.png") no-repeat;
        }

        [type="radio"]:checked + label.th-6::before,
        [type="radio"]:not(:checked) + label.th-6::before {
            background: url("../../assets/img/icon-radio6.png") no-repeat;
        }

        [type="radio"]:checked + label::after,
        [type="radio"]:not(:checked) + label::after {
            content: '';
            width: 145px;
            height: 145px;
            position: absolute;
            top: 4px;
            left: 4px;
            border: 1px solid #23b066;
            border-radius: 5px;
            background: #fff;
            -webkit-transition: all 0.2s ease;
            transition: all 0.2s ease;
            z-index: 2;
        }

        [type="radio"]:not(:checked) + label::after {
            opacity: 0;
            -webkit-transform: scale(0);
            transform: scale(0);
        }

        [type="radio"]:checked + label::after {
            opacity: 1;
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }

    .th-more-service {

        label {
            padding-left: 30px;
            position: relative;
        }

        [type="checkbox"]:checked,
        [type="checkbox"]:not(:checked) {
            position: absolute;
            left: -9999px;
        }

        [type="checkbox"]:checked + label::before,
        [type="checkbox"]:not(:checked) + label::before,
        [type="checkbox"]:checked + label::after,
        [type="checkbox"]:not(:checked) + label::after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 26px;
            height: 26px;
            -webkit-transition: all 0.2s ease;
            transition: all 0.2s ease;
        }

        [type="checkbox"]:checked + label::before,
        [type="checkbox"]:not(:checked) + label::before {
            background: url("../../assets/img/icon-uncheckbox.png") no-repeat;
            background-size: contain;
            z-index: 5;
        }

        [type="checkbox"]:checked + label::after,
        [type="checkbox"]:not(:checked) + label::after {
            background: url("../../assets/img/icon-checkbox.png") no-repeat;
            z-index: 6;
        }

        [type="checkbox"]:not(:checked) + label::after {
            opacity: 0;
            -webkit-transform: scale(0);
            transform: scale(0);
        }

        [type="checkbox"]:checked + label::after {
            opacity: 1;
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }

    .th-system-list {

        li {
            display: inline-block;
            vertical-align: top;
        }

        label {
            font-size: 0;
        }

        [type="radio"]:checked,
        [type="radio"]:not(:checked) {
            position: absolute;
            left: -9999px;
        }

        [type="radio"]:checked + label,
        [type="radio"]:not(:checked) + label {
            position: relative;
            width: 200px;
            height: 92px;
            box-shadow: 0 5px 10px 4px #f2f2f2;
            border-radius: 20px;
            margin-right: 20px;
        }

        [type="radio"]:checked + label,
        [type="radio"]:not(:checked) + label {
            &::after,
            &::before {
                content: '';
                position: absolute;
                width: auto;
                height: auto;
                top: 0;
                left: 0;
                -webkit-transition: all 0.2s ease;
                transition: all 0.2s ease;
                display: block;
            }
        }

        img {
            width: 100%;
            border-radius: 20px;
            height: 100%;
        }

        [type="radio"]:not(:disabled) + label img {
            border: 1px solid #23b066;
            cursor: pointer;
        }

        [type="radio"]:checked + label img {
            border: 1px solid #23b066;
            border-radius: 20px;
            z-index: 4;
        }

        [type="radio"]:disabled + label img {
            -webkit-filter: grayscale(1);
            filter: grayscale(1);
            pointer-events: none !important;
            cursor: default !important;
        }

        [type="radio"]:not(:checked) + label::after {
            opacity: 0;
            -webkit-transform: scale(0);
            transform: scale(0);
        }

        [type="radio"]:checked + label::after {
            opacity: 1;
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }

    @media (max-width: 1200px) {
        .th-color-map {
            width: 960px;
        }

        .th-single-color {
            width: 280px;
            height: 580px;

            &::before {
                width: 280px;
                height: 580px;
            }

            &::after {
                height: 550px;
                width: 238px;
                top: 22px;
            }
        }

        .th-color-theme {

            li {
                width: 80px;
                height: 100px;
            }

            [type="radio"]:checked + label::before,
            [type="radio"]:not(:checked) + label::before {
                width: 60px;
                height: 60px;
                left: 20px;
                top: 20px;
            }

            [type="radio"]:checked + label::after,
            [type="radio"]:not(:checked) + label::after {
                width: 95px;
                height: 95px;
            }
        }
    }

    @media (max-width: 991px) {
        .th-color-theme {

            li {
                width: 85px;
                height: 90px;
                margin: 0;
            }

            [type="radio"]:checked + label::before,
            [type="radio"]:not(:checked) + label::before {
                width: 50px;
                height: 50px;
                left: 15px;
                top: 15px;
            }

            [type="radio"]:checked + label::after,
            [type="radio"]:not(:checked) + label::after {
                width: 80px;
                height: 80px;
                top: 2px;
                left: 2px;
            }
        }
        .th-color-map {
            width: 600px;
            margin-bottom: 30px;
        }

        .th-single-color {
            width: 165px;
            height: 320px;

            &::before {
                width: 165px;
                height: 330px;
            }

            &::after {
                height: 330px;
                width: 144px;
                top: 10px;
                left: 10px;
            }

            &.th-view-first {
                left: 15px;
            }

            &.th-view-third {
                left: -15px;
            }
        }

        .th-system-list [type="radio"]:checked + label,
        .th-system-list [type="radio"]:not(:checked) + label {
            width: 60%;
        }

        .th-system-list [type="radio"]:checked + label img,
        .th-system-list [type="radio"]:not(:checked) + label img{
            width: 100%;
        }
    }

    @media (max-width: 767px) {
        .th-color-theme {

            li {
                width: 45px;
                height: 70px;
            }

            [type="radio"]:checked + label::before,
            [type="radio"]:not(:checked) + label::before {
                width: 40px;
                height: 40px;
                left: 10px;
                top: 10px;
            }

            [type="radio"]:checked + label::after,
            [type="radio"]:not(:checked) + label::after {
                width: 60px;
                height: 60px;
                top: 0;
                left: 0;
            }
        }
    }

    @media (max-width: 480px) {

        .th-color-theme [type="radio"]:checked + label,
        .th-color-theme [type="radio"]:not(:checked) + label {
            width: 40px;
        }

        .th-color-map {
            width: 100%;
        }

        .th-single-color.th-view-first {
            left: 0;
        }

        .th-single-color.th-view-third {
            top: 15px;
            left: 0;
        }

        .th-color-theme [type="radio"]:checked + label::before,
        .th-color-theme [type="radio"]:not(:checked) + label::before {
            width: 30px;
            height: 30px;
            left: 10px;
            top: 10px;
        }

        .th-color-theme [type="radio"]:checked + label::after,
        .th-color-theme [type="radio"]:not(:checked) + label::after {
           width: 53px;
           height: 53px;
           top: 0;
           left: 0;
       }

        .th-color-theme li {
            margin: 0 5px;
            width: 40px;
            height: 50px;
        }
    }

</style>
