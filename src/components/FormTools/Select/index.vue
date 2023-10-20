<template>
    <el-select ref="selectRef" clearable v-model="porps.selectedValue" @change="handleChange"
        :placeholder="porps.placeholder" :disabled="disabled">
        <el-option v-for="option in porps.options" :key="option['value']" :label="option['label']"
            :value="option['value']" />
    </el-select>
</template>

<script setup lang="ts">
export type TypeSelectProps = {
    disabled?: boolean
    selectedValue: string | number
    placeholder?: string
    options: Array<{
        label: string
        value: unknown
    }>
}
const porps = withDefaults(defineProps<TypeSelectProps>(), {
    disabled: false,
    placeholder: "请选择",
    selectedValue: ""
})

const emits = defineEmits(["update:selectedValue"])

function handleChange(val: unknown) {
    console.log(val)
    emits('update:selectedValue', val)
}

</script>

<style lang="less" scoped></style>