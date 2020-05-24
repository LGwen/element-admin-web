<template>
  <v-chart :options="polar" style="height: 350px;" />
</template>

<style>
/**
 * The default size is 600px×400px, for responsive charts
 * you may need to set percentage values as follows (also
 * don't forget to provide a size for the container).
 */
.echarts {
  width: 100%;
}
</style>

<script>
import "echarts/lib/component/tooltip";
import "echarts/lib/chart/line";
import "echarts/lib/component/polar";

export default {
  name: "polar",
  data() {
    var data = [];

    for (var i = 0; i <= 100; i++) {
      var theta = (i / 100) * 360;
      var r = 5 * (1 + Math.sin((theta / 180) * Math.PI));
      data.push([r, theta]);
    }

    return {
      polar: {
        title: {
          text: "极坐标双数值轴"
        },
        legend: {
          data: ["line"]
        },
        polar: {},
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        angleAxis: {
          type: "value",
          startAngle: 0
        },
        radiusAxis: {},
        series: [
          {
            coordinateSystem: "polar",
            name: "line",
            type: "line",
            data: data
          }
        ],
        animationDuration: 2000
      }
    };
  }
};
</script>
