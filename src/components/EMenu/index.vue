<template>
  <el-aside class="el-main-aside" style="width:auto">
    <div class="aside-btn" @click="toggleCollapse">
      <i v-if="isCollapse" class="el-icon-s-fold"></i>
      <i v-else class="el-icon-s-unfold"></i>
      <!-- {{ isCollapse?'展开':'收起' }} -->
    </div>
    <e-menu :menu="menu" :collapsed="isCollapse" />
  </el-aside>
</template>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu-vertical-demo.el-menu {
  text-align: left;
}
.aside-btn {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
}
/* .el-submenu__title,
.el-menu-item-group__title,
.el-menu-item-group .el-menu-item-group__title {
  font-size: 14px;
} */
</style>

<script>
import EMenu from "./menu";
export default {
  components: {
    EMenu
  },
  props: {
    menu: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
