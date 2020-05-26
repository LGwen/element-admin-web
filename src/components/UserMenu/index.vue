<template>
  <div class="user-menu-box">
    <el-popover placement="bottom" width="200" trigger="hover">
      <div>
        <div class="user-message-item">
          <div class="message-item__icon"><i class="el-icon-chat-line-square"></i></div>
          <div class="message-item__content">
            <div class="message-item__content__title">您收到了新的任务</div>
            <div class="message-item__content__desc">10分钟前</div>
          </div>
        </div>
        <div class="user-message-item">
          <div class="message-item__icon"><i class="el-icon-chat-line-square"></i></div>
          <div class="message-item__content">
            <div class="message-item__content__title">本周周报</div>
            <div class="message-item__content__desc">10分钟前</div>
          </div>
        </div>
        <div class="user-message-item">
          <div class="message-item__icon"><i class="el-icon-chat-line-square"></i></div>
          <div class="message-item__content">
            <div class="message-item__content__title">第一轮测试结果反馈</div>
            <div class="message-item__content__desc">10分钟前</div>
          </div>
        </div>
      </div>
      <div slot="reference" class="user-menu-message" style="cursor:pointer;">
        <el-badge :value="10" class="item">
          <i class="el-icon-message"></i>
        </el-badge>
      </div>
    </el-popover>

    <el-dropdown @command="handleCommand">
      <div>
        <el-avatar icon="el-icon-user-solid"></el-avatar>
        <span class="el-dropdown-link">
          {{ userInfo.username }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
      </div>
      <el-dropdown-menu slot="dropdown">
        <!-- <el-dropdown-item command="personal-center">个人中心</el-dropdown-item> -->

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
<style lang='less'>
.user-message-item{
  display: flex;
  align-items: flex-start;
  padding: 10px;
  &:not(:last-child){
    border-bottom: 1px solid #DCDFE6;
  }
  .message-item__icon{
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    flex-grow: 0;
    font-size: 18px;
  }
  .message-item__content{
    flex: 0 0 auto;
    &__title{
      font-size: 15px;
      margin-bottom: 4px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &__desc{
      font-size: 13px;
      color: rgba(0, 0, 0, 0.45);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: rgba(0, 0, 0, 0.65);
}
.el-icon-arrow-down {
  font-size: 12px;
}
.user-menu-box {
  display: flex;
  align-items: center;
}
.user-menu-message {
  margin-right: 30px;
  display: inline-block;
  vertical-align: middle;
}
.user-menu-message:focus {
  box-shadow: none;
}
.el-badge i {
  font-size: 20px;
}

.user-menu-box .el-avatar {
  width: 30px;
  height: 30px;
  line-height: 30px;
  margin-right: 5px;
  display: inline-block;
  vertical-align: middle;
}
</style>
