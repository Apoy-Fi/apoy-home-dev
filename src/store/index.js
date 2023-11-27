import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lang: "en",
    isMobile: false,
    InnerWidth: 0,
    darkTheme: false,
    limitWidth: 1300,
    data: 0,
  },
  mutations: {
    data(state, data) {
      state.data = data;
    },
    darkTheme(state, data) {
      state.darkTheme = data;
    },
    isMobile(state, data) {
      state.isMobile = data;
    },
    setInnerWidth(state, data) {
      state.InnerWidth = data;
    },
    lang(state, data) {
      state.lang = data;
    },
  },
  plugins: [
    createPersistedState({
      reducer(val) {
        return {
          lang: val.lang,
          isMobile: val.isMobile,
          darkTheme: val.darkTheme,
          data: val.data,
        };
      },
    }),
  ],
  modules: {},
  actions: {},
});