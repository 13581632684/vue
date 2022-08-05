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
            type="warning"
            @click="updateStudent(scope.$index)"
            >修改</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </el-card>
  <el-dialog v-model="dialogFormVisible" title="修改学生信息" width="30%">
    <el-form :model="updateStu">
      <el-form-item label="姓名：">
        <el-input v-model="updateStu.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="学号：">
        <el-input v-model="updateStu.id" autocomplete="off" />
      </el-form-item>
      <el-form-item label="年龄：">
        <el-input v-model="updateStu.age" autocomplete="off" />
      </el-form-item>
      <el-form-item label="语文成绩：">
        <el-input v-model="updateStu.chinese" autocomplete="off" />
      </el-form-item>
      <el-form-item label="英语成绩：">
        <el-input v-model="updateStu.english" autocomplete="off" />
      </el-form-item>
      <el-form-item label="数学成绩：">
        <el-input v-model="updateStu.math" autocomplete="off" />
      </el-form-item>
    </el-form>
    <el-button class="dialog-btn" @click="dialogFormVisible = false"
      >取消</el-button
    >
    <el-button class="dialog-btn" type="primary" @click="update"
      >修改</el-button
    >
  </el-dialog>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const dialogFormVisible = ref(false);

const updateStu = ref({});

const request = axios.create({
  timeout: 5000,
});

const tableData = ref([]);

const updateStudent = (index) => {
  console.log(tableData.value[index]);
  dialogFormVisible.value = true;
  updateStu.value = tableData.value[index];
};

const update = () => {
  request.post("http://localhost:8081/update", updateStu.value);
  location.reload();
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
.dialog-btn {
  width: 20%;
  transform: translate(135%);
}
.btn {
  width: 100px;
}
</style>
