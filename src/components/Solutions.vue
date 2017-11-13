<template>
    <b-container class="pt-5 pb-5">
        <p class="th-block-title text-center">Некоторые факты</p>
        <ul class="list-unstyled row th-solution-list">
            <li v-for="solution in solutionList" :key="solution.id" class="col-sm-4 th-solution-item mb-3">
                <p class="th-fact-text">{{solution.title}}</p>
                <p class="th-fact-text">{{solution.text}}</p>
            </li>
        </ul>
        <view-more/>
    </b-container>
</template>

<script>
  import ViewMore from '@/components/ViewMore.vue'

  export default {
    components: {ViewMore},
    name: 'Solutions',
    data () {
      return {
        solutionList: [
          {
            title: '',
            text: ''
          },
          {
            title: '',
            text: ''
          },
          {
            title: '',
            text: ''
          },
          {
            title: '',
            text: ''
          },
          {
            title: '',
            text: ''
          },
          {
            title: '',
            text: ''
          },
          {
            title: '',
            text: ''
          },
          {
            title: '',
            text: ''
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
