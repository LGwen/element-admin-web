<template>
  <div class="user-menu-box">
    <el-avatar icon="el-icon-user-solid"></el-avatar>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        GWen
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="personal-center">个人中心</el-dropdown-item>
        <!-- divided -->
        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState("user", ["userInfo", "roles"])
  },
  methods: {
    ...mapActions("user", ["logout"]),
    handleLogout() {
      this.logout().then(res => {
        this.$router.push("/user/login");
        window.location.reload();
      });
    },
    handleCommand(command) {
      if (command === "logout") {
        this.handleLogout();
      }
      this.$message("click on item " + command);
    }
  }
};
</script>
<style>
.el-dropdown-link {
  cursor: pointer;
  color: rgba(0, 0, 0, 0.65);
}
.el-icon-arrow-down {
  font-size: 12px;
}
.user-menu-box{
  display: flex;
  align-items: center;
}
.user-menu-box .el-avatar{
  width: 30px;
  height: 30px;
  line-height: 30px;
  margin-right: 10px;
}
</style>
