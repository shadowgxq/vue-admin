<template>
    <el-form ref="ruleFormRef" :rules="state.rules" :model="state.formData" label-width="60px" class="demo-ruleForm"
        status-icon>
        <el-row>
            <template v-for="i in FormSchema">
                <el-col :span="12">
                    <el-form-item :label="i.label + ':'" :prop="i.prop">
                        <el-input v-model="state.formData[i.prop]" />
                    </el-form-item>
                </el-col>
            </template>
        </el-row>
    </el-form>
</template>
  
<script lang="ts" setup>
import { onMounted, reactive, ref, watchEffect } from 'vue'
import { FormProps } from './types/Form'

const porps = withDefaults(defineProps<FormProps>(), {})

const ruleFormRef = ref<any>()
const state = reactive<any>({
    formData: {},
    rules: {}
})

function generateFormData() {
    let result = {}
    porps.FormSchema.forEach((i) => {
        result[i.prop] = ''
    })
    return result
}

function genreateRules() {
    let rules = {}
    porps.FormSchema.forEach((i) => {
        if (i.required) {
            rules[i.prop] = [
                { required: true, message: '请输入' + i.label, trigger: 'blur' }
            ]
        }
        if (i.rules) {
            rules[i.prop] = [
                ...i.rules
            ]
        }
    })
    state.rules = rules
}
//reset and init form data by prop FormSchema
function resetForm() {
    state.formData = generateFormData()
}


onMounted(() => {
    resetForm()
    genreateRules()
})

watchEffect(() => {

})

</script>
  