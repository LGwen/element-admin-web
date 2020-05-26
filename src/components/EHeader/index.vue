<template>
  <el-header class="el-main-header">
    <div class="el-main-header-box">
      <user-menu />
    </div>
  </el-header>
</template>

<script>
import UserMenu from "@/components/UserMenu/index";
export default {
  name: "EHeader",
  components: {
    UserMenu
  }
};
</script>

<style>
.el-main-header-box {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
}
</style>
