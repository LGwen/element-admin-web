<template>
  <el-container class="el-main-container">
    <e-menu :menu="addRouters" />
    <el-container>
      <el-header class="el-main-header">
        <div class="el-main-header-box">
          <user-menu />
        </div>
      </el-header>
      <el-main class="el-main-contentbox">
        <router-view></router-view>
      </el-main>
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </el-container>
</template>

<script>
import EMenu from "@/components/EMenu/index";
import UserMenu from "@/components/UserMenu/index";
import { mapGetters } from "vuex";
export default {
  components: {
    EMenu,
    UserMenu
  },
  computed: {
    ...mapGetters(["addRouters"])
  }
};
</script>
<style>
.el-main-contentbox {
  background: #f0f2f5;
}

.el-main-header-box {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
}
/* .tttt {
  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
  font-weight: 600;
  position: relative;
  margin-bottom: 30px;
} */
</style>

