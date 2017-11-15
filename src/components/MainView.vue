<template>
  <div id="app">
    <HeaderSection/>
    <Advantages/>
    <Solutions/>
    <IntroductionResult/>
    <IntroductionStep/>
    <Price/>
    <SomeFacts/>
    <Testimonials/>
    <FAQ/>
    <FormSend :formTitle="formSendMessage" :formClass="formSendClass"/>
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
  import Advantages from '@/components/Advantages.vue'
  import Solutions from '@/components/Solutions.vue'
  import IntroductionResult from '@/components/IntroductionResult.vue'
  import IntroductionStep from '@/components/IntroductionStep.vue'
  import FormSend from '@/components/FormSend.vue'
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
      SocialLinks,
      IntroductionResult,
      IntroductionStep,
      FormSend
    },
    data () {
      return {
        formSendMessage: 'Оставте свои контакты\nи мы вам презвоним',
        formSendClass: 'th-form-footer'
      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/css/font-awesome.min.css';
  @import '../assets/css/fonts.css';
  @import '../assets/css/general.scss';
</style>
