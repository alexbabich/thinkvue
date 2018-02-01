<template>
    <div class="th-demo-app">
        <b-container>
            <form id="form" @submit.prevent="submitre" >
                <div class="row">
                    <h2 class="col-12">Цветовая палитра</h2>
                    <p class="col-12 required">Выберите одну из цветовых палитр Вашего приложения</p>
                    <div class="th-color-map" :class="auxiliaryСolor">
                        <div class="th-single-color th-view-first"></div>
                        <div class="th-single-color th-view-second"></div>
                        <div class="th-single-color th-view-third"></div>
                    </div>
                    <ul class="list-unstyled col-12 th-color-theme">
                        <li>
                            <input type="radio" checked id="th-1" value="th-1" class="th-radio-button" v-model="auxiliaryСolor">
                            <label for="th-1">1</label>
                        </li>
                        <li>
                            <input type="radio" id="th-2" value="th-2" class="th-radio-button" v-model="auxiliaryСolor">
                            <label for="th-2">2</label>
                        </li>
                        <li>
                            <input type="radio" id="th-3" value="th-3" class="th-radio-button" v-model="auxiliaryСolor">
                            <label for="th-3">3</label>
                        </li>
                        <li>
                            <input type="radio" id="th-4" value="th-4" class="th-radio-button" v-model="auxiliaryСolor">
                            <label for="th-4">4</label>
                        </li>
                        <li>
                            <input type="radio" id="th-5" value="th-5" class="th-radio-button" v-model="auxiliaryСolor">
                            <label for="th-5">5</label>
                        </li>
                        <li>
                            <input type="radio" id="th-6" value="th-6" class="th-radio-button" v-model="auxiliaryСolor">
                            <label for="th-6">6</label>
                        </li>
                    </ul>
                    <div v-if='$vuelidation.error("auxiliaryСolor")'>Обязательно выберите одну из цветовых схем</div>
                    <h2 class="col-12">Система управления</h2>
                    <p class="col-12 required">Выберите одну из систем управления</p>
                    <ul class="list-unstyled col-12 th-system-list">
                        <li>
                            <input type="radio" id="th-systemPoster" value="Poster" v-model="system">
                            <label for="th-systemPoster"><img src="../../assets/img/icon-poster.png" /></label>
                        </li>
                        <li>
                            <input type="radio" id="th-systemShopify" value="Shopify" v-model="system">
                            <label for="th-systemShopify"><img src="../../assets/img/icon-shopify.png" /></label>
                        </li>
                    </ul>
                    <div v-if='$vuelidation.error("system")'>Обязательно выберите одну из систем</div>
                    <div class="form-group col-12 col-md-6 required">
                        <label for="th-userDomen">Domen</label>
                        <input type="text" id="th-userDomen" class="form-control" placeholder="Введите домен" v-model="domen" />
                        <div v-if='$vuelidation.error("domen")'>Обязательно укажите{{ $vuelidation.error('domen') }}</div>
                        <!--<i class="fa fa-info-circle" aria-hidden="true"><span class="th-tooltip">userDomen</span></i>-->
                    </div>
                    <div class="form-group col-12 col-md-6 required">
                        <label for="th-userToken">Token</label>
                        <input type="text" id="th-userToken" class="form-control" placeholder="Введите токен" v-model="token" />
                        <div v-if='$vuelidation.error("token")'>Обязательно укажите{{ $vuelidation.error('token') }}</div>
                        <!--<i class="fa fa-info-circle" aria-hidden="true"><span class="th-tooltip">userToken</span></i>-->
                    </div>
                    <h2 class="col-12">Информация о заведении</h2>
                    <div class="form-group col-12 col-md-6 required">
                        <label for="th-userPhone">Телефон</label>
                        <input type="tel" id="th-userPhone" class="form-control" placeholder="Введите телефон" v-model="phone" />
                        <div v-if='$vuelidation.error("phone")'>Обязательно укажите{{ $vuelidation.error('phone') }}</div>
                    </div>
                    <div class="form-group col-12 col-md-6 required">
                        <label for="th-userAddress">Адресс:</label>
                        <input required type="text" id="th-userAddress" class="form-control" placeholder="Введите адресс" v-model="address" />
                        <div v-if='$vuelidation.error("address")'>Обязательно укажите{{ $vuelidation.error('address') }}</div>
                    </div>
                    <div class="form-group col-12 col-md-6 required">
                        <label for="th-userEmail">Введите e-mail</label>
                        <input required type="email" id="th-userEmail" class="form-control" placeholder="Введите e-mail" v-model="email" />
                        <div v-if='$vuelidation.error("email")'>Обязательно укажите{{ $vuelidation.error('email') }}</div>
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
                            <input class="th-checkbox" type="checkbox" id="checkbox3" v-model="oderList" />
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
                <button class="btn th-cmd-buy" :disabled="$vuelidation.errors()" v-b-modal.modal1 type="submit">Создать</button>
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
import Vuelidation from 'vuelidation'

Vue.use(Vuelidation)

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
      auxiliaryСolor: '',
      mainСolor: '',
      card: false,
      filter: false,
      oderList: false,
      search: false,
      wishList: false,
      domen: '',
      system: '',
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
    submitre: function () {
      if (this.$vuelidation.valid()) {
        this.newKey = moment().format('X')
        console.log(this.newKey)
//        alert('Привет, ' + this.newKey + '!')
        db.ref(`/StoreInfo/${this.newKey}/Design`).set({
          aboutUs: {
            address: this.address,
            email: this.email,
            phone: this.phone
          },
          colorScheme: {
            auxiliaryСolor: this.auxiliaryСolor,
            mainСolor: ''
          },
          settings: {
            card: this.card,
            filter: this.filter,
            oderList: this.oderList,
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



    .th-color-map {
        width: 96%;
        margin: auto;
        text-align: center;

        &.th-1 {
            .th-single-color.th-view-first {
                &::after {
                    background: url("../../assets/img/colormap/1/1.png") no-repeat;
                    background-size: contain;
                }
            }
            .th-single-color.th-view-second {
                &::after {
                    background: url("../../assets/img/colormap/1/2.png") no-repeat;
                    background-size: contain;
                }
            }
            .th-single-color.th-view-third {
                &::after {
                    background: url("../../assets/img/colormap/1/3.png") no-repeat;
                    background-size: contain;
                }
            }
        }

        &.th-2 {
            .th-single-color.th-view-first {
                &::after {
                    background: url("../../assets/img/colormap/2/1.png") no-repeat;
                    background-size: contain;
                }
            }
            .th-single-color.th-view-second {
                &::after {
                    background: url("../../assets/img/colormap/2/2.png") no-repeat;
                    background-size: contain;
                }
            }
            .th-single-color.th-view-third {
                &::after {
                    background: url("../../assets/img/colormap/2/3.png") no-repeat;
                    background-size: contain;
                }
            }
        }

        &.th-3 {
            .th-single-color.th-view-first {
                &::after {
                    background: url("../../assets/img/colormap/3/1.png") no-repeat;
                    background-size: contain;
                }
            }
            .th-single-color.th-view-second {
                &::after {
                    background: url("../../assets/img/colormap/3/2.png") no-repeat;
                    background-size: contain;
                }
            }
            .th-single-color.th-view-third {
                &::after {
                    background: url("../../assets/img/colormap/3/3.png") no-repeat;
                    background-size: contain;
                }
            }
        }

        &.th-4 {
            .th-single-color.th-view-first {
                &::after {
                    background: url("../../assets/img/colormap/4/1.png") no-repeat;
                    background-size: contain;
                }
            }
            .th-single-color.th-view-second {
                &::after {
                    background: url("../../assets/img/colormap/4/2.png") no-repeat;
                    background-size: contain;
                }
            }
            .th-single-color.th-view-third {
                &::after {
                    background: url("../../assets/img/colormap/4/3.png") no-repeat;
                    background-size: contain;
                }
            }
        }

        &.th-5 {
            .th-single-color.th-view-first {
                &::after {
                    background: url("../../assets/img/colormap/5/1.png") no-repeat;
                    background-size: contain;
                }
            }
            .th-single-color.th-view-second {
                &::after {
                    background: url("../../assets/img/colormap/5/2.png") no-repeat;
                    background-size: contain;
                }
            }
            .th-single-color.th-view-third {
                &::after {
                    background: url("../../assets/img/colormap/5/3.png") no-repeat;
                    background-size: contain;
                }
            }
        }

        &.th-6 {
            .th-single-color.th-view-first {
                &::after {
                    background: url("../../assets/img/colormap/6/1.png") no-repeat;
                    background-size: contain;
                }
            }
            .th-single-color.th-view-second {
                &::after {
                    background: url("../../assets/img/colormap/6/2.png") no-repeat;
                    background-size: contain;
                }
            }
            .th-single-color.th-view-third {
                &::after {
                    background: url("../../assets/img/colormap/6/3.png") no-repeat;
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
            background: url("../../assets/img/colormap/mocup.png") no-repeat;
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
                background: url("../../assets/img/colormap/1/1.png") no-repeat;
            }
        }

        &.th-view-second {
            z-index: 4;

            &::after {
                background: url("../../assets/img/colormap/1/2.png") no-repeat;
            }
        }

        &.th-view-third {
            z-index: 3;
            left: -37px;

            &::after {
                background: url("../../assets/img/colormap/1/3.png") no-repeat;
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

    #checkbox1 ~ .fa > .th-tooltip {
        background: url("../../assets/img/colormap/wish-list.png") no-repeat;
        background-size: contain;
    }

    #checkbox2 ~ .fa > .th-tooltip {
        background: url("../../assets/img/colormap/paycard.png") no-repeat;
        background-size: contain;
    }

    #checkbox3 ~ .fa > .th-tooltip {
        background: url("../../assets/img/colormap/my-order.png") no-repeat;
        background-size: contain;
    }

    #checkbox4 ~ .fa > .th-tooltip {
        background: url("../../assets/img/colormap/search.png") no-repeat;
        background-size: contain;
    }

    #checkbox5 ~ .fa > .th-tooltip {
        background: url("../../assets/img/colormap/filtrs.png") no-repeat;
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
            background: url("../../assets/img/icon-radio.png") no-repeat;
            z-index: 4;
            background-size: contain;
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
            width: initial;
            cursor: pointer;
            box-shadow: 0 5px 10px 4px #f2f2f2;
            border-radius: 10px;
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

        [type="radio"]:not(:checked) + label img {
            border: 1px solid transparent;
        }

        [type="radio"]:checked + label img {
            border: 1px solid #23b066;
            border-radius: 5px;
            z-index: 4;
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
                width: 60px;
                height: 90px;
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
                left: 20px;
            }

            &.th-view-third {
                left: -20px;
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
