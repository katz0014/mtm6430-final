import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: "",
    email: "",
    password: ""
  },
  mutations: {
    USER_INFO(state, data) {
      state.username = data.username;
      state.email = data.email;
      state.password = data.password;
    }
  },
  actions: {
    updateUser({ commit }, { data }) {
      // commit the mutation to update the state, sending the payload as {quantity, product }
      commit("USER_INFO", {
        username: data.username,
        email: data.email,
        password: data.password
      });
    }
  },
  getters: {
    getInfo: state => data => {
      return state.data;
    },
    getUserIndex: state => data => {
      return state.data.findIndex(data => data.username);
    }
  }
});
