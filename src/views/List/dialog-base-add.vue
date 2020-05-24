<template>
  <el-dialog title="添加新任务" :visible.sync="visible" width="500px">
    <div style="padding:20px">
      <el-form ref="form" label-width="100px">
        <el-form-item label="名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="简介">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="负责人">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="预计完成时间">
          <el-date-picker style="width:100%" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer" style="text-align:right;">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="close">确定</el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "DialogBase",
  props: {
    visible: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    close() {
      this.$emit("update:visible", false);
    }
  }
};
</script>

<style>
</style>
