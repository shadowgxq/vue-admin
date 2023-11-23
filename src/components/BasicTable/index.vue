<template>
    <!--搜索条件-->

    <!--table-->
    <Table :columns="state.columns" :dataSource="listData.list" :selection="true">
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
import Form from '@/components/Form/index.vue'
import { ElButton } from 'element-plus';
import { reactive, h, onMounted } from 'vue'
import { usePagination } from '@/hooks/usePagination'
import { getTableList } from '@/api/demo/table';
// getTableList({ page: 1, pageSize: 10 }).then(res => {
//         console.log(res)
//     })
const { pagination, onLoadMore, listData, onPagination } = usePagination(getTableList, {}, ['result', 'items'])
const state = reactive<any>({
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
    ]
})

function handlePaginationChange(value) {
    pagination.page = value
    onPagination()
}

onMounted(() => {
    onPagination()
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