export default {
  state: {
    currentKey: null,
    mainMenuIsOpen: false
  },

  setCurrentKey(key) {
    this.state.currentKey = key
  }
}
