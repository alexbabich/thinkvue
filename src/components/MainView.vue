<template>
  <div id="app">
    <HeaderSection/>
    <Advantages/>
    <Solutions/>
    <Price/>
    <SomeFacts/>
    <Testimonials/>
    <FAQ/>
    <SocialLinks/>
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
  import Solutions from './Solutions.vue'
  export default {
    name: 'MainView',
    components: {
      Solutions,
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
      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/css/font-awesome.min.css';
  @import '../assets/css/fonts.css';
  @import '../assets/css/general.scss';
</style>
