import Vue from "vue";
import Vuex from "vuex";
import display from "./display";

Vue.use(Vuex);

export default new Vuex.Store({
  // plugins: [
  // createPersistedState({
  //   //   key: "vuex",
  // })
  // ],
  modules: {
    display
  }
});
