<template>
  <div>Demo</div>
  <div>{{ permissionStore.permCodeList }}</div>
  <el-button>test</el-button>
  <button @click="handleChange">change</button>
</template>
<script setup lang="ts">
import { Persistent } from "@/util/persistent";
import { usePermissionStore } from "@/store/modules/permission";
const permissionStore = usePermissionStore();
function handleChange() {
  permissionStore.setPermCodeList([100, 200, 300]);
}
</script>
<style lang="less" scoped></style>
