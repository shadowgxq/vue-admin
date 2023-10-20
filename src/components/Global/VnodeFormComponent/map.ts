import { ComponentType } from "@/components/Form/types/Form";
//import global components
import SelectComponent from '@/components/FormTools/Select/index.vue'

const componentMapping = new Map<ComponentType, any>([
    ["Select", SelectComponent]
])

//convert string to components map
export function getComponentByType(type: ComponentType): any | undefined {
    return componentMapping.get(type);
}
