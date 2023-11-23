<template>
    <el-form class="demo-ruleForm" ref="ruleFormRef" :rules="state.rules" :model="props.formData" status-icon
        :validate-on-rule-change="false">
        <el-row>
            <template v-for="i in  formSchema ">
                <el-col :span="i.colSpan || state.defaultColSpan">
                    <el-form-item :label="i.label + ':'" :prop="i.prop">
                        <slot :name="'form-' + i.prop" :row="i">
                            <!--have not component default render input-->
                            <el-input v-if="!i.component" v-model="props.formData[i.prop]"
                                :placeholder="i.placeholder || getAutoPlaceholder(i.label)" />
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
import { computed, ref } from 'vue'
import { FormProps } from './types/Form'
import type { FormInstance } from 'element-plus'
import { useForm } from './useForm'

const props = withDefaults(defineProps<FormProps>(), {})

//form hooks 数据相关的逻辑
const { state, convertFormVnodes } = useForm(props);

const emits = defineEmits(["handle-submit", "handle-cancel"]);

const ruleFormRef = ref<FormInstance>()

const getAutoPlaceholder = computed(() => (str) => {
    return '请输入' + str
})
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
</script>
  