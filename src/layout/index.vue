<template>
  <el-container class="is-vertical">
    <LayoutHeader></LayoutHeader>
    <el-container>
      <LayoutSider></LayoutSider>
      <LayoutMain></LayoutMain>
      <LayoutFooter></LayoutFooter>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import LayoutHeader from './header/index.vue'
import LayoutMain from './main/index.vue'
import LayoutSider from './sider/index.vue'
import LayoutFooter from './footer/index.vue'
</script>
<style lang="less" scoped>
:deep(.el-header) {
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
  text-align: center;
}

:deep(.el-aside) {
  width: 200px;
}
</style>
