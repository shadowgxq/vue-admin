import { FormSchemaType } from "@/components/Form/types"
import { ColumnsType } from "@/components/Table/types";

export interface BasicTableProps<T = unknown> {
    //form
    formData: object
    formSchema: FormSchemaType[]
    //serach form
    serachFormData?: object
    searchFormSchema?: FormSchemaType[]

    //table
    tableColumns: ColumnsType<T>;
    tableSource: any

    pagination?: {
        page: number;
        pageSize: number;
        total: number;
    }

    addBtn?: boolean
    deleteBtn?: boolean
    submitText?: string
    cannelText?: string

}
//Required type
export type stateType = Pick<BasicTableProps,
    "tableColumns" | "formData" | "formSchema" | "searchFormSchema" | "searchFormSchema">

//Optional type
export type extraConfigType = Omit<BasicTableProps, keyof stateType | "tableSource">