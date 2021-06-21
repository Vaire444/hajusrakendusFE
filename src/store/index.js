import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "Haircut",
    date: new Date(),
  },
  mutations: {
    setName(state, payload) {
      state.name = payload;
    },
    setDate(state, payload) {
      state.date = payload;
    },
  },
  actions: {},
  modules: {},
});
