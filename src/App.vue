<template>
  <div class="app">
    <router-view></router-view>
    <div @click="handleClick">debugger</div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
function handleClick() {
  router.push('/')
  debugger
}
</script>
<style scoped lang="less"></style>
