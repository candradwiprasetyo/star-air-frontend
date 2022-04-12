import cookie from "cookie";

export const state = () => ({
  isLogin: false,
});

export const mutations = {
  SET_LOGIN(state, data) {
    state.isLogin = data;
  },
};

export const actions = {
  // nuxtServerInit  dijalankan oleh Nuxt.js sebelum server-rendering setiap page

  async nuxtServerInit({ commit }, context) {
    if (context.req && context.req.headers && context.req.headers.cookie) {
      const cookies = cookie.parse(context.req.headers.cookie || "");
      let star_air_login = (cookies.star_air_login) ? cookies.star_air_login : '';

      if (star_air_login) {
        commit("SET_LOGIN", star_air_login);
      } else {
        commit("SET_LOGIN", false);
      }
    }
  }
};
