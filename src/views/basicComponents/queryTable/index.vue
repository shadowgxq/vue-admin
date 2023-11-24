<template>
    <BasicTable>
        <template #table-column-operate>
            <el-button type="text" size="small">修改</el-button>
        </template>
        <template #form-search-name>
            <el-button type="text" size="small">修改</el-button>
        </template>
    </BasicTable>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import BasicTable from '@/components/BasicTable/index.vue'
import { getMenuList } from '@/api/sys/menu';

onMounted(() => {
})

</script>

<style lang="less" scoped></style>