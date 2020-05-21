<template>
  <div class="login-box">
    <div class="login-logo">element</div>
    <el-form :inline="false" :model="formInline">
      <el-form-item>
        <el-input v-model="formInline.username" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="formInline.password" type="password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <div class="form-sumbit">
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      formInline: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions("user", ["login"]),
    onSubmit() {
      const { username, password } = this.formInline;
      if (username && password) {
        this.login({ ...this.formInline })
          .then(res => {
            this.successRes(res);
          })
          .catch(err => {
            this.errRes(err);
          });
      }
    },
    successRes(res) {
      this.$router.push({ path: "/" });
    },
    errRes(errres) {
      console.log("err:");
    }
  }
};
</script>
<style >
.login-box {
  position: fixed;
  top: 50%;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  max-width: 368px;
  transform: translateY(-50%);
  padding: 0 20px;
}
.login-logo {
  font-size: 33px;
  /* color: #b20720; */
  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
  font-weight: 600;
  position: relative;
  margin-bottom: 30px;
}
.form-sumbit {
  text-align: left;
}
.form-sumbit button {
  width: 100%;
  margin-top: 20px;
}
</style>

