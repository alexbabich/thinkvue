<template>
    <b-container class="pt-5 pb-4 text-center">
        <p class="th-block-subtitle">Присоединятесь к нам в социальных сетях:</p>
        <ul class="list-unstyled list-inline th-social-list">
            <li v-for="link in linkList">
                <b-link :href=link.url :class=link.className></b-link>
            </li>
        </ul>
        <p class="th-phone-number">+38 (093) 745 63 30</p>
        <!--TODO somthing wrong with src after build-->
        <!--<img src="../assets/img/icon-logo.png" alt="icon-logo" class="th-logo"/>-->

        <span class="mx-auto th-logo"></span>
    </b-container>
</template>

<script>
  export default {
    name: 'SocialLinks',
    data () {
      return {
        linkList: [
          { url: 'facebook', className: 'fb' },
          { url: 'insta', className: 'in' },
          { url: 'twitter', className: 'tw' }
        ]
      }
    }
  }
</script>

<style lang="scss">
    .th-logo {
        background-image: url("../assets/img/icon-logo.png");
        height: 42px;
        width: 45px;
        display: inline-block;
    }
    .th-block-subtitle {
        font-family: "Open Sans", sans-serif;
        font-weight: 400;
        font-size: 1rem;
        margin-bottom: 0;
    }
    .th-social-list {
        text-align: center;
        margin: 22px 0;
        li {
            margin: 0 25px;
            display: inline-block;
            a {
                background-image: url("../assets/img/icon-sprite-social.png");
                background-repeat: no-repeat;
                height: 33px;
                width: 33px;
                padding: 8px 17px;
                &:hover {
                    -webkit-filter: invert(.8);
                    filter: invert(.8);
                }
                &.in {
                    background-position: 50% 0;
                }
                &.tw {
                    background-position: 100% 0;
                }
            }
        }
    }
</style>
