<template>
  <el-container class="app-wrapper">
    <el-aside width="210px" class="sidebar-container">
      <Menu></Menu>
    </el-aside>
    <el-container class="container">
      <el-header>
        <Header></Header>
      </el-header>
      <el-main><router-view /></el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import Menu from "./meun";
import Header from "./header";
</script>

<style lang="scss" scoped>
$sideBarWidth: 210px;
$hideSideBarWidth: 67px;

.app-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.container {
  width: calc(100% - $sideBarWidth);
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  transition: all 0.28s;
  &.hidderContainer {
    width: calc(100% - $hideSideBarWidth);
  }
}
::v-deep .el-header {
  padding: 0;
}
</style>
