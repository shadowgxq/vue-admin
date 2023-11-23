<template>
    <el-select ref="selectRef" clearable :modelValue="props.modelValue" @change="handleChange"
        :placeholder="props.placeholder" :disabled="disabled">
        <el-option v-for="option in props.options" :key="option['value']" :label="option['label']"
            :value="option['value']" />
    </el-select>
</template>

<script setup lang="ts">
import { TypeSelectProps } from './index'

const props = withDefaults(defineProps<TypeSelectProps>(), {
    disabled: false,
    placeholder: "请选择",
    modelValue: ""
})

const emits = defineEmits(["update:modelValue"])

function handleChange(val: unknown) {
    emits('update:modelValue', val)
}

</script>

<style lang="less" scoped></style>