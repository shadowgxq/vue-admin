<template>
    <el-table ref="TableRef" v-bind="$attrs" :data="dataSource" style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column v-if="props.selection" type="selection" width="55" />
        <template v-for="(i, index) in columns" :key="i.key || i.dataIndex">
            <TableColumn :column="i">
                <!--resolve cross-component slots-->
                <template v-for="(index, name) in $slots" v-slot:[name]="data">
                    <slot :name="name" v-bind="(data as any)"></slot>
                </template>
            </TableColumn>
        </template>
    </el-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TableProps } from "./types/Table";
import TableColumn from "./TableColumn.vue";

const props = defineProps<TableProps>();

const emits = defineEmits(["selection-change"]);

const TableRef = ref<any>(null)

function handleSelectionChange(e: any) {
    emits('selection-change', e)
}

//prevent default inheritAttrs
defineOptions({
    inheritAttrs: false
})

defineExpose({
    TableRef
})
</script>