const state = {
  lectures: []
};

const mutations = {
  updateLectures: (state, data) => state.lectures.push(data)
};

const getters = {
  getAllLectures: state => state.lectures
};

const actions = {
  addLecture: async ({ commit }, data) => {
    await commit("updateLectures", data);
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
