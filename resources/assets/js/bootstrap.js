import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import axios from 'axios'
import Moment from 'moment'
import Form from './core/Form'

window.Vue = Vue
window.Vuex = Vuex
Vue.use(VueRouter)
Vue.use(Vuex)

window.axios = axios
window.Moment = Moment

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.Form = Form
