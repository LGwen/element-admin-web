import { axios } from "@/utils/request";
import api from './config'
// import Qs from "qs";
// =================系统服务====================/
export function login(param) {
  return axios({
    headers: {
      "Content-Type": "application/json"
    },
    transformRequest: [
      function(data) {
        return JSON.stringify(data);
      }
    ],
    url: api.login,
    method: "post",
    data: param
  });
}
// 添加新用户 addUser
export function addUser(param) {
  return axios({
    headers: {
      "Content-Type": "application/json"
    },
    transformRequest: [
      function(data) {
        return JSON.stringify(data);
      }
    ],
    url: api.addUser,
    method: "post",
    data: param
  });
}
export function getUserInfo(id) {
  return axios({
    url: api.getUserInfo,
    method: "get",
    data: {}
  });
}
export function getUserById(id) {
  return axios({
    url: `/user/${id}`,
    method: "get",
    data: {}
  });
}
export function findAllUser() {
  return axios({
    url: `/user/all`,
    method: "get",
    data: {}
  });
}
// 更新用户信息
export function updateUser(param) {
  return axios({
    headers: {
      "Content-Type": "application/json"
    },
    transformRequest: [
      function(data) {
        return JSON.stringify(data);
      }
    ],
    url: api.updateUser,
    method: "post",
    data: param
  });
}
// 删除用户

export function deleteUser(param) {
  return axios({
    headers: {
      "Content-Type": "application/json"
    },
    transformRequest: [
      function(data) {
        return JSON.stringify(data);
      }
    ],
    url: api.deleteUser,
    method: "post",
    data: param
  });
}
// 获取个人消息
export function getMessage() {
  return axios({
    url: api.getMessage,
    method: "get",
    data: {}
  });
}

