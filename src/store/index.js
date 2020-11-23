import Vue from "vue";
import Vuex from "vuex";
import timeTable from "./timeTable";
import display from "./display";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    timeTable,
    display
    // plugins: [
    // createPersistedState({
    //   //   key: "vuex",
    // })
    // ],
  }
});
