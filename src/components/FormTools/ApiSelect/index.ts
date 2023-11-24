import { roleListItemMoudle } from "@/core/models"

export type SelectPropsType<T = unknown> = {
    placeholder?: string
    dictionaryFun?: () => T
    resultField?: string
    labelField?: string
    valueField?: string
    modelValue?: any
}

