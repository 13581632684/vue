<template>
  <div class="login-container">
    <el-card>
      <!-- <el-form-item label="id：" prop="student.id">
        <el-input placeholder="请输入学生id" v-model="student.id" />
      </el-form-item> -->
      <el-form-item label="姓名：" prop="student.name">
        <el-input placeholder="请输入姓名" v-model="student.name" />
      </el-form-item>
      <!-- <el-form-item label="学号：" prop="student.numer">
        <el-input placeholder="请输入学号" v-model="student.number" />
      </el-form-item> -->
      <el-form-item label="年龄：" prop="student.age">
        <el-input placeholder="请输入年龄" v-model="student.age" />
      </el-form-item>
      <el-form-item label="语文成绩：" prop="student.chinese">
        <el-input placeholder="请输入语文成绩" v-model="student.chinese" />
      </el-form-item>
      <el-form-item label="英语成绩：" prop="student.english">
        <el-input placeholder="请输入英语成绩" v-model="student.english" />
      </el-form-item>
      <el-form-item label="数学成绩：" prop="student.math">
        <el-input placeholder="请输入数学成绩" v-model="student.math" />
      </el-form-item>
      <el-button type="primary" @click="add">添加</el-button>
    </el-card>
  </div>
</template>

<script setup>
import axios from "axios";
import { ElMessage } from "element-plus";
import { ref } from "vue";
import router from "@/router";

const request = axios.create({
  timeout: 5000,
});

const student = ref({
  id: "",
  number: "",
  name: "",
  age: "",
  chinese: "",
  math: "",
  english: "",
});

const response = ref();

request.interceptors.response.use(
  () => {
    response.value = true;
  },
  (error) => {
    if (error.code == "ERR_BAD_REQUEST") {
      response.value = false;
    }
  }
);
const add = () => {
  request.post("http://localhost:8081/add", student.value);
  ElMessage.success("添加成功！");
  router.replace("/students");
};
</script>
<style lang="scss" scoped>
.el-input {
  height: 40px;
  width: 90%;
  align-items: center;
}
.el-button {
  // margin-left: 10px;
  width: 30%;
  transform: translate(110%);
}
.login-container {
  width: 520px;
  padding: 50px 35px;
  margin: 0 auto;
}
</style>
