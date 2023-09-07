<template>
    <BasicTable></BasicTable>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import BasicTable from '@/components/BasicTable/index.vue'
import { getTableList } from '@/api/demo/table'
import { getMenuList } from '@/api/sys/menu';

onMounted(() => {
    // getTableList({
    //     page: 1,
    //     pageSize: 10
    // }).then(res => {
    //     console.log(res)
    // })
    getTableList({ page: 1, pageSize: 10 }).then(res => {
        console.log(res)
    })
 
})
</script>

<style lang="less" scoped></style>