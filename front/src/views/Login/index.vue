<template>
  <div class="login-container">
    <el-form :model="form" :rules="rules" ref="formRef" class="login-form">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>登录</span>
          </div>
        </template>
        <el-form-item label="用户名：" prop="username">
          <el-input placeholder="请输入用户名" v-model="form.username" />
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input
            v-model="form.password"
            type="password"
            placeholder="请输入密码"
            show-password
          />
        </el-form-item>
        <div class="all-btn">
          <el-button
            type="primary"
            class="login-button"
            @click="handlelogin"
            plain
            >登录</el-button
          >
          <el-button
            type="info"
            class="login-button"
            @click="handleregister"
            plain
            >注册</el-button
          >
        </div>
      </el-card>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { ElMessage } from "element-plus";
import router from "@/router";

const request = axios.create({
  timeout: 5000,
});

const form = ref({
  username: "",
  password: "",
});

const handlelogin = () => {
  //   console.log(form.value);
  request.post("http://localhost:8081/login", form.value).then((res) => {
    console.log(res.data);
    if (res.data == "1") {
      // if (sessionStorage.getItem("isLogined") == "true"){
      sessionStorage.setItem("isLogined", "true");
      ElMessage({
        showClose: true,
        message: "已登录",
        type: "success",
      });
      router.replace("/");
    } else {
      ElMessage.error("用户名或密码错误！");
    }
  });
};

const handleregister = () => {
  if (form.value.username == "") {
    ElMessage.error("用户名不能为空");
  } else if (form.value.password == "") {
    ElMessage.error("密码不能为空");
  } else {
    request.post("http://localhost:8081/register", form.value).then((res) => {
      console.log(res.data);
      if (res.data == "创建成功") {
        ElMessage({
          showClose: true,
          message: "创建成功，已登录",
          type: "success",
        });
        router.replace("/");
      } else if (res.data == "用户名已存在") {
        ElMessage.error("用户名已存在！");
      } else {
        ElMessage.error("发生未知错误，请联系管理员！");
      }
    });
  }
};

const rules = ref({
  username: [
    {
      required: true,
      message: "用户名不能为空",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "密码不能为空",
      trigger: "blur",
    },
  ],
});
</script>

<style>
.login-container {
  width: 520px;
  padding: 160px 35px;
  margin: 0 auto;
}

.el-form-item {
  margin-left: 5px;
  border-radius: 5px;
}

.el-input {
  height: 40px;
  width: 95%;
  align-items: center;
}

.all-btn {
  transform: translate(35%);
  align-items: center;
  width: 80%;
  box-sizing: border-box;
  margin-top: 18px;
}

.login-button {
  transform: translate(-20%);
  width: 30%;
  margin-right: 10px;
}

.card-header {
  /* 头部 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
}

.text {
  /* 字体大小 */
  font-size: 14px;
  margin-left: 5px;
  margin-bottom: 18px;
}

.item {
  /* 间距 */
  font-size: 14px;
  margin-left: 18px;
}

.box-card {
  /* 宽度 */
  width: 480px;
}
</style>
