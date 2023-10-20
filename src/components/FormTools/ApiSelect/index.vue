<template>
    <el-select v-model="props.selectedValue" @change="handleChange" :placeholder="placeholder" clearable>
        <el-option v-for="option in state.options" :key="option[valueField]" :label="option[labelField]"
            :value="option[valueField]" />
    </el-select>
</template>
<script setup lang="ts">

import { reactive, onMounted, watchEffect } from 'vue'
import { SelectPropsType } from './index'

const props = withDefaults(defineProps<SelectPropsType>(), {
    placeholder: "请输入",
    resultField: "",
    labelField: "label",
    valueField: "value",
})

const myEmit = defineEmits(['update:selectedValue'])

const state = reactive<any>({
    options: []
})

async function loadDataList() {
    if (typeof props.dictionaryFun == 'function') {
        let _API = props.dictionaryFun
        let result = await _API()
        state.options = props.resultField == "" ? result.result : result.result[props.resultField]
    }
}

function handleChange(value: string | number) {
    state.selectedValue = value
    myEmit('update:selectedValue', value)
}

onMounted(() => {
    loadDataList()
})
</script>