if (process.browser) {
  console.log('FIRED FROM STORE:  ', localStorage.currentKey);
}
export const store = {
  state: {
    currentKey: '',
    mainMenuIsOpen: false
  },

  setCurrentKey(key) {
    this.state.currentKey = key
  }
}
