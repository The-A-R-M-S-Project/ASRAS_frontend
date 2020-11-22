import Vue from "vue";
import Vuex from "vuex";
import timeTable from "./timeTable";

Vue.use(Vuex);

export default new Vuex.Store({
  //   plugins: [
  //     createPersistedState({
  //       key: "vuex",
  //       }
  //     })
  //   ],
  modules: {
    timeTable
  }
});
