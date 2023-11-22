<template>
    <el-form ref="ruleFormRef" :rules="state.rules" :model="state.formData" label-width="60px" class="demo-ruleForm"
        status-icon :validate-on-rule-change="false">
        <el-row>
            <template v-for="i in formSchema">
                <el-col :span="i.colSpan || state.defaultColSpan">
                    <el-form-item :label="i.label + ':'" :prop="i.prop">
                        <slot :name="'form-' + i.prop" :row="i">
                            <!--have not component default render input-->
                            <el-input v-if="!i.component" v-model="state.formData[i.prop]" />
                            <VnodeFormComponent v-else :vnodes="convertFormVnodes(i)"></VnodeFormComponent>
                        </slot>
                    </el-form-item>
                </el-col>
            </template>
        </el-row>
        <!--action bar-->
        <el-form-item>
            <slot name="form-submit">
                <el-button type="primary" @click="submitForm(ruleFormRef)">提交</el-button>
            </slot>
            <slot name="form-cancel">
                <el-button @click="handleCancel">取消</el-button>
            </slot>
        </el-form-item>
    </el-form>
</template>
  
<script lang="ts" setup>
import { nextTick, onMounted, reactive, ref, watchEffect } from 'vue'
import { FormProps, FormSchemaType } from './types/Form'
import type { FormInstance } from 'element-plus'
const porps = withDefaults(defineProps<FormProps>(), {})

const emits = defineEmits(["handle-submit", "handle-cancel"]);

const ruleFormRef = ref<FormInstance>()

const state = reactive<any>({
    formData: {},
    rules: {},
    defaultColSpan: 12
})
//根据 component 组装数据
function convertFormVnodes(formItem: FormSchemaType) {
    return {
        components: formItem.component,
        props: {
            ...formItem.componentProps,
        }
    }
}

function generateFormData() {
    let result = {}
    porps.formSchema.forEach((i) => {
        result[i.prop] = ''
    })
    return result
}

function genreateRules() {
    let rules = {}
    porps.formSchema.forEach((i) => {
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

function handleCancel() {
    emits('handle-cancel')
}

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            emits("handle-submit")
        } else {
            console.log('error submit!')
            return false
        }
    })
}

onMounted(() => {
    resetForm()
    genreateRules()
})

watchEffect(() => {

})

</script>
  