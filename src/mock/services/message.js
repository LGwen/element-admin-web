import Mock from "mockjs2";
import { jsonResult } from "../utils";
const message = () => {
  const msg = [
    {
      title: "您收到了新的开发任务",
      time: "10分钟前",
      content:
        "项目组新增社保开发任务，需求评审已通过，请开发组完成后续开发任务",
      from: "刘威",
      id: 1
    },
    {
      title: "本周任务总结",
      time: "昨天",
      content:
        "项目组新增社保开发任务，需求评审已通过，请开发组完成后续开发任务",
      from: "刘备",
      id: 2
    },
    {
      title: "测试结果反馈",
      time: "昨天",
      content:
        "测试组针对v1.7版本进行第一轮sit测试，本轮测试共发现问题数5，其中轻微缺陷4，建议修改1",
      from: "曾咣",
      id: 3
    }
  ];
  return jsonResult(msg, 200, "success");
};
Mock.mock(/\/message\/get/, "get", message);
