<template>
    <button @click="handleSetLocal">setLocal</button>
    <button @click="handleSetLocal">getLocal</button>
    <button @click="handleSetLocal">removeLocal</button>
</template>
<script setup lang="ts">
import { Persistent } from '@/util/persistent';
function handleSetLocal() {
    Persistent.setLocal('token', 'sdjfiujkejksjbjxfhdshfjk')
}
</script>
<style lang="less" scoped></style>
