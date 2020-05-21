<template>
  <div class="antv-chart-mini">
    <div class="chart-wrapper" style="height: 28px">
      <v-chart :options="bar" :autoresize="true">
        <!-- <v-tooltip />
        <v-smooth-area position="x*y" />-->
      </v-chart>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";

const data = [];
const beginDay = new Date().getTime();

for (let i = 0; i < 10; i++) {
  data.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format(
      "YYYY-MM-DD"
    ),
    y: Math.round(Math.random() * 10)
  });
}

const tooltip = [
  "x*y",
  (x, y) => ({
    name: x,
    value: y
  })
];
const scale = [
  {
    dataKey: "x",
    min: 2
  },
  {
    dataKey: "y",
    title: "时间",
    min: 1,
    max: 22
  }
];

export default {
  name: "MiniBar",
  data() {
    return {
      data,
      tooltip,
      scale,
      height: 100,

      bar: {
        title: {
          text: "用户数统计"
        },
        color: ["#42a2fc"],
        grid: {
          left: 0,
          right: 0,
          bottom: 0,
          top: 0
        },
        tooltip: {
          show: true,
          trigger: "item",
          // axisPointer: {
          //   type: "line",
          //   lineStyle: {
          //     color: "#808080"
          //   }
          // },
          backgroundColor: "#000000aa",
          padding: [10, 20],
          textStyle: {
            color: "#fff"
          }
        },
        xAxis: {
          type: "category",

          show: false,
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ]
        },
        yAxis: {
          type: "value",
          show: false
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130, 150, 80, 70, 110, 130],
            type: "bar",
            barWidth: 10,
            showBackground: true
            // backgroundStyle: {
            //   color: "rgba(220, 220, 220, 0.8)"
            // }
          }
        ]
      }
    };
  }
};
</script>
<style>
/**
 * 默认尺寸为 600px×400px，如果想让图表响应尺寸变化，可以像下面这样
 * 把尺寸设为百分比值（同时请记得为容器设置尺寸）。
 */
.echarts {
  width: 100%;
  height: 100%;
}
</style>

