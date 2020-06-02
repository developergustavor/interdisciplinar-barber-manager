const state = {
  snackbar: null,
  text: '',
  type: 'success'
}

// getters
const getters = {
  snackbar: state => {
    return state.snackbar
  },
  text: state => {
    return state.text
  },
  type: state => {
    return state.type
  }
}

// actions
const actions = {
  showSuccessSnackbar ({ commit }, data) {
    commit('showSuccessSnackbar', data.config)
  },
  hideSnackbar ({ commit }) {
    commit('hideSnackbar')
  }
}

// mutations
const mutations = {
  showSuccessSnackbar (state, config) {
    state.snackbar = true
    state.text = config.text
    state.type = config.type
  },
  hideSnackbar (state) {
    state.snackbar = null
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
