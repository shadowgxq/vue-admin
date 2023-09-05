<template>
    <!--search框-->

    <!--table-->
    <Table :columns="state.columns" :dataSource="state.dataSource" :selection="true">
        <template #column-date="scope">
            <div>{{ scope.row }}</div>
        </template>
        <template #header-date>
            <div>test</div>
        </template>
    </Table>
    <!--分页器-->
    <div class="basic-pagination">
        <el-pagination v-model:current-page="pagination.page" small background layout="prev, pager, next"
            :total="pagination.total" @current-change="handlePaginationChange" />
    </div>
    <!--新增弹窗-->

    <!--编辑弹窗-->
</template>

<script setup lang="ts">
import Table from '@/components/Table/index.vue'
import { ColumnType } from '@/components/Table/type';
import { ElButton } from 'element-plus';
import { reactive, h, onMounted } from 'vue'
import { usePagination } from '@/hooks/usePagination'

const { pagination } = usePagination()
const state = reactive<any>({
    dataSource: [],
    columns: [
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
    ],
    pagination: {
        current: 1,
        pageSize: 10,
        total: 100
    }
})

function handlePaginationChange(value) {
    console.log(value)
}
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

<style lang="less" scoped>
.basic-pagination {
    display: flex;
    justify-content: flex-end;
    text-align: right;
    margin-top: 20px;
}
</style>