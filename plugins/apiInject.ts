import Vue from 'vue'
import { setAxiosInstance } from '~/utils/fetch'
import { api } from '~/api'

Vue.prototype.$API = api

export default <Nuxt.Plugin>function (ctx, inject) {
  setAxiosInstance(ctx.$axios)
  // @ts-ignore
  ctx.$API = api
  inject('$API', api)
}
