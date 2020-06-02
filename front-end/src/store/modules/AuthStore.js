const state = {
  auth: !!localStorage.getItem('token'),
  user: localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null,
  token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
  email: localStorage.getItem('email') || null,
  name: localStorage.getItem('name') || null,
  levelID: localStorage.getItem('levelID') || null,
}

// getters
const getters = {
  id: state => {
    return (state.user) ? state.user.id : null
  },
  token: state => {
    return (state.token) ?? null
  },
  email: state => {
    return (state.email) ? state.email : null
  },
  name: state => {
    return (state.name) ? state.name : null
  },
  password: state => {
    return (state.user) ? state.user.password : null
  },
  levelID: (state, getters) => {
    if (getters.tokenPayload) {
      return getters.tokenPayload[0].level_id
    }
    return null
  },
  expired: state => {
    return (state.expired) ? state.expired : null
  },
  auth: state => {
    return state.auth ?? false
  },
  validToken: (state, getters) => {
    if (getters.tokenPayload) {
      if (getters.tokenPayload.validity) {
        if (getters.tokenPayload.validity > Math.floor(Date.now() / 1000)) {
          return true
        }
      }
    }
    return false
  },
  tokenPayload: state => {
    if (state.token) {
      let tokenParts = state.token.split('.')

      if (tokenParts.length === 3) {
        try {
          return JSON.parse(atob(tokenParts[1]))
        } catch (e) {
          return null
        }
      }
    }
    return null
  },
}

// actions
const actions = {
  authentication ({commit, dispatch}, data) {
    dispatch('clearSessionData')
    commit('recordAuthData', data)
    dispatch('recordAuthSessionData')
  },
  updateUser ({commit, dispatch}, data) {
    commit('updateUser', data)
    dispatch('recordAuthSessionData')
  },
  logout ({dispatch}) {
    dispatch('clearSessionData')
  },
  clearSessionData ({commit}) {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    localStorage.removeItem('levelID')
    commit('clearSession')
  },
  recordAuthSessionData ({state}) {
    localStorage.setItem('user', JSON.stringify(state.user))
    localStorage.setItem('token', state.token)
    localStorage.setItem('email', state.email)
    localStorage.setItem('password', state.password)
    localStorage.setItem('levelID', state.levelID)
  },
  updateToken ({commit}, data) {
    localStorage.setItem('token', data.token)
    commit('updateToken', data.token)
  }
}

// mutations
const mutations = {
  gravarUrlPassaporte (state, url) {
    state.urlPassaporte = url
  },
  recordAuthData (state, autenticacao) {
    let token = autenticacao.data.token
    state.auth = true
    state.token = token
    state.user = autenticacao.data.body[0]
    state.email = autenticacao.data.body[0].email
    state.levelID = autenticacao.data.body[0].level_id
  },
  clearSession (state) {
    state.auth = false
    state.user = null
    state.token = null
    state.levelID = null
    state.email = null
    state.expired = null
  },
  updateUser (state, user) {
    state.user = user
  },
  updateToken (state, token) {
    state.token = token
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
