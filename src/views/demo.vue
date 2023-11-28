<template>
    {{ state.data }}
    <ApiSelect v-model="state.data" :dictionaryFun="getAllRoleList" labelField="roleName" valueField="roleValue">
    </ApiSelect>
    <div class="democlass" v-bind="props">democlass</div>
</template>
<script setup lang="ts">
// import ApiSelect from '@/components/ApiSelect/index.vue'
import Select from '@/components/FormTools/Select/index.vue'
import { getAllRoleList } from '@/api/sys/selectList'
import { reactive } from 'vue'
const state = reactive({
    data: "name",
    options: [
        {
            label: "名称",
            value: "name"
        },
        {
            label: "年龄",
            value: "age"
        }
    ]
})

const props = {
    name: "shadow",
    age: 18,
    size: "mini"
}
</script>

<style lang="less" scoped></style>
