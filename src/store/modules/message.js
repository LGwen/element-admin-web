import { getMessage } from "@/api/admin";
export const message = {
  namespaced: true,
  state: {
    messages: []
  },
  mutations: {
    SET_MESSAGE(state, d) {
      state.messages = d;
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
    }
  }
};
