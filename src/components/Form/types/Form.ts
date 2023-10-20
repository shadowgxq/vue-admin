import type { FormItemRule } from 'element-plus'

export type FormProps = {
    FormSchema: FormSchemaType[]
}

export type FormSchemaType = {
    prop: string
    label: string
    required?: boolean
    rules?: FormItemRule[];
    colSpan?: number
    component?: ComponentType
    componentProps?: any
}

export type ComponentType =
    | 'Input'
    | 'InputGroup'
    | 'InputPassword'
    | 'InputSearch'
    | 'InputTextArea'
    | 'InputNumber'
    | 'InputCountDown'
    | 'Select'
    | 'ApiSelect'
    | 'TreeSelect'
    | 'ApiTree'
    | 'ApiTreeSelect'
    | 'ApiRadioGroup'
    | 'RadioButtonGroup'
    | 'RadioGroup'
    | 'Checkbox'
    | 'CheckboxGroup'
    | 'AutoComplete'
    | 'ApiCascader'
    | 'Cascader'
    | 'DatePicker'
    | 'MonthPicker'
    | 'RangePicker'
    | 'WeekPicker'
    | 'TimePicker'
    | 'TimeRangePicker'
    | 'Switch'
    | 'StrengthMeter'
    | 'Upload'
    | 'IconPicker'
    | 'Render'
    | 'Slider'
    | 'Rate'
    | 'Divider'
    | 'ApiTransfer';