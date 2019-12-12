/* eslint-disable no-console */
// import Cookie from 'js-cookie'
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
      // Cookie.set('access_token', token)
      this.$cookies.set('access_token', token)
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
    // Cookie.set('access_token', token)
    this.$cookies.set('access_token', token)
    console.log('TCL: googleLogin -> this.$cookies', this.$cookies)
    commit('SET_USER', { email, uid, picture })
    this.$router.push('/admin')
  },

  async logout({ commit }) {
    console.log('TCL: googleLogin -> this.$cookies', this.$cookies)

    await this.$auth.signOut()
    this.$cookies.remove('access_token')
    commit('SET_USER', null)
    this.$router.push('/')
    alert('Logged Out!')
  }
}
