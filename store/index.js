import JWTDecode from 'jwt-decode'
import cookieparser from 'cookieparser'
import site from '@/db/site.yml'

export const state = () => ({
  site,
  drawer: false
})

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (process.server && process.static) return
    if (!req.headers.cookie) return

    const parsed = cookieparser.parse(req.headers.cookie)
    const accessTokenCookie = parsed.access_token
    if (!accessTokenCookie) return

    const decoded = JWTDecode(accessTokenCookie)

    if (decoded) {
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
