import type { FormItemRule } from 'element-plus'

export type FormProps = {
    formSchema: FormSchemaType[],
    formData: any,
    submitText?: string,
    cannelText?: string,
    showController?: boolean
    //custom slot prefix
    prefix?: string
}

export type FormSchemaType<T = any> = {
    prop: string
    label: string
    required?: boolean
    rules?: FormItemRule[];
    colSpan?: number
    component?: ComponentType
    componentProps?: T,
    placeholder?: string,
    disabled?: boolean
}

export type ComponentType =
    | 'Select'
    | 'ApiSelect'
// | 'TreeSelect'
// | 'ApiTree'
// | 'ApiTreeSelect'
// | 'ApiRadioGroup'
// | 'RadioButtonGroup'
// | 'RadioGroup'
// | 'Checkbox'
// | 'CheckboxGroup'
// | 'AutoComplete'
// | 'ApiCascader'
// | 'Cascader'
// | 'DatePicker'
// | 'MonthPicker'
// | 'RangePicker'
// | 'WeekPicker'
// | 'TimePicker'
// | 'TimeRangePicker'
// | 'Switch'
// | 'StrengthMeter'
// | 'Upload'
// | 'IconPicker'
// | 'Render'
// | 'Slider'
// | 'Rate'
// | 'Divider'
// | 'ApiTransfer';
