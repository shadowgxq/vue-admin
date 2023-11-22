<template>
    <div>
        <Form :formData="formData" :formSchema="state.formSchema">
        </Form>
    </div>
</template>

<script setup lang="ts">
import Form from '@/components/Form/index.vue'
import { FormSchemaType } from '@/components/Form/types/Form';
import { onMounted, reactive, ref } from 'vue';
import Select from '@/components/FormTools/Select/index.vue'

const formData = ref<{}>({
    name: "shadow",
    age: "",
    size: "age",
})

const state = reactive<{
    formSchema: FormSchemaType[],
    selectValue: String,
    formData?: any
}>({
    selectValue: "age",
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
        {
            prop: "age",
            label: "年龄",
            rules: [
                {
                    validator: (rule: any, value: any, callback: any) => {
                        if (value == '') {
                            callback(new Error('Please input the password again'))
                        } else {
                            callback()
                        }
                    }, trigger: 'blur'
                },
            ]
        },
        {
            prop: "size",
            label: "尺寸",
            component: "Select",
            componentProps: {
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
            }
        },
    ]
})

//generate empty obj
function generateFormData() {
    let result = {}
    state.formSchema.forEach((i) => {
        result[i.prop] = ''
    })
    return result
}

onMounted(() => {
    // formData.value = generateFormData()
})

</script>

<style lang="less" scoped></style>