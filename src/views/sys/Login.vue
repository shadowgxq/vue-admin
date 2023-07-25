<template>
  <div class="login">
    <button @click="handleLogin">mock login</button>
  </div>
</template>

<script setup lang="ts">
import { usePermissionStore } from "@/store/modules/permission";
import { useUserStore } from "@/store/modules/user";
const permission = usePermissionStore();
const userStore = useUserStore();
function handleLogin() {
  //获取token+生成menulist
  userStore.setToken("fakeToken1");
  const routes = permission.buildRoutes();
  routes.forEach((route) => {
    router.addRoute(route as unknown as RouteRecordRaw);
  });
}
</script>

<style lang="less" scoped></style>
