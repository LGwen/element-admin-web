import Mock from "mockjs2";
import { getRequestbody, jsonResult } from "../utils";
const login = options => {
  const body = getRequestbody(options);
  // eslint-disable-next-line eqeqeq
  if (body.username == "admin" && body.password == "123456") {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyIiwiZXhwIjoxNTkwMzk5NDExLCJpYXQiOjE1OTAzOTU4MTF9.uglKtiSqsbEPzRqoID7ff-blbZoTdtHNqnFoB6GBP0U";
    return jsonResult(token, 200, "success");
  } else {
    return jsonResult("", 401, "账号或密码错误");
  }
};

Mock.mock(/\/login/, "post", login);
