<template>
    <el-form class="demo-ruleForm" ref="ruleFormRef" :rules="state.rules" :model="props.formData" status-icon
        :validate-on-rule-change="false">
        <el-row>
            <template v-for="i in  formSchema ">
                <el-col :span="i.colSpan || state.defaultColSpan">
                    <el-form-item :label="i.label + ':'" :prop="i.prop">
                        <slot :name="props.prefix + i.prop" :row="i">
                            <!--have not component default render input-->
                            <el-input v-if="!i.component" v-model="props.formData[i.prop]"
                                :placeholder="i.placeholder || getAutoPlaceholder(i.label)" :disabled="i.disabled || false"
                                :clearable="true" />
                            <VnodeFormComponent v-else :vnodes="convertFormVnodes(i)"></VnodeFormComponent>
                        </slot>
                    </el-form-item>
                </el-col>
            </template>
            <!--action bar-->
            <el-col :span="12" v-if="showController">
                <el-form-item>
                    <slot name="form-submit">
                        <el-button type="primary" @click="submitForm(ruleFormRef)">{{ submitText }}</el-button>
                    </slot>
                    <slot name="form-cancel">
                        <el-button @click="handleCancel">{{ cannelText }}</el-button>
                    </slot>
                </el-form-item>
            </el-col>
        </el-row>
    </el-form>
</template>
  
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { FormProps } from './types/Form'
import type { FormInstance } from 'element-plus'
import { useForm } from './useForm'

const props = withDefaults(defineProps<FormProps>(), {
    submitText: "提交",
    cannelText: "取消",
    showController: true,
    prefix: "form-"
})

//form hooks 数据相关的逻辑
const { state, convertFormVnodes, getAutoPlaceholder, handleRestFormData } = useForm(props);

const emits = defineEmits(["handle-submit", "handle-cancel"]);

const ruleFormRef = ref<FormInstance>()

function handleCancel() {
    emits('handle-cancel')
}

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            emits("handle-submit")
        } else {
            return false
        }
    })
}
//校验正则是否通过
async function handleValidate() {
    let validateState = await ruleFormRef.value?.validate((valid) => {
        Promise.resolve(valid)
    })
    return validateState
}

defineExpose({
    handleValidate,
    handleRestFormData
})
</script>
  