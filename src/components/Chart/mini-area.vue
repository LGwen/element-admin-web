<template>
  <div class="antv-chart-mini">
    <div class="chart-wrapper" style="height: 28px">
      <v-chart :options="line" :autoresize="true">
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
  name: "MiniArea",
  data() {
    return {
      data,
      tooltip,
      scale,
      height: 100,

      line: {
        color: ["#42a2fc"],
        tooltip: {
          show: true,
          trigger: "axis",
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
        grid: {
          left: 0,
          right: 0,
          bottom: 0,
          top: 0
        },
        xAxis: {
          show: false,
          type: "category",
          boundaryGap: false,
          data: ["05-01", "05-02", "05-03", "05-04", "05-05", "05-06", "05-07"]
        },
        yAxis: {
          show: false,
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            symbol: "none",
            areaStyle: {},
            smooth: true
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

