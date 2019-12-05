import JWTDecode from "jwt-decode";
import cookieparser from "cookieparser";
import { log } from "util";

export const actions = {
  // nuxtClientInit({ commit }, user) {
  //   if (!user) return
  //   commit('users/SET_USER', {
  //     email: user.email,
  //     uid: user.uid
  //   })
  // },

  nuxtServerInit({ commit }, { req }) {
    console.log("nuxtServerInit -> prechecks");

    if (process.server && process.static) return;
    if (!req.headers.cookie) return;
    console.log("nuxtServerInit -> PostChecks");

    const parsed = cookieparser.parse(req.headers.cookie);
    const accessTokenCookie = parsed.access_token;

    if (!accessTokenCookie) return;

    const decoded = JWTDecode(accessTokenCookie);

    if (decoded) {
      commit("users/SET_USER", {
        uid: decoded.user_id,
        email: decoded.email
      });
    }
  }
};
