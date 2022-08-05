<template>
  <el-menu
    :default-active="defaultActive"
    @open="handleOpen"
    @close="handleClose"
    router
    unique-opened
  >
    <el-sub-menu index="1">
      <template #title>
        <span>学生管理</span>
      </template>
      <el-menu-item index="/students" @click="savePath('/students')"
        >查询所有学生</el-menu-item
      >
      <el-menu-item index="/add" @click="savePath('/add')"
        >添加学生</el-menu-item
      >

      <el-menu-item index="/deletestu" @click="savePath('/deletestu')"
        >删除学生</el-menu-item
      >
      <el-menu-item index="/update" @click="savePath('/update')"
        >修改学生信息</el-menu-item
      >
    </el-sub-menu>
    <el-menu-item index="/users" @click="savePath('/users')">
      <span>用户列表</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref } from "vue";
const defaultActive = ref(sessionStorage.getItem("path"));
const savePath = (path) => {
  sessionStorage.setItem("path", path);
};
</script>

<style lang="scss" scoped>
.menu-container {
  background-color: antiquewhite;
}
</style>
