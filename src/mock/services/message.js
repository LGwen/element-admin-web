import Mock from "mockjs2";
import { jsonResult } from "../utils";
const message = () => {
  const msg = [
    {
      title: "您收到了新的开发任务",
      time: "10分钟前",
      id: 1
    },
    {
      title: "本周任务总结",
      time: "昨天",
      id: 2
    },
    {
      title: "测试结果反馈",
      time: "昨天",
      id: 3
    }
  ];
  return jsonResult(msg, 200, "success");
};
Mock.mock(/\/message\/get/, "get", message);
