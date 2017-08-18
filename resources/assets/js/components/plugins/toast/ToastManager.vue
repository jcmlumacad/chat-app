<template>
  <transition-group
    tag='div'
    name='vue-toast'
    class='vue-toast-manager-container'
    :class='classes'
  >
    <vue-toast
      v-for='(toast, index) in toasts'
      :key='toast.uid'
      :message='toast.message'
      :options='toast.options'
      :onDestroy='toast.onDestroy'
      :position='index'
    ></vue-toast>
  </transition-group>
</template>

<script>
    import VueToast from './Toast'

    // Options for Toast
    const defaultOptions = {
        max: 6, // limit the number of toasts
        position: 'top right' // position (top-right, top-left, bottom-right, bottom-left)
    }

    // Attributes for Toast
    const defaultAttributes = {
        className: 'tag is-info', // class nanme
        timeout: 3000, // millisecond
        closable: false // with close button or not
    }

    export default {
        name: 'toast-manager',

        data() {
            return {
                uid: 1, // Unique ID
                toasts: [],
                options: defaultOptions
            }
        },

        computed: {
            classes() {
                return this.updateClasses(this.options.position)
            },

            direction() {
                return this.updateDirections(this.options.position)
            }
        },

        methods: {
            showToast(message, options = defaultAttributes) {
                options.closable = options.closable || defaultAttributes.closable
                options.timeout = options.timeout || defaultAttributes.timeout
                options.className = options.className || defaultAttributes.className

                this.addToast(message, options)
                this.moveToast()

                return this
            },

            init(options) {
                options.max = options.max || defaultOptions.max
                options.postion = options.postion || defaultOptions.postion
                this.options = Object.assign(this.options, options || {})

                return this
            },

            addToast(message, options = {}) {
                if (!message) {
                    return
                }

                options.direction = this.direction

                const $this = this
                this.uid = this.uid + 1
                const uid = this.uid
                const toast = {
                    uid,
                    message,
                    options,
                    onDestroy() {
                        const counter = $this.toasts.findIndex(item => item.uid === uid)
                        $this.toasts.splice(counter, 1)
                    }
                }

                this.toasts.unshift(toast)
            },

            moveToast() {
                const max = this.options.max > 0 ? this.options.max : 9999

                this.toasts = this.toasts.reduceRight((prev, toast, counter) => {
                    if (counter + 1 > max) {
                        return prev
                    }

                    return [toast].concat(prev)
                }, [])
            },

            updateClasses(position) {
                return position.split(' ').reduce((prev, val) => {
                    prev[`__${val.toLowerCase()}`] = true

                    return prev
                }, {})
            },

            updateDirections(position) {
                return position.match(/top/i) ? '+' : '-'
            }
        },

        components: { VueToast }
    }
</script>

<style>
    .vue-toast-manager-container {
        position: fixed;
        width: 100%;
        z-index: 0;
    }

    .vue-toast-manager-container.__top {
        top: 10px;
    }

    .vue-toast-manager-container.__bottom {
        bottom: 10px;
    }

    .vue-toast-manager-container.__left {
        left: 10px;
    }

    .vue-toast-manager-container.__right {
        right: 10px;
    }
</style>
