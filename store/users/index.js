import Cookie from 'js-cookie'
import { GoogleProvider } from '@/plugins/firebase'

export const state = () => ({
  user: null
})

export const mutations = {
  SET_USER: (state, account) => {
    state.user = account
  }
}

export const actions = {
  async login({ commit }, account) {
    try {
      // Login the user
      await this.$auth.signInWithEmailAndPassword(
        account.email,
        account.password
      )

      // Get JWT from Firebase
      const token = await this.$auth.currentUser.getIdToken()
      const { email, uid, photoURL: picture } = this.$auth.currentUser

      // Set JWT to the cookie
      Cookie.set('access_token', token)
      commit('SET_USER', { email, uid, picture })
    } catch (error) {
      throw error
    }
  },

  async googleLogin({ commit }) {
    const result = await this.$auth.signInWithPopup(GoogleProvider)
    // eslint-disable-next-line no-console
    console.log('TCL: googleLogin -> result', result)
    const token = await this.$auth.currentUser.getIdToken()
    const { email, uid, photoURL: picture } = this.$auth.currentUser

    // Set JWT to the cookie
    Cookie.set('access_token', token)
    commit('SET_USER', { email, uid, picture })
    this.$router.push('/admin')
  },

  async logout() {
    await this.$auth.signOut()
    await Cookie.remove('access_token')
    this.$router.push('/')
  }
}
