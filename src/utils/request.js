// import Vue from "vue";
import axios from "axios";
import { VueAxios } from "./axios";
import Vue from "vue";
import { ACCESS_TOKEN } from "@/store/mutation-types";
// 创建 axios 实例
const service = axios.create({
  // baseURL: process.env.VUE_APP_API_BASE_URL,
  baseURL: "http://localhost:8080",
  timeout: 60000 // 请求超时时间
});
const handleError = msg => {};
const err = error => {
  if (error.response) {
    console.log("errrr");
  }
  return Promise.reject(error);
};

// request interceptor
service.interceptors.request.use(config => {
  const token = Vue.ls.get(ACCESS_TOKEN)
  if (token) {
    config.headers.token = token
  }
  return config;
}, err);

// response interceptor
service.interceptors.response.use(response => {
  // eslint-disable-next-line eqeqeq
  if (response.status === 200) {
    return response.data;
  } else {
    handleError(response.data.errrmsg);
  }
}, err);

const installer = {
  vm: {},
  install(Vue) {
    Vue.use(VueAxios, service);
  }
};

export { installer as VueAxios, service as axios };
