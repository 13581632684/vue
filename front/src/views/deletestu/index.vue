<template>
  <el-card>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="学号" width="160" />
      <el-table-column prop="name" label="姓名" width="160" />
      <el-table-column prop="age" label="年龄" width="160" />
      <el-table-column prop="chinese" label="语文成绩" width="160" />
      <el-table-column prop="english" label="英语成绩" width="160" />
      <el-table-column prop="math" label="数学成绩" width="160" />
      <el-table-column label="action" width="160">
        <template #default="scope">
          <el-button
            class="btn"
            type="danger"
            @click="deleteStudent(scope.$index)"
            >删除</el-button
          >
        </template>
      </el-table-column>
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

const tableData = ref([]);

const deleteStudent = (index) => {
  request
    .post("http://localhost:8081/delete", tableData.value[index])
    .then((res) => {
      console.log(res);
      if (res.status == "200") {
        ElMessage.success("删除成功");
      } else {
        ElMessage.error("删除失败");
      }
      location.reload();
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
.btn {
  width: 100px;
}
</style>
