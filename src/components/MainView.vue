<template>
  <div id="app">
    <header-section/>
    <b-container>
      <div class="hello">
        <h1>{{ msg }}</h1>
      </div>
    </b-container>
    <f-a-q/>
    <social-links/>
  </div>
</template>

<script>
  import HeaderSection from '@/components/HeaderSection.vue'
  import SocialLinks from '@/components/SocialLinks.vue'
  import FAQ from '@/components/FAQ.vue'
  export default {
    name: 'MainView',
    components: {
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
  @font-face {
    font-family: "MyriadProRegular";
    src: url("../assets/fonts/MyriadPro/MyriadProRegular/MyriadProRegular.eot");
    src: url("../assets/fonts/MyriadPro/MyriadProRegular/MyriadProRegular.eot?#iefix")format("embedded-opentype"),
    url("../assets/fonts/MyriadPro/MyriadProRegular/MyriadProRegular.woff") format("woff"),
    url("../assets/fonts/MyriadPro/MyriadProRegular/MyriadProRegular.ttf") format("truetype");
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: "MyriadProBold";
    src: url("../assets/fonts/MyriadPro/MyriadProBold/MyriadProBold.eot");
    src: url("../assets/fonts/MyriadPro/MyriadProBold/MyriadProBold.eot?#iefix")format("embedded-opentype"),
    url("../assets/fonts/MyriadPro/MyriadProBold/MyriadProBold.woff") format("woff"),
    url("../assets/fonts/MyriadPro/MyriadProBold/MyriadProBold.ttf") format("truetype");
    font-style: normal;
    font-weight: 700;
  }

  @font-face {
    font-family: "MyriadProItalic";
    src: url("../assets/fonts/MyriadPro/MyriadProItalic/MyriadProItalic.eot");
    src: url("../assets/fonts/MyriadPro/MyriadProItalic/MyriadProItalic.eot?#iefix")format("embedded-opentype"),
    url("../assets/fonts/MyriadPro/MyriadProItalic/MyriadProItalic.woff") format("woff"),
    url("../assets/fonts/MyriadPro/MyriadProItalic/MyriadProItalic.ttf") format("truetype");
    font-style: italic;
    font-weight: normal;
  }

  @font-face {
    font-family: "MyriadProSemiBold";
    src: url("../assets/fonts/MyriadPro/MyriadProSemiBold/MyriadProSemiBold.eot");
    src: url("../assets/fonts/MyriadPro/MyriadProSemiBold/MyriadProSemiBold.eot?#iefix")format("embedded-opentype"),
    url("../assets/fonts/MyriadPro/MyriadProSemiBold/MyriadProSemiBold.woff") format("woff"),
    url("../assets/fonts/MyriadPro/MyriadProSemiBold/MyriadProSemiBold.ttf") format("truetype");
    font-style: normal;
    font-weight: 700;
  }

  @font-face {
    font-family: "MyriadProBoldItalic";
    src: url("../assets/fonts/MyriadPro/MyriadProBoldItalic/MyriadProBoldItalic.eot");
    src: url("../assets/fonts/MyriadPro/MyriadProBoldItalic/MyriadProBoldItalic.eot?#iefix")format("embedded-opentype"),
    url("../assets/fonts/MyriadPro/MyriadProBoldItalic/MyriadProBoldItalic.woff") format("woff"),
    url("../assets/fonts/MyriadPro/MyriadProBoldItalic/MyriadProBoldItalic.ttf") format("truetype");
    font-style: italic;
    font-weight: 700;
  }

  @font-face {
    font-family: "MyriadProSemiBoldItalic";
    src: url("../assets/fonts/MyriadPro/MyriadProSemiBoldItalic/MyriadProSemiBoldItalic.eot");
    src: url("../assets/fonts/MyriadPro/MyriadProSemiBoldItalic/MyriadProSemiBoldItalic.eot?#iefix")format("embedded-opentype"),
    url("../assets/fonts/MyriadPro/MyriadProSemiBoldItalic/MyriadProSemiBoldItalic.woff") format("woff"),
    url("../assets/fonts/MyriadPro/MyriadProSemiBoldItalic/MyriadProSemiBoldItalic.ttf") format("truetype");
    font-style: italic;
    font-weight: 600;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
  }

</style>
