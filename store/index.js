/* eslint-disable no-console */
import JWTDecode from 'jwt-decode'
// import cookieparser from 'cookieparser'
import site from '@/db/site.yml'

export const state = () => ({
  site,
  drawer: false
})

export const actions = {
  nuxtServerInit({ commit }, { app, req }) {
    if (process.server && process.static) return
    if (!req.headers.cookie) return

    const { nodeCookie } = app.$cookies
    const accessTokenCookie = nodeCookie.parse(req.headers.cookie).access_token

    console.log('accessTokenCookie', accessTokenCookie)
    if (!accessTokenCookie) return

    const decoded = JWTDecode(accessTokenCookie)
    if (decoded) {
      console.log('TCL: nuxtServerInit -> decoded', decoded)
      commit('users/SET_USER', {
        uid: decoded.user_id,
        email: decoded.email,
        picture: decoded.picture
      })
    }
  }
}

export const mutations = {
  setDrawer(state, payload) {
    state.drawer = payload
  },

  toggleDrawer(state, payload) {
    state.drawer = !state.drawer
  }
}
