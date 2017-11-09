<template>
    <b-container>
        <b-nav fill>
            <b-nav-item :href="item.url" v-bind:key="item.text" v-for="item in menuList" v-scroll-to="item.url">
                {{item.text}}
            </b-nav-item>
        </b-nav>
    </b-container>
</template>

<script>
  export default {
    name: 'HeaderMenu',
    data () {
      return {
        menuList: [
          {
            text: 'Treetopers',
            url: '/'
          },
          {
            text: 'ПРЕИМУЩЕСТВА',
            url: '#advantages'
          },
          {
            text: 'цена',
            url: '#price'
          },
          {
            text: 'результат внедрения',
            url: '#result'
          },
          {
            text: 'почему именно приложения?',
            url: '#app'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
    .nav {
        text-align: center;
        position: relative;
        z-index: 3;
        padding: 60px 0;
        li {
            font-weight: normal;
            margin: 0 15px;
            &:first-child {
                margin-left: 0;
                a {
                    font-family: 'Source Sans Pro', sans-serif;
                    font-weight: 900;
                    font-size: 1.625rem;
                }
            }
            &:nth-child(2) {
                font-weight: 600;
            }
            a {
                padding: 0 5px;
                color: #fff;
                text-transform: uppercase;
                &:hover {
                    color: #f3f3f3;
                    text-decoration: none;
                    text-shadow: 1px 1px 2px black
                }
            }
        }
    }
</style>
