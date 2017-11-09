<template>
    <b-container>
        <b-navbar toggleable>
            <nav-toggle target="navbar-collapse"></nav-toggle>
            <b-navbar-brand>Treetopers</b-navbar-brand>
            <b-collapse is-nav id="nav_text_collapse">
                <b-nav>
                    <b-nav-item :href="item.url" v-bind:key="item.text" v-for="item in menuList" v-scroll-to="item.url">
                        {{item.text}}
                    </b-nav-item>
                </b-nav>
            </b-collapse>
        </b-navbar>



        <!--<b-nav fill class="row">
            <b-nav-item :href="item.url" v-bind:key="item.text" v-for="item in menuList" v-scroll-to="item.url">
                {{item.text}}
            </b-nav-item>
        </b-nav>-->
    </b-container>
</template>

<script>
  import NavToggle from '@/components/NavToggle.vue'

  export default {
    components: {
      NavToggle
    },
    mounted () {
    },
    name: 'HeaderMenu',
    data () {
      return {
        menuList: [
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
    .navbar-brand {
        margin-left: 0;
        padding: 0 5px;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 900;
        font-size: 1.625rem;
        text-transform: uppercase;
        line-height: 1;
        display: flex;
        margin: 15px 0;
        color: #fff !important;
    }
    .nav {
        text-align: center;
        position: relative;
        z-index: 3;
        padding: 60px 0;
        li {
            font-weight: normal;
            margin: 0 15px;
            &:first-child {
                font-weight: 600;
            }
            a {
                padding: 5px;
                color: #fff;
                text-transform: uppercase;
                line-height: 1;
                display: flex;
                margin: 15px 0;
                &:hover {
                    color: #f3f3f3;
                    text-decoration: none;
                    text-shadow: 1px 1px 2px black
                }
            }
        }
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
        .nav {
            padding: 40px 0;
            li {
                &:first-child {
                   a {
                       font-size: 1.2rem;
                   }
                }
                margin: auto;
                a {
                    padding: 10px 5px;
                    font-size: 0.875rem;
                }
            }
        }
    }

    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait){
        .nav {
            li {
                a {
                    font-size: 0.725rem;
                }
            }
        }
    }
</style>
