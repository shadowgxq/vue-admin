<template>
    <el-select v-model="state.selectedValue" @change="handleChange" :placeholder="placeholder">
        <el-option v-for="option in state.options" :key="option[valueField]" :label="option[labelField]"
            :value="option[valueField]" />
    </el-select>
</template>
<script setup lang="ts">
import { reactive, onMounted, watchEffect } from 'vue'
import { SelectPropsType, SelectStateType } from './index'
const props = withDefaults(defineProps<SelectPropsType>(), {
    placeholder: "请输入",
    resultField: "",
    labelField: "label",
    valueField: "value",
})
const myEmit = defineEmits(['update:value'])
const state = reactive<SelectStateType<any>>({
    selectedValue: "",
    options: []
})

async function loadDataList() {
    if (typeof props.dictionaryFun == 'function') {
        let _API = props.dictionaryFun
        let result = await _API()
        // state.options = props.resultField == "" ? result.result : result.result[props.resultField]
        state.options = [{ "id": 1, "orderNo": "1", "roleName": "超级管理员", "roleValue": "Eric", "createTime": "1971-04-25 13:23:27", "remark": "斗等厂温质上风常术集此美理门约议很", "menu": ["0", "1", "2"], "status": "1" }, { "id": 2, "orderNo": "2", "roleName": "管理员", "roleValue": "Carol", "createTime": "2017-11-06 04:41:34", "remark": "题员构更思持府信变区", "menu": ["0", "1"], "status": "0" }, { "id": 3, "orderNo": "3", "roleName": "文章管理员", "roleValue": "David", "createTime": "1982-05-29 18:57:19", "remark": "府听非却育标要知外车山义什说每意义离", "menu": ["0", "2"], "status": "1" }, { "id": 4, "orderNo": "4", "roleName": "普通用户", "roleValue": "Susan", "createTime": "1994-06-04 05:29:30", "remark": "代们儿道日工物七片题支县率受育", "menu": ["2"], "status": "1" }]
    }
}
//TODO: fixed rerender
watchEffect(() => {
    state.selectedValue =  props.value as string
})

function handleChange(value: string | number) {
    state.selectedValue = value
    myEmit('update:value', value)
}

onMounted(() => {
    loadDataList()
})
</script>