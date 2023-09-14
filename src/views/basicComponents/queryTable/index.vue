<template>
    <BasicTable></BasicTable>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import BasicTable from '@/components/BasicTable/index.vue'
import { getMenuList } from '@/api/sys/menu';

onMounted(() => {
})
</script>

<style lang="less" scoped></style>