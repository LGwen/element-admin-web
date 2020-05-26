<template>
  <el-card header="发布消息">
    <div style="width:800px;margin:40px auto;">
      <wang-editor @change="editChange" />
      <div>
        <el-button type="primary">发布</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  components: {
    WangEditor: () => import("@/components/Editor/wang-editor")
  },
  methods: {
    editChange(content) {
      console.log("change:", content);
    }
  }
};
</script>

<style>
</style>
