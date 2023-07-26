<template>
  <div class="login">
    <button @click="handleLogin">mock login</button>
    {{ userStore.token }}
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/store/modules/user";
import { useGenerateRoute } from "@/router/hooks/useGenerateRoute";
const userStore = useUserStore();
const { handleMountRoute } = useGenerateRoute();
async function handleLogin() {
  //获取token+生成menulist
  userStore.setToken("fakeToken1");
  handleMountRoute();
}

</script>

<style lang="less" scoped></style>
