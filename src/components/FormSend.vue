<template>
    <b-col lg="4" class="m-auto p-4 text-center th-form-wrapper" :class="formClass">
        <h2 class="mb-4 mt-2">{{formTitle}}</h2>
        <b-form validated class="th-send-form" action="https://formspree.io/ithinkersteam@gmail.com" method="POST">
            <b-form-group>
                <b-form-input class="mx-auto nameInput" name="name" type="text" required placeholder="Имя"></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-form-input class="mx-auto phoneInput" name="phone" type="tel" required placeholder="Телефон"></b-form-input>
            </b-form-group>
            <b-button type="submit" class="th-cmdSend mt-3 mb-4">{{buttonTitle}}</b-button>
        </b-form>
    </b-col>
</template>

<script>
/* eslint-disable indent */
  export default {
    name: 'FormSend',
    props: ['formTitle', 'formClass', 'buttonTitle'],
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
    .th-form-wrapper {
        border: 1px solid #fff;
        color: #fff;
        max-width: 404px;
        margin-top: 0 !important;
        &.th-form-price,
        &.th-form-footer {
            border-color: #000;
            color: #000;
        }
        &.th-form-price {
            border: none;
            padding-top: 0 !important;
            h2 {
                margin-top: 0 !important;
            }
        }
        h2 {
            font-size: 1.49rem;
            font-weight: 300;
            line-height: 1.75rem;
        }
        form {
            input {
                height: 42px;
                max-width: 354px;
                width: 100%;
                color: #000;
                border-radius: 2px;
                border: 1px solid #bfcacf !important;
                font-size: 0.75rem;
                padding: 10px 25px;
            }
        }
    }
    .th-cmdSend {
        background-color: #57b1b3;
        font-size: 1.0625rem;
        line-height: 1;
        max-width: 238px;
        width: 100%;
        height: 45px;
        border: none;
        cursor: pointer;
        &:hover {
            background-color: #20c997;
        }
    }

    @media only screen and (max-width : 575px) {
        .th-form-wrapper {
            max-width: 100%;
        }
    }
</style>
