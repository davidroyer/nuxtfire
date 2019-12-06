// import { auth } from "@/services/firebase";
import Cookie from "js-cookie";

export const state = () => ({
  user: null
});

export const mutations = {
  SET_USER: (state, account) => {
    state.user = account;
  }
};

export const actions = {
  async login({ commit }, account) {
    console.log("FROM USERS LOGIN FILE");

    try {
      // Login the user
      await this.$auth.signInWithEmailAndPassword(
        account.email,
        account.password
      );

      // Get JWT from Firebase
      const token = await this.$auth.currentUser.getIdToken();
      const { email, uid, photoURL: picture } = this.$auth.currentUser;
      console.log("this.$auth.currentUser", this.$auth.currentUser);

      // Set JWT to the cookie
      Cookie.set("access_token", token);

      // Set the user locally
      commit("SET_USER", { email, uid, picture });
    } catch (error) {
      throw error;
    }
  }
};
