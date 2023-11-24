<template>
    <!--search bar tool-->
    <div class="search-form">
        <Form ref="FormRef" :formData="state.formData" :formSchema="state.searchFormSchema" label-width="60px"
            :submitText="'搜索'" :cannelText="'重置'" :prefix="'form-search-'" @handle-submit="handleSubmit"
            @handle-cancel="handleCancel">
            <!--resolve cross-component slots-->
            <template v-for="(index, name) in $slots" v-slot:[name]="data">
                <slot :name="name" v-bind="(data as any)"></slot>
            </template>
        </Form>
    </div>
    <div class="basic-controller">
        <el-button type="primary" :icon="Plus" @click="handleAdd">
            新增
        </el-button>
        <el-button type="danger" :icon="Delete" @click="handleDelete">
            删除
        </el-button>
    </div>
    <!--table-->
    <Table :columns="state.columns" :dataSource="listData.list" :selection="true">
        <template v-for="(index, name) in $slots" v-slot:[name]="data">
            <slot :name="name" v-bind="(data as any)"></slot>
        </template>
    </Table>
    <el-divider />
    <!--pagination tool-->
    <div class="basic-pagination">
        <el-pagination v-model:current-page="pagination.page" small background layout="prev, pager, next"
            :total="pagination.total" @current-change="handlePaginationChange" />
    </div>
    <div class="basic-dialog">
        <el-dialog v-model="dialogVisible" :title="getDialogTitle" width="50%" :before-close="handleBeforeClose">
            <Form ref="dialogFormRef" :formData="state.formData" :showController="false"
                :formSchema="state.searchFormSchema" label-width="60px" :submitText="'搜索'" :cannelText="'重置'"
                @handle-submit="handleSubmit" @handle-cancel="handleCancel">
                <template v-for="(index, name) in $slots" v-slot:[name]="data">
                    <slot :name="name" v-bind="(data as any)"></slot>
                </template>
            </Form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="handleClose">取消</el-button>
                    <el-button type="primary" @click="handleDialogConfirm">
                        新增
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
    <!--标题:新增弹窗 编辑弹窗
    3.编辑和新增的接口是否暴露、是否只传入API
    4.编辑时候部分字段的禁用
    -->
</template>

<script setup lang="ts">
import Table from '@/components/Table/index.vue'
import Form from '@/components/Form/index.vue'
import { reactive, h, onMounted, ref, computed } from 'vue'
import { usePagination } from '@/hooks/usePagination'
import { getTableList } from '@/api/demo/table';
import { getAllRoleList } from '@/api/sys/selectList';
import { Plus, Delete } from '@element-plus/icons-vue'
// getTableList({ page: 1, pageSize: 10 }).then(res => {
//         console.log(res)
//     })
const dialogFormRef = ref<any>()

const dialogState = reactive<{
    type: "ADD" | "EDIT"
}>({
    type: "ADD"
})

//数据源 props接受
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
const FormRef = ref<HTMLElement>();
const dialogVisible = ref(false)

const { pagination, listData, onPagination } = usePagination(getTableList, ['result', 'items'])
//dialog相关的hooks START

const getDialogTitle = computed(() => {
    return dialogState.type == "ADD" ? "新增" : "编辑"
})

const handleAdd = () => {
    dialogState.type = "ADD"
    dialogVisible.value = true
}

const handleBeforeClose = (done: () => void) => {
    handleRestFormData()
    done()
}

function handleClose() {
    handleRestFormData()
    dialogVisible.value = false
}

function handleDialogConfirm() {
    let state = dialogFormRef.value.handleValidate()
    if (!state) return
    //type
    switch (dialogState.type) {
        case "ADD":

            break;
        case "EDIT":
            break;
    }
}

function handleRestFormData() {
    state.formData = dialogFormRef.value.handleRestFormData()
}
//dialog相关的hooks END


//操作相关的hooks START
function handleDelete() {
}

function handleSubmit() {
    onPagination(state.formData)
}


function handleEdit(row) {
    dialogState.type = "EDIT"
    dialogVisible.value = true
    state.formData = row
}

function handleCancel() {
    console.log("handleCancel")
}

function handlePaginationChange(value) {
    pagination.page = value
    onPagination(state.formData)
}
//操作相关的hooks END

onMounted(() => {
    onPagination(state.formData)
})

</script>

<style lang="less" scoped>
.basic-controller {
    margin-bottom: 20px;
}

.basic-pagination {
    display: flex;
    justify-content: flex-end;
    text-align: right;
    margin-top: 20px;
}
</style>