import Vue from "vue";
import Vuex from "vuex";
import { app } from "./modules/app";
import { user } from "./modules/user";
import { permission } from './modules/permission';
import { getters } from './getters.js';
// console.log(getters)
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    rootTest: 1
  },
  modules: {
    app,
    user,
    permission
  },
  actions: {},
  mutations: {},
  getters
});
