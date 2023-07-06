<template>
  <div>
    <div class="common-layout">
      <el-container>
        <el-header>Header</el-header>
        <el-container>
          <el-aside>
            <Aside></Aside>
          </el-aside>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Aside from "./Aside.vue";
</script>
<style scoped lang="less">
.common-layout {
  .el-header,
  .el-footer {
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
    text-align: center;
  }

  .el-aside {
    width: 200px;
  }
}
</style>
