<template>
  <div id="app">
    <span v-on:click="demoView=!demoView" :class="demoView ? 'th-main-view': 'th-demo-view'">{{demoView ? '': '<< Вернуться назад'}}</span>
    <div v-if="demoView">
      <HeaderSection/>
      <Advantages/>
      <Solutions/>
      <IntroductionResult/>
      <IntroductionStep/>
      <Price/>
      <SomeFacts/>
      <Testimonials/>
      <FAQ/>
      <FormSend :formTitle="formSendMessage" :formClass="formSendClass" :buttonTitle="submitTitle" />
      <SocialLinks/>
    </div>
    <div v-else>
      <demo />
    </div>
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
import Demo from './Demo.vue'

export default {
  name: 'MainView',
  components: {
    Demo,
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
      demoView: true,
      formSendMessage: 'Оставте свои контакты\nи мы вам презвоним',
      formSendClass: 'th-form-footer',
      submitTitle: 'Узнать'
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/css/font-awesome.min.css';
  @import '../../assets/css/fonts.css';
  @import '../../assets/css/general';

  .th-main-view {
    background: url("../../assets/img/th-demo-icon.png") no-repeat;
    background-size: contain;
    box-shadow: 0 0 20px 2px #f3f3f3;
    border-radius: 15px;
    height: 80px;
    width: 80px;

    &:after {
      content: 'try demo';
      position: absolute;
      bottom: -18px;
      color: #fff;
      font-size: 12px;
      text-align: center;
      width: 100%;
    }
  }

  @media only screen and (max-width : 992px) {
    .th-main-view {
      height: 40px;
      width: 40px;
      &:after {
        bottom: -13px;
        font-size: 9px;
      }
    }
  }
</style>
