<template>
  <div style="padding:20px;">
    <el-table :data="allUsers" stripe style="width: 100%">
      <el-table-column prop="username" label="账号名" width="180"></el-table-column>
      <el-table-column prop="password" label="密码"></el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-popconfirm title="确定删除该用户吗？" @onConfirm="deleteUser(scope)">
            <el-button slot="reference" type="text" size="small">删除</el-button>
          </el-popconfirm>
          <el-button type="text" size="small" @click="showDetialModal(scope)">编辑</el-button>
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
    <!-- <div class="create-form">
      <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
        <el-form-item label="登录账号">
          <el-input v-model="sizeForm.username"></el-input>
        </el-form-item>
        <el-form-item label="登录密码">
          <el-input v-model="sizeForm.password"></el-input>
        </el-form-item>
        <el-form-item size="large" style="text-align:left;">
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
        </el-form-item>
      </el-form>
    </div>-->
  </div>
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
