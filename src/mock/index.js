const Mock = require("mockjs2");
require("./services/auth");
require("./services/user");
Mock.setup({
  timeout: 800 // setter delay time
});
