import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import axios from 'axios'
import Moment from 'moment'
import Form from './core/Form'
import env from './env'
import io from 'socket.io-client'
import ToastPlugin from './components/plugins/toast/ToastPlugin'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(ToastPlugin)

window.env = env
window.Vue = Vue
window.Vuex = Vuex
window.axios = axios
window.Moment = Moment

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.Form = Form

let debug = env.APP_DEBUG
let url = env.APP_URL

if (debug) {
    url += ':' + env.NODE_PORT
}

window.socket = io.connect(url)
