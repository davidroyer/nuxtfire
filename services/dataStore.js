export const store = {
  state: {
    currentKey: null,
    mainMenuIsOpen: false
  },

  setCurrentKey(key) {
    this.state.currentKey = key
  }
}
