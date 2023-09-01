<template>
    <!-- {{ state.data }} -->
    <ApiSelect v-model:value="state.data" :dictionaryFun="getAllRoleList" labelField="roleName" valueField="roleValue">
    </ApiSelect>
</template>
<script setup lang="ts">
import ApiSelect from '@/components/ApiSelect/index.vue'

import { getAllRoleList } from '@/api/sys/selectList'
import { reactive } from 'vue'
const state = reactive({
    data: ""
})
</script>
<style lang="less" scoped></style>
