<template>
  <el-card class="el-box-card">
    <div class="chart-card-header__title">
      <span>{{ title }}</span>
      <span class="chart-card-header__icon">
        <i class="el-icon-message"></i>
      </span>
    </div>
    <div class="el-chart-card-content">
      <slot></slot>
    </div>
    <div class="el-chart-card-footer">
      <slot name="footer"></slot>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "ChartCard",
  props: {
    title: {
      type: String,
      default: ""
    },
    total: {
      type: [Function, Number, String],
      required: false,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
.el-box-card .el-card__body {
  padding: 20px 24px 8px;
}
.el-chart-card-footer {
  border-top: 1px solid #e8e8e8;
  padding-top: 9px;
  margin-top: 8px;
  font-size: 14px;
}

.el-card-content__desc {
  display: flex;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  align-items: center;
}
.el-card-content__desc > div:not(:last-child) {
  margin-right: 20px;
}
.el-card-content__desc > div > span:not(:last-child) {
  margin-right: 8px;
}
.el-card-content__desc > div > span:last-child {
  color: rgba(0, 0, 0, 0.85);
}
.el-card-content__desc > div > span > span {
  display: inline-block;
  vertical-align: bottom;
}
.el-card-content__desc > div > span > span:last-child {
  margin-left: 4px;
}
.el-card-content__desc > div > span > span.up{
  color: #b34747;
}
.el-card-content__desc > div > span > span.bottom{
  color: #ccc;
}

.el-card-content__text {
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
  color: #000;
  margin-top: 4px;
  margin-bottom: 0;
  font-size: 30px;
  height: 38px;
  line-height: 38px;
  margin-bottom: 12px;
}
.el-chart-card {
  background: #fff;
  padding: 20px 24px 8px;
}
.chart-card-header__title {
  position: relative;
  overflow: hidden;
  width: 100%;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  line-height: 22px;
}
.chart-card-header__icon {
  position: absolute;
  right: 0;
  top: 0;
}
</style>
