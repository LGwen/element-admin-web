<template>
  <v-chart :options="bar" :autoresize="true" :padding="[36, 5, 18, 0]" />
</template>

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

<script>
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
export default {
  data() {
    const data = [];

    for (let i = 0; i <= 360; i++) {
      const t = (i / 180) * Math.PI;
      const r = Math.sin(2 * t) * Math.cos(2 * t);
      data.push([r, i]);
    }

    return {
      bar: {
        title: {
          text: "用户数统计"
        },
        color: ["#42a2fc"],
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
          type: "value"
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130, 150, 80, 70, 110, 130],
            type: "bar",
            barWidth: 24,
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
