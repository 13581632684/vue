<template>
  <el-card>
    <el-row :gutter="20">
      <el-col :span="7">
        <el-form-item prop="searchName">
          <el-input
            placeholder="请输入学生姓名"
            v-model="searchName"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-button type="primary" @click="search">搜索</el-button>
    </el-row>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="学号" width="180" />
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="age" label="年龄" width="180" />
      <el-table-column prop="chinese" label="语文成绩" width="180" />
      <el-table-column prop="english" label="英语成绩" width="180" />
      <el-table-column prop="math" label="数学成绩" />
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
    .post("http://localhost:8081/search", { name: searchName.value })
    .then((res) => {
      console.log(res.data.length);
      if (res.data.length == 0) {
        ElMessage.error("无该同学");
      }
      tableData.value = res.data;
      searchName.value = "";
    });
};

const getStu = async () => {
  await request.get("http://localhost:8081/students").then((res) => {
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
