<template>
    <b-col lg="4" class="th-form-wrapper text-center">
        <h2>Узнай как использовать приложение в своем бизнесе</h2>
        <b-form @submit="onSubmit" validated>
            <b-form-group>
                <b-form-input id="nameInput" type="text" v-model="form.name" required placeholder="Имя"></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-form-input id="nameInput" type="tel" v-model="form.phone" required placeholder="Телефон "></b-form-input>
            </b-form-group>
            <b-button type="submit" class="th-cmdSend">Узнать</b-button>
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
        padding: 20px;
        color: #fff;
        h2 {
            font-size: 1.5rem;
            font-weight: 300;
            line-height: 1.75rem;
        }
        form {
            input {
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
        width: 238px;
        height: 45px;
        border: none;
        cursor: pointer;
        &:hover {
            background-color: #20c997;
        }
    }
</style>