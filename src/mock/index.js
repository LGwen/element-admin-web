const Mock = require("mockjs2");
require("./services/auth");
require("./services/user");
require("./services/message");

Mock.setup({
  timeout: 800 // setter delay time
});
