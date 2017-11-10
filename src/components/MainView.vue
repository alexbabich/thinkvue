<template>
  <div id="app">
    <header-section/>
    <advantages/>
    <b-container>
      <div class="hello">
        <h1>{{ msg }}</h1>
      </div>
    </b-container>
    <price/>
    <some-facts/>
    <testimonials/>
    <f-a-q/>
    <social-links/>
  </div>
</template>

<script>
  import HeaderSection from '@/components/HeaderSection.vue'
  import SocialLinks from '@/components/SocialLinks.vue'
  import FAQ from '@/components/FAQ.vue'
  import Testimonials from '@/components/Testimonials.vue'
  import Price from '@/components/Price.vue'
  import SomeFacts from '@/components/SomeFacts.vue'
  import Advantages from './Advantages.vue'
  export default {
    name: 'MainView',
    components: {
      Advantages,
      SomeFacts,
      Price,
      Testimonials,
      FAQ,
      HeaderSection,
      SocialLinks
    },
    data () {
      return {
        msg: ''
      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/css/fonts.css';
  @import '../assets/css/general.scss';
</style>
