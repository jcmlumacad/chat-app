<template>
  <transition name="vue-toast">
    <div
      class="vue-toast-container"
      @mouseover='stopTimer'
      @mouseleave='startTimer'
      :style='style'
      :class='[className]'
    >
      <span v-html='message' class="vue-toast-message"></span>
      <span
        class='delete vue-toast-closable'
        v-if='options.closable'
        @click='remove'
      />
      </span>
    </div>
  </transition>
</template>

<script>
    export default {
        props: {
            message: { required: true },
            position: { required: true },
            onDestroy: { required: true, type: Function },
            options: { type: Object }
        },

        data() {
            return { isShown: false }
        },

        computed: {
            className() {
                return this.options.className
            },

            style() {
                return `transform: translateY(${this.options.direction}${this.position * 115}%)`
            },

            allOptions() {
                return Object.assign({}, this.options)
            }
        },

        mounted() {
            setTimeout(() => {
                this.isShown = true
            }, 50)

            if (!this.allOptions.closable) {
                this.startLazyAutoDestroy()
            }
        },

        methods: {
            remove() {
                this.clearTimer()
                this.onDestroy()
            },

            startLazyAutoDestroy() {
                this.clearTimer()
                this.timerDestroy = setTimeout(() => {
                    this.remove()
                }, this.allOptions.timeout)
            },

            clearTimer() {
                if (this.timerDestroy) {
                    clearTimeout(this.timerDestroy)
                }
            },

            startTimer() {
                if (!this.allOptions.closable) {
                    this.startLazyAutoDestroy()
                }
            },

            stopTimer() {
                if (!this.options.closable) {
                    this.clearTimer()
                }
            }
        }
    }
</script>

<style>
    .vue-toast-manager-container.__top .tag {
        top: 0;
    }

    .vue-toast-manager-container.__bottom .tag {
        bottom: 0;
    }

    .vue-toast-manager-container.__left .tag {
        left: 0;
    }

    .vue-toast-manager-container.__right .tag {
        right: 0;
    }

    .vue-toast-closable {
        opacity: .7;
        transition: opacity .15s ease-in-out;
        backface-visibility: hidden;
    }

    .vue-toast-closable:hover {
        opacity: .9;
    }

    .vue-toast-closable::before,
    .vue-toast-closable::after {
        content: '';
        position: absolute;
    }

    .tag {
        position: absolute;
        transform: translateY(0);
        transition: transform .2s ease-out;
        -webkit-box-shadow: 0 5px 15px -6px black;
        -moz-box-shadow: 0 5px 15px -6px black;
        box-shadow: 0 5px 15px -6px black;
    }

    .vue-toast-container {
      width: auto;
      max-width: 575px;
      white-space: inherit;
      line-height: 1.5;
      height: 35px;
      overflow-y: auto;
    }

    .vue-toast-message {
      width: auto;
      max-width: 500px;
    }

    /* For transitions */
    .vue-toast-enter-active {
      opacity: 0;
      transition: all .4s ease-out;
    }

    .vue-toast-enter-to {
      opacity: 1;
    }

    .vue-toast-leave-active {
      opacity: 1;
      transition: all .3s ease-out;
    }

    .vue-toast-leave-to {
      opacity: 0;
    }
</style>
