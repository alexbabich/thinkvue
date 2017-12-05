<template>
    <button :class="classObject"
            type="button"
            :aria-label="label"
            :aria-controls="target.id ? target.id : target"
            :aria-expanded="toggleState ? 'true' : 'false'"
            @click="onclick"
    >
        <div id="nav-icon1">
            <span></span>
            <span></span>
            <span></span>
        </div>
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
        type: String
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

<style lang="scss" scoped>
    #nav-icon1,
    #nav-icon1:focus,
    #nav-icon1:active,
    .navbar-light .navbar-toggler,
    .navbar-light .navbar-toggler:focus,
    .navbar-light .navbar-toggler:active {
        outline: none;
    }
    .navbar-light .navbar-toggler {
        border: none;
        color: transparent;
        padding: 0;
    }
    #nav-icon1 {
        outline: none;
        width: 25px;
        height: 23px;
        position: relative;
        margin: auto;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .5s ease-in-out;
        -moz-transition: .5s ease-in-out;
        -o-transition: .5s ease-in-out;
        transition: .5s ease-in-out;
        cursor: pointer;
        &.open {
            span {
                &:nth-child(1) {
                    top: 10px;
                    -webkit-transform: rotate(135deg);
                    -moz-transform: rotate(135deg);
                    -o-transform: rotate(135deg);
                    transform: rotate(135deg);
                }
                &:nth-child(2) {
                    opacity: 0;
                    left: -9999999px;
                }
                &:nth-child(3) {
                    top: 10px;
                    -webkit-transform: rotate(-135deg);
                    -moz-transform: rotate(-135deg);
                    -o-transform: rotate(-135deg);
                    transform: rotate(-135deg);
                }
            }
        }
        span {
            display: block;
            position: absolute;
            height: 2px;
            width: 26px;
            background: #fff;
            border-radius: 9px;
            opacity: 1;
            left: 0;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition: .25s ease-in-out;
            -moz-transition: .25s ease-in-out;
            -o-transition: .25s ease-in-out;
            transition: .25s ease-in-out;
            &:nth-child(1) {
                top: 0;
            }
            &:nth-child(2) {
                top: 10px;
            }
            &:nth-child(3) {
                top: 20px;
            }
        }
    }
</style>