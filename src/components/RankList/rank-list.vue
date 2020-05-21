<template>
  <div class="rank-list-box">
    <div class="rank-list-title">省份排行</div>
    <ul class="rank-list">
      <li v-for="(item,index) in ranklist" :key="item.id" class="rank-cell">
        <div class="rank-cell-order">{{ index+1 }}</div>
        <div class="rank-cell-label">{{ item.label }}</div>
        <div class="rank-cell-num">{{ item.value }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RankList",
  props: {
    datalist: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  computed: {
    ranklist() {
      if (this.datalist && this.datalist.length) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        return this.datalist.sort((a, b) => b.value - a.value);
      }
      return [];
    }
  }
};
</script>

<style lang="less" scoped>
.rank-list {
  .rank-cell {
    &:first-child{
      margin-top: 16px;
    }
    &:not(:first-child){
      margin-top: 12px;
    }
    &:nth-of-type(1),
    &:nth-of-type(2),
    &:nth-of-type(3) {
      .rank-cell-order {
        background: #333;
        color: #fff;
      }
    }

    &-order {
      width: 20px;
      height: 20px;
      border-radius: 20px;
      background: #eee;
      font-weight: bold;
      text-align: center;
      line-height: 20px;
      display: inline-block;
      vertical-align: middle;
      margin-right: 20px;
      font-size: 12px;
    }
    &-label {
      display: inline-block;
      vertical-align: middle;
      font-size: 14px;
      line-height: 22px;
    }
    &-num {
      float: right;
    }
  }
}
</style>
