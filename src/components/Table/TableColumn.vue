<template>
    <el-table-column v-if="column.children" :label="column.title">
        <template v-for="e in column.children">
            <TableColumn :column="e"></TableColumn>
        </template>
    </el-table-column>
    <el-table-column v-else :prop="column.dataIndex" :label="column.title" :width="column?.width"
        v-bind="getFilterParams(column, CustomerColumnTypeList)">
        <!--export slot name table-header-XXX-->
        <template #header>
            <slot :name="'table-header-' + column.dataIndex">{{ column.title }}</slot>
        </template>
        <template #default="scope">
            <div v-if="column.customRender">
                <VnodeComponent :vnodes="column.customRender(scope.row[column.dataIndex], scope, scope.$index)">
                </VnodeComponent>
            </div>
            <div v-else>
                <!--export slot name table-column-XXX -->
                <slot :name="'table-column-' + column.dataIndex" :row="scope.row">
                    {{ scope.row[column.dataIndex] }}
                </slot>
            </div>
        </template>
    </el-table-column>
</template>

<script setup lang="ts">
import { filterObjectProps } from '@/util';
import { computed } from 'vue';
import { CustomerColumnTypeList } from './type';
import { ColumnType } from "./type/Table";

type Tcolumn<T = unknown> = {
    column: ColumnType<T>
}

const props = defineProps<Tcolumn>();

//Filter Customer props
const getFilterParams = computed(() => (i, type) => {
    let result = filterObjectProps(i, CustomerColumnTypeList)
    return result
})

</script>

<style lang="less" scoped></style>