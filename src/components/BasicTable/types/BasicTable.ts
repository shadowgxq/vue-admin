import { FormSchemaType } from "@/components/Form/types"
import { ColumnsType } from "@/components/Table/types";

export interface BasicTableProps<T> {

    formSchema: FormSchemaType[]
    searchFormSchema: FormSchemaType[]
    tableColumns: ColumnsType<T>;
    formData: object
    
    AddBtn?: boolean
    deleteBtn?: boolean
    submitText?: string
    cannelText?: string

}