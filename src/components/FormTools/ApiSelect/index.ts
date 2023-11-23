import { roleListItemMoudle } from "@/core/models"

export type SelectPropsType<T = unknown> = {
    selectedValue: unknown
    placeholder?: string
    dictionaryFun?: () => T
    resultField?: string
    labelField?: string
    valueField?: string
    modelValue?: any
}

