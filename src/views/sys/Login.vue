<template>
  <div class="login">
    <button @click="handleLogin">mock login</button>
    {{ userStore.token }}
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/store/modules/user";
import { useGenerateRoute } from "@/router/hooks/useGenerateRoute";
import {useRouter} from 'vue-router'
const router = useRouter()
const userStore = useUserStore();
const { handleMountRoute } = useGenerateRoute();

async function handleLogin() {
  //获取token+生成menulist
  userStore.setToken("fakeToken1");
  handleMountRoute();
  router.push('/')
}

</script>

<style lang="less" scoped></style>
