import { createStore } from "vuex";
import persistedState from "vuex-persistedstate";

export default createStore({
  plugins: [persistedState()],
  state: {
    executed: false,
  },
  mutations: {
    isExecuted(state, payload) {
      state.executed = payload;
    },
  },
  actions: {
    //
  },
  modules: {
    //
  },
});
