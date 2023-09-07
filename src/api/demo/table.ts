import { TableListResultModel } from '@/core/models/demo'
import service from '../index'

export const getTableList = (params: PageParams) => {
    return service<{ result: TableListResultModel }>({
        method: "post",
        url: "/table/getDemoList",
        data: params
    })
}