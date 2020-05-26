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
    },
    {
      title: "培训通知",
      time: "5-11",
      content:
        "腾讯云对华南区技术支持组进行赋能培训，培训内容：政务服务售前宣讲，培训时间:2020-05-29 18:00,请华南区技术支持组成员按时参加",
      from: "王梅子",
      id: 4
    }
  ];
  return jsonResult(msg, 200, "success");
};
Mock.mock(/\/message\/get/, "get", message);
