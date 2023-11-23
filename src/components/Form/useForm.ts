import { reactive, onMounted } from 'vue'
import { FormSchemaType } from './types/Form'
export const useForm = (props) => {
    const state = reactive<{ rules: object, defaultColSpan: number }>({
        rules: {},
        defaultColSpan: 12
    })

    //自动生成rules
    function genreateRules() {
        let rules = {}
        props.formSchema.forEach((i) => {
            if (i.required) {
                rules[i.prop] = [
                    { required: true, message: '请输入' + i.label, trigger: 'blur' }
                ]
            }
            if (i.rules) {
                rules[i.prop] = [
                    ...i.rules
                ]
            }
        })
        state.rules = rules
    }

    //根据component 组装h函数
    function convertFormVnodes(formItem: FormSchemaType) {
        //获取value
        let prop = formItem.prop
        return {
            components: formItem.component,
            props: {
                ...formItem.componentProps,
                modelValue: props.formData[prop],
                'onUpdate:modelValue': (val) => {
                    props.formData[prop] = val;
                },
            },
        }
    }
    
    onMounted(() => {
        genreateRules()
    })

    return {
        state,
        convertFormVnodes,
        genreateRules
    }
}