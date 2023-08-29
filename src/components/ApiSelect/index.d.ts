export type SelectPropsType = {
    value: unknown
    placeholder?: string
    dictionaryFun?: () => roleListItemMoudle
    resultField?: string
    labelField?: string
    valueField?: string
}

export type SelectStateType<T> = {
    selectedValue: string | number
    options: Array<T>
}