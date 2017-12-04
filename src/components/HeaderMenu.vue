<template>
    <b-container>
        <b-navbar toggleable class="row">
            <base-nav-toggle target="navbar-collapse"></base-nav-toggle>
            <b-navbar-brand><span>E-commerce app</span></b-navbar-brand>
            <b-collapse is-nav id="nav_text_collapse">
                <b-nav>
                    <b-nav-item :href="item.url" :key="item.id" v-for="item in menuList" v-scroll-to="item.url">
                        {{item.text}}
                    </b-nav-item>
                </b-nav>
            </b-collapse>
        </b-navbar>
    </b-container>
</template>

<script>
  import BaseNavToggle from '@/components/BaseNavToggle.vue'

  export default {
    components: {
      BaseNavToggle
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
            url: '#some-fact'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
    .navbar-brand span {
        padding: 0 5px;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 900;
        font-size: 1.625rem;
        text-transform: uppercase;
        line-height: 1;
        display: flex;
        margin: 15px 0;
        color: #fff !important;
        text-decoration: none;
    }
    .nav {
        text-align: center;
        position: relative;
        z-index: 3;
        padding: 60px 0;
        margin: auto;
        li {
            font-weight: normal;
            margin: 0 30px;
            a {
                padding: 5px;
                color: #fff;
                text-transform: uppercase;
                font-family: "MyriadProSemiBold", sans-serif;
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
        .navbar-brand {
            a {
                font-size: 1.5rem;
            }
        }
        .nav {
            padding: 40px 0;
            li {
                margin: auto 6px;
                a {
                    padding: 10px 5px;
                    font-size: 0.875rem;
                }
            }
        }
    }

    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait){
        .navbar {
            padding: 0;
        }

        .navbar-brand {
            margin: 0;
            a {
                font-size: 1.3rem;
            }
        }

        .nav {
            li {
                margin: auto 6px;
                a {
                    font-size: 0.725rem;
                }
            }
        }
    }

    @media only screen and (max-width : 1200px) {
        .navbar {
            padding: 0;
        }
        .nav li {
            margin: auto 0.5em;
        }
    }

    @media only screen and (max-width : 992px) {
        .navbar-brand {
            width: 100%;
            position: absolute;
            top: 0;
            a {
                display: inline-block;
                text-align: center;
                width: 100%;
                font-size: 1.6rem;
            }
        }
        .nav {
            margin: auto;
            padding-bottom: 20px;
            li {
                &:last-child {
                    margin-right: 0;
                }
                &:first-child {
                    margin-left: 0;
                    a {
                        font-size: 0.725rem;
                    }
                }
                a {
                    font-size: 0.725rem;
                }
            }
        }
    }

    @media only screen and (max-width : 767px) {
        .nav {
            li {
                margin: auto 0.3em;
            }
        }
    }

    @media only screen and (max-width : 577px) {
        .th-page-title {
            font-size: 2rem;
        }
        .th-page-subtitle {
            font-size: 1.4rem;
        }
        .navbar-brand {
            width: auto;
            position: relative;
        }
        .navbar {
            padding: 0.5rem 0;
            margin: auto -15px;
        }
        .nav {
            padding: 30px 0;
            .nav-item {
                display: block;
                width: 100%;
                margin: auto;
                &:hover {
                    background-color: #6c757d;
                }
                a {
                    text-align: center;
                    display: block;
                }
            }
        }
    }
</style>
