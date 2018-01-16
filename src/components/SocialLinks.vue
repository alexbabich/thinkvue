<template>
    <b-container class="pt-5 pb-4 text-center">
        <p class="th-block-subtitle">Присоединятесь к нам в социальных сетях:</p>
        <ul class="list-unstyled list-inline th-social-list">
            <li v-for="link in linkList" :key="link.id">
                <b-link :href="link.url" :class="link.className" :title="link.title"></b-link>
            </li>
        </ul>
        <p class="th-phone-number">+38 (093) 745 63 30</p>
        <a href="http://ithinkers.com.ua" class="mx-auto th-logo"></a>
    </b-container>
</template>

<script>
/* eslint-disable indent */
  export default {
    name: 'SocialLinks',
    data () {
      return {
        linkList: [
          { url: 'https://www.facebook.com/iThinkersTeam/', className: 'fb', title: 'Следите за нашими новостями на Facebook' },
          { url: 'https://www.instagram.com/ithinkersteam/', className: 'in', title: 'Следите за нами в Instagram' },
          { url: 'https://twitter.com/iThinkersTeam', className: 'tw', title: 'Читайте нас на Twitter' }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
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
