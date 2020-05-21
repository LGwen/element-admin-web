<template>
  <el-card class="box-card">
    <div>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="姓名" size="small">
          <el-input placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item label="账户" size="small">
          <el-input placeholder="账户"></el-input>
        </el-form-item>
        <el-form-item size="small">
          <el-button type="primary">查询</el-button>
        </el-form-item>

        <!-- <el-form-item label="活动区域">
          <el-select value="shanghai" placeholder="活动区域" size="small">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>-->
      </el-form>
    </div>
    <div style="margin-bottom:12px;">
      <el-button size="small">添加新用户</el-button>
      <el-button type="primary" size="small">导出excel</el-button>
    </div>
    <div>
      <el-table :data="allUsers" stripe style="width: 100%">
        <el-table-column prop="username" label="账户名"></el-table-column>
        <el-table-column prop="password" label="密码"></el-table-column>
        <el-table-column label="姓名">刘备</el-table-column>
        <el-table-column label="性别">男</el-table-column>
        <el-table-column label="出生日期">2020-05-19</el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-popconfirm title="确定删除该用户吗？" @onConfirm="deleteUser(scope)">
              <el-button slot="reference" type="text">删除</el-button>
            </el-popconfirm>
            <el-divider direction="vertical"></el-divider>
            <el-button type="text" @click="showDetialModal(scope)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="提示" :visible.sync="dialogVisible" width="400px">
        <el-form ref="form" :model="currentEditRow" label-width="80px" size="mini">
          <el-form-item label="登录账号">
            <el-input v-model="currentEditRow.username"></el-input>
          </el-form-item>
          <el-form-item label="登录密码">
            <el-input v-model="currentEditRow.password"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="modifyAccountInfo">确定</el-button>
        </div>
      </el-dialog>
    </div>
  </el-card>
</template>
<script>
import { addUser, updateUser, deleteUser } from "../../api/admin";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      tableData: [],
      sizeForm: {
        username: "",
        password: ""
      },
      dialogVisible: false,
      currentEditRow: {
        username: "",
        password: ""
      }
    };
  },

  computed: {
    ...mapState("user", ["allUsers"])
  },
  mounted() {
    this.getAllUsers();
    console.log("this.$route:", this.$route);
  },
  methods: {
    ...mapActions("user", ["getAllUsers"]),
    modifyAccountInfo() {
      updateUser({ ...this.currentEditRow }).then(res => {
        console.log("更新用户信息成功:", res);
        this.dialogVisible = false;
      });
    },
    deleteUser(record) {
      deleteUser({ ...record.row }).then(res => {
        console.log("删除用户:", res);
      });
    },
    onSubmit() {
      console.log("submit!：", this.sizeForm);
      const { username, password } = this.sizeForm;
      if (username && password) {
        addUser({ username, password }).then(res => {
          console.log("添加新用户:", res);
        });
      }
    },
    showDetialModal(record) {
      this.dialogVisible = true;
      this.currentEditRow = record.row;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>
<style>
.create-form {
  width: 300px;
  margin: 60px auto;
}
</style>
