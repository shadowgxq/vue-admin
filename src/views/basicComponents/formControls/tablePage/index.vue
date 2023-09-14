<template>
    <Table :columns="state.columns" :dataSource="state.dataSource" :selection="true" :span-method="arraySpanMethod">
        <template #table-column-date="scope">
            <div>{{ scope.row.date }}</div>
        </template>
        <template #table-header-date>
            <div>test</div>
        </template>
    </Table>
</template>

<script setup lang="ts">
import Table from '@/components/Table/index.vue'
import { ColumnType } from '@/components/Table/type';
import { ElButton } from 'element-plus';
import { reactive, h, onMounted } from 'vue'

const state = reactive<{ dataSource: Array<any>, columns: ColumnType[] }>({
    dataSource: [],
    columns: [
        // {
        //     title: '姓名',
        //     children: [
        //         {
        //             title: '日期',
        //             dataIndex: 'date',
        //             key: 'date',
        //             customRender() {
        //                 return {
        //                     components: ElButton,
        //                     props: {
        //                         type: "primary", innerHTML: "hello"
        //                     }
        //                 }
        //             }
        //         },
        //         {
        //             title: '地址',
        //             dataIndex: 'address',
        //             key: 'address',
        //             customRender() {
        //                 return h(ElButton, { type: "primary", innerHTML: "hello" })
        //             }
        //         }
        //     ]
        // },
        {
            title: '日期',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: '地址',
            dataIndex: 'address',
            key: 'address',
        }
    ]
})


onMounted(() => {
    state.dataSource = [
        {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
    ]
})
</script>

<style lang="less" scoped></style>@/components/Table/types