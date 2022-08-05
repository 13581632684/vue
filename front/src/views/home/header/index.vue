<template>
  <div class="navbar">
    <Breadcrumb />
    <div class="navbar-text">学生管理系统</div>
    <div class="navbar-right">
      <Avatar />
    </div>
  </div>
</template>

<script setup>
import Breadcrumb from "./comoinents/breadcrumb.vue";
import Avatar from "./comoinents/avatar.vue";
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 60px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  padding: 0 16px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  font-size: 19px;

  .navbar-text {
    margin-left: 15px;
  }

  .navbar-right {
    flex: 1;
    display: flex;
    align-content: flex-end;
    justify-content: flex-end;
  }
}
</style>
