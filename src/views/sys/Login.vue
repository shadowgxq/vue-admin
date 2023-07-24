<template>
    <div class="login">
        <button @click="handleLogin">mock login</button>
    </div>
</template>

<script setup lang="ts">
import { usePermissionStore } from "@/store/modules/permission";
import { setToken } from "@/util/auth";
const permission = usePermissionStore()
function handleLogin() {
    //获取token+生成menulist
    setToken("fakeToken1");
    permission.buildRoutes()
}
</script>

<style lang="less" scoped></style>
