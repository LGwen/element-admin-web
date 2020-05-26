import { getMessage, getProblem } from "@/api/admin";
export const message = {
  namespaced: true,
  state: {
    messages: [],
    problems: []
  },
  mutations: {
    SET_MESSAGE(state, d) {
      state.messages = d;
    },
    SET_PROBLEMS(state, d) {
      state.problems = d;
    }
  },
  actions: {
    getMessage({ commit }, data) {
      return new Promise((resolve, reject) => {
        getMessage()
          .then(res => {
            const message = res.data;
            commit("SET_MESSAGE", message);
            resolve(message);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    getProblem({ commit }, data) {
      return new Promise((resolve, reject) => {
        getProblem()
          .then(res => {
            const problems = res.data;
            commit("SET_PROBLEMS", problems);
            resolve(problems);
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  }
};
