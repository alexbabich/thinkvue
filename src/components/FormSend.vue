<template>
    <b-col lg="4" class="m-auto p-4 text-center th-form-wrapper">
        <h2 class="mb-4 mt-2">Узнай как использовать<br/>приложение в своем бизнесе</h2>
        <b-form @submit="onSubmit" validated>
            <b-form-group>
                <b-form-input class="mx-auto" id="nameInput" type="text" v-model="form.name" required placeholder="Имя"></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-form-input class="mx-auto" id="phoneInput" type="tel" v-model="form.phone" required placeholder="Телефон"></b-form-input>
            </b-form-group>
            <b-button type="submit" class="th-cmdSend mt-3 mb-4">Узнать</b-button>
        </b-form>
    </b-col>
</template>

<script>
  export default {
    name: 'FormSend',
    data () {
      return {
        form: {
          phone: '',
          name: ''
        }
      }
    },
    methods: {
      onSubmit (e) {
        e.preventDefault()
        alert(JSON.stringify(this.form))
      }
    }
  }
</script>

<style lang="scss">
    .th-form-wrapper {
        border: 1px solid #fff;
        color: #fff;
        max-width: 404px;
        h2 {
            font-size: 1.5rem;
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
                border: 1px solid #bfcacf;
                font-size: 0.75rem;
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
</style>