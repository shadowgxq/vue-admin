<template>
    <el-table v-bind="$attrs" :data="dataSource" style="width: 100%">
        <template v-for="i in columns" :key="i.key || i.dataIndex">
            <el-table-column :prop="i.dataIndex" :label="i.title" :width="i?.width">
                
            </el-table-column>
        </template>
    </el-table>
</template>

<script lang="ts" setup>
import { TableProps } from "./type/TableType";
import { computed } from 'vue'
//prevent default inheritAttrs
defineOptions({
    inheritAttrs: false
})

const props = defineProps<TableProps>();

const getFilterAttrs = computed(() => () => {

})
</script>
