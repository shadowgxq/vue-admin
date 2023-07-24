<template>
  <div class=""></div>
  <el-container>
    <el-header>头部信息</el-header>
    <el-container>
      <el-aside>
        <Aside></Aside>
      </el-aside>
      <el-main> </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Aside from "./Aside.vue";
</script>
<style lang="less" scoped>
.el-header,
.el-footer {
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
  text-align: center;
}

.el-aside {
  width: 200px;
}
</style>
