<template>
  <el-card>
    <el-row :gutter="20">
      <el-col :span="7">
        <el-form-item prop="searchName">
          <el-input placeholder="请输入用户名" v-model="searchName"></el-input>
        </el-form-item>
      </el-col>
      <el-button type="primary" @click="search">搜索</el-button>
    </el-row>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="username" label="用户名" width="500" />
      <el-table-column prop="password" label="密码" width="500" />
    </el-table>
  </el-card>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { ElMessage } from "element-plus";

const request = axios.create({
  timeout: 5000,
});

const searchName = ref("");
const tableData = ref([]);

const search = () => {
  request
    .post("http://localhost:8081/searchUser", { username: searchName.value })
    .then((res) => {
      console.log(res.data.length);
      if (res.data.length == 0) {
        ElMessage.error("无该用户");
      }
      tableData.value = res.data;
      searchName.value = "";
    });
};

const getStu = async () => {
  await request.get("http://localhost:8081/users").then((res) => {
    console.log(res.data);
    tableData.value = res.data;
  });
};
getStu();
</script>

<style lang="scss" scoped>
.el-button {
  width: 7%;
  align-items: center;
  margin-left: 10px;
}
</style>
