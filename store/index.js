import site from '@/db/site.yml'

export const state = () => ({
  site,
  drawer: false
})

export const mutations = {
  setDrawer(state, payload) {
    state.drawer = payload
  },

  toggleDrawer(state, payload) {
    state.drawer = !state.drawer
  }
}
