import ToastManager from './ToastManager'

const ToastPlugin = {
    install(Vue, options) {
        Vue.component(ToastManager.name, ToastManager)
        Vue.mixin({
            components: {
                ToastManager
            }
        })
    }
}

export default ToastPlugin
