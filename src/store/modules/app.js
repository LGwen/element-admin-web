
// import Vue from "vue";
// 用于存储应用整体信息
export const app = {
  namespaced: true,
  state: {
    token: ''
  },
  mutations: {
  },
  actions: {
    /**
     *
     * @param {*} 第一个参数包含了下面这些
     * {
        state,      // 等同于 `store.state`，若在模块中则为局部状态
        rootState,  // 等同于 `store.state`，只存在于模块中
        commit,     // 等同于 `store.commit`
        dispatch,   // 等同于 `store.dispatch`
        getters,    // 等同于 `store.getters`
        rootGetters // 等同于 `store.getters`，只存在于模块中
      }
     * @param {*} data
     */
    setSidebar({ commit }, data) {
      commit("mutationstest", data);
    }
  }
};
