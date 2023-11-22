<template>
    <div style="margin-bottom: 20px;">
        {{ state.selectValue }}
        <Select v-model="state.selectValue" :options="state.formSchema[2].componentProps.options"></Select>
    </div>
    <div>
        <Form :formSchema="state.formSchema">
        </Form>
    </div>
</template>

<script setup lang="ts">
import Form from '@/components/Form/index.vue'
import { FormSchemaType } from '@/components/Form/types/Form';
import { reactive } from 'vue';
import Select from '@/components/FormTools/Select/index.vue'
const state = reactive<{
    formSchema: FormSchemaType[],
    selectValue: String
}>({
    selectValue: "age",
    formSchema: [
        {
            prop: "name",
            label: "姓名",
            colSpan: 12,
            rules: [
                { required: true, message: '请输入姓名', trigger: 'blur' },
                { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
            ],
        },
        {
            prop: "age",
            label: "年龄",
            rules: [
                {
                    validator: (rule: any, value: any, callback: any) => {
                        if (value === '') {
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

</script>

<style lang="less" scoped></style>