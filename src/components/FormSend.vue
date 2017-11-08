<template>
    <b-col lg="4" class="th-form-wrapper">
        <h2>Узнай как использовать приложение в своем бизнесе</h2>
        <b-form @submit="onSubmit" validated>
            <b-form-group>
                <b-form-input id="nameInput" type="text" v-model="form.name" required placeholder="Имя"></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-form-input id="nameInput" type="tel" v-model="form.phone" required placeholder="Телефон "></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary" class="btn th-cmdSend">Узнать</b-button>
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
        form {
            input {
                color: #000;
                border-radius: 2px;
                border: 1px solid #bfcacf;
            }
        }
    }
</style>