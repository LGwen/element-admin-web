import Vue from "vue";
import Vuex from "vuex";
import { app } from "./modules/app";
import { user } from "./modules/user";
import { permission } from "./modules/permission";
import { message } from "./modules/message";
import { getters } from "./getters.js";
// console.log(getters)
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    rootTest: 1
  },
  modules: {
    app,
    user,
    permission,
    message
  },
  actions: {},
  mutations: {},
  getters
});
