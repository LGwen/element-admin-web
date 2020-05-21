import { findAllUser, login, getUserInfo } from "@/api/admin";
import Vue from "vue";
import { ACCESS_TOKEN } from "@/store/mutation-types";
// 用于保存当前用户信息
export const user = {
  namespaced: true,
  state: {
    allUsers: [],
    token: "",
    roles: [],
    userInfo: {}
  },
  mutations: {
    mutationstest: (state, payload) => {
      state.testData = payload;
    },
    SET_USERS(state, data) {
      state.allUsers = data;
    },
    SET_TOKEN(state, data) {
      state.token = data;
    },
    SET_ROLES(state, data) {
      state.roles = data;
    },
    SET_USERINFO(state, data) {
      state.userInfo = data;
    }
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
    setRoles({ commit }, data) {
      return new Promise((resolve, reject) => {
        commit("SET_ROLES", data);
        resolve(data);
      });
    },
    getUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(res => {
          const { roles, user } = res.data;
          commit("SET_ROLES", roles);
          commit("SET_USERINFO", user);
          resolve(roles);
        }).catch(res => {
          reject(res)
        });
      });
    },
    setSidebar({ commit }, data) {
      commit("mutationstest", data);
    },
    getAllUsers({ commit }) {
      findAllUser().then(res => {
        commit("SET_USERS", res.data || []);
      });
    },
    login({ commit }, data) {
      return new Promise((resolve, reject) => {
        login({ ...data })
          .then(res => {
            debugger
            const token = res.data;
            Vue.ls.set(ACCESS_TOKEN, token, 7 * 24 * 60 * 60 * 1000);
            commit("SET_TOKEN", token);
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    logout({ commit }, data) {
      return new Promise((resolve, reject) => {
        commit("SET_TOKEN", "");
        commit("SET_ROLES", []);
        Vue.ls.remove(ACCESS_TOKEN);
        resolve();
      });
    }
  }
};
