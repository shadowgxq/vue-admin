<template>
    <BasicTable v-bind="{ ...state, ...extraConfig }" :tableSource=listData.list>
        <template #table-column-operate>
            <el-button type="text" size="small">修改</el-button>
        </template>
    </BasicTable>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import BasicTable from '@/components/BasicTable/index.vue'
import { getTableList } from '@/api/demo/table';
import { usePagination } from '@/hooks/usePagination';
import { extraConfigType, stateType } from '@/components/BasicTable/types';

const { pagination, listData, onPagination } = usePagination(getTableList, ['result', 'items'])

const state = reactive<stateType>({
    tableColumns: [
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
        },
        {
            title: '操作',
            dataIndex: 'operate',
            key: 'operate',
            align: "center"
        }
    ],
    formData: {
        name: "",
        age: "",
        size: "age"
    },
    serachFormData: {
        name: "",
        age: "",
        size: "age"
    },
    formSchema: [
        {
            prop: "name",
            label: "姓名",
            colSpan: 12,
            rules: [
                { required: true, message: '请输入姓名', trigger: 'blur' },
                { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
            ],
        },
    ],
    searchFormSchema: [
        {
            prop: "name",
            label: "姓名",
            colSpan: 12,
            rules: [
                { required: true, message: '请输入姓名', trigger: 'blur' },
                { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
            ],
        },
        {
            prop: "address",
            label: "地址",
            colSpan: 12,
        },
        {
            prop: "date",
            label: "日期",
            colSpan: 12,
        }
    ]
})

const extraConfig = reactive<extraConfigType>({

})

onMounted(() => {
    onPagination(state.formData)
})

</script>

<style lang="less" scoped></style>