<template>
    <el-table v-bind="$attrs" :data="dataSource" style="width: 100%">
        <template v-for="(i, index) in columns" :key="i.key || i.dataIndex">
            <el-table-column :prop="i.dataIndex" :label="i.title" :width="i?.width"
                v-bind="getFilterParams(i, CustomerColumnTypeList)">
                <template #default="scope">
                    <div v-if="i.customRender">
                        <VnodeComponent :vnodes="i.customRender(scope.row[i.dataIndex], scope, scope.$index)">
                        </VnodeComponent>
                    </div>
                    <div v-else>
                        <slot :name="'table-' + i.dataIndex" :row="scope.row">
                            {{ scope.row[i.dataIndex] }}
                        </slot>
                    </div>
                </template>
            </el-table-column>
        </template>
    </el-table>
</template>

<script lang="ts" setup>
import { filterObjectProps } from "@/util";
import { TableProps } from "./type/Table";
import { computed, onMounted } from 'vue'
import { CustomerColumnTypeList } from "./type";


const props = defineProps<TableProps>();

//Filter Customer props
const getFilterParams = computed(() => (i, type) => {
    let result = filterObjectProps(i, CustomerColumnTypeList)
    return result
})

//prevent default inheritAttrs
defineOptions({
    inheritAttrs: false
})
</script>
./type/Table