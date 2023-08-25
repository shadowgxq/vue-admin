<template>
    <Table :columns="state.columns" :dataSource="state.dataSource">

    </Table>
</template>

<script setup lang="ts">
import Table from '@/components/Table/index.vue'
import { ElButton } from 'element-plus';
import { reactive, h, onMounted } from 'vue'

const state = reactive<{ dataSource: Array<any>, columns: Array<any> }>({
    dataSource: [],
    columns: [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            customRender: (text, scope, index) => {
                return h(ElButton, { type: "primary", size: "small", innerHTML: text })
            }
        },
        {
            title: '日期',
            dataIndex: 'date',
            key: 'date'
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
            key: '1',
            name: 'John Brown',
            date: '2021-09-01',
            address: 'New York No. 1 Lake Park'
        },
        {
            key: '2',
            name: 'Jim Green',
            date: '2021-09-02',
            address: 'London No. 1 Lake Park'
        },
        {
            key: '3',
            name: 'Joe Black',
            date: '2021-09-03',
            address: 'Sidney No. 1 Lake Park'
        }
    ]
})
</script>

<style lang="less" scoped></style>