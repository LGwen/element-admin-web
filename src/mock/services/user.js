import Mock from "mockjs2";
import { getRequestbody, jsonResult } from "../utils";

const info = options => {
  console.log("options", options);
  const userInfo = {
    user: { id: 2, username: "admin", password: "123456" },
    roles: ["R001", "R002", "R003"]
  };
  return jsonResult(userInfo, "200", "success");
};

Mock.mock(/\/getUserInfo/, "get", info);
