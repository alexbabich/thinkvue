<template>
    <div>
        {{med}}
        <div class="panel-body">
            <form id="form" class="form-inline" @submit.prevent="addApp">
                <div class="form-group">
                    <label for="one">One</label>
                    <input type="radio" id="one" value="One" v-model="newApp.settings.card">
                    <br>
                    <label for="two">Two</label>
                    <input type="radio" id="two" value="Two" v-model="newApp.settings.card">
                </div>
                <div class="form-group">
                    <label for="checkbox">phone</label>
                    <input type="checkbox" id="checkbox" v-model="newApp.aboutUs.phone">
                </div>
                <div class="form-group">
                    <label for="bookAuthor">address:</label>
                    <input type="text" id="bookAuthor" class="form-control" v-model="newApp.aboutUs.address">
                </div>
                <div class="form-group">
                    <label for="bookTitle">email:</label>
                    <input type="text" id="bookTitle" class="form-control" v-model="newApp.aboutUs.email">
                </div>
                <input type="submit" class="btn btn-primary" value="Add Book">
            </form>
        </div>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>address</th>
                <th>email</th>
                <th>phone</th>
                <th>key</th>
                <th>card</th>
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
    </div>
</template>

<script>
import {db, appRef} from '@/firebase'
import moment from 'moment'

export default {
  name: 'Demo',
  methods: {
    addApp: function () {
      let newKey = moment().format('X')
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
          filter: '',
          oderList: '',
          search: '',
          wishList: ''
        },
        system: {
          domen: '',
          system: '',
          token: ''
        }
      })
    },
    removeApp: function (app) {
      appRef.child(app['.key']).remove()
    }
  },
  data () {
    return {
      med: 'demo page',
      appInfo: {},
      newApp: {
        aboutUs: {
          address: '',
          email: '',
          phone: false
        },
        colorScheme: {
          auxiliaryСolor: '',
          mainСolor: ''
        },
        settings: {
          card: '',
          filter: '',
          oderList: '',
          search: '',
          wishList: ''
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

</style>
