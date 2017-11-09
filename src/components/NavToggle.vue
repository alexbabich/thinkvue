<template>
    <button :class="classObject"
            type="button"
            :aria-label="label"
            :aria-controls="target.id ? target.id : target"
            :aria-expanded="toggleState ? 'true' : 'false'"
            @click="onclick"
    >
        <slot>
            <div id="nav-icon1">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </slot>
    </button>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'NavToggle',
    mounted () {
      $('#nav-icon1').click(function () {
        $(this).toggleClass('open')
      })
    },
    computed: {
      classObject () {
        return [
          'navbar-toggler',
          'navbar-toggler-' + this.position
        ]
      }
    },
    data () {
      return {
        toggleState: false
      }
    },
    props: {
      label: {
        type: String,
        default: 'Toggle navigation'
      },
      position: {
        type: String,
        default: 'right'
      },
      target: {
        required: true
      }
    },
    methods: {
      onclick () {
        const target = this.target
        $('.' + target + '').toggle()
        $('body').toggleClass('th-menu-open')
        this.$root.$emit('bv::toggle::collapse', this.target)
      },
      handleStateEvt (target, state) {
        if (target === this.target || target === this.target.id) {
          this.toggleState = state
        }
      }
    }
}
</script>

<style lang="scss">

</style>
