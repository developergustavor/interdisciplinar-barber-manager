import Vue from 'vue'
import Vuex from 'vuex'
import AuthStore from '@/store/modules/AuthStore'
import SnackbarStore from '@/store/modules/SnackbarStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    AuthStore,
    SnackbarStore
  }
})
