<template>
    <b-container>
        <b-navbar toggleable class="row">
            <nav-toggle target="navbar-collapse"></nav-toggle>
            <b-navbar-brand><b-link href="/">Treetopers</b-link></b-navbar-brand>
            <b-collapse is-nav id="nav_text_collapse">
                <b-nav>
                    <b-nav-item :href="item.url" v-bind:key="item.text" v-for="item in menuList" v-scroll-to="item.url">
                        {{item.text}}
                    </b-nav-item>
                </b-nav>
            </b-collapse>
        </b-navbar>
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
    #nav-icon1,
    #nav-icon1:focus,
    #nav-icon1:active,
    .navbar-light .navbar-toggler,
    .navbar-light .navbar-toggler:focus,
    .navbar-light .navbar-toggler:active {
        outline: none;
    }
    .navbar-light .navbar-toggler {
        border: none;
        color: transparent;
        padding: 0;
    }
    #nav-icon1 {
        outline: none;
        width: 25px;
        height: 23px;
        position: relative;
        margin: auto;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .5s ease-in-out;
        -moz-transition: .5s ease-in-out;
        -o-transition: .5s ease-in-out;
        transition: .5s ease-in-out;
        cursor: pointer;
        &.open {
            span {
                &:nth-child(1) {
                    top: 10px;
                    -webkit-transform: rotate(135deg);
                    -moz-transform: rotate(135deg);
                    -o-transform: rotate(135deg);
                    transform: rotate(135deg);
                }
                &:nth-child(2) {
                    opacity: 0;
                    left: -9999999px;
                }
                &:nth-child(3) {
                    top: 10px;
                    -webkit-transform: rotate(-135deg);
                    -moz-transform: rotate(-135deg);
                    -o-transform: rotate(-135deg);
                    transform: rotate(-135deg);
                }
            }
        }
        span {
            display: block;
            position: absolute;
            height: 2px;
            width: 26px;
            background: #fff;
            border-radius: 9px;
            opacity: 1;
            left: 0;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition: .25s ease-in-out;
            -moz-transition: .25s ease-in-out;
            -o-transition: .25s ease-in-out;
            transition: .25s ease-in-out;
            &:nth-child(1) {
                top: 0;
            }
            &:nth-child(2) {
                top: 10px;
            }
            &:nth-child(3) {
                top: 20px;
            }
        }

    }

    .navbar-brand a {
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
        li {
            font-weight: normal;
            margin: 0 15px;
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
        .navbar-brand {
            a {
                font-size: 1.5rem;
            }
        }
        .nav {
            padding: 40px 0;
            li {
                margin: auto 6px;
                &:first-child {
                   a {
                       font-size: 1rem;
                   }
                }
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
                &:first-child {
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

    @media only screen and (max-width : 768px) {
        .nav {
            li {
                margin: auto 0.3em;
            }
        }
    }

    @media only screen and (max-width : 576px) {
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
