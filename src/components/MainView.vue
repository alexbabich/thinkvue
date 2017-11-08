<template>
  <div id="app">
    <header-section/>
    <b-container>
      <div class="hello">
        <h1>{{ msg }}</h1>
      </div>
    </b-container>
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
  export default {
    name: 'MainView',
    components: {
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
