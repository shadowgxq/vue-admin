import type { TableProps as ELTableProps, TableColumnCtx } from 'element-plus'

import { RendererElement, RendererNode, VNode } from 'vue';
export type TableProps<T = unknown> = {
    columns: ColumnsType<T>;
    dataSource: T[];
} & ELTableConfig<T>

export type ColumnType<RecordType> = CustomerColumnType<RecordType> & Omit<ElTableColumnConfig<T>, keyof CustomerColumnType<RecordType>>

//add Customer type
export type CustomerColumnType<RecordType> = {
    title: string;
    dataIndex: string;
    key: string;
    customRender?: (text?: string, scope?: unknown, index?: number) => VNode<RendererNode, RendererElement, {
        [key: string]: any;
    }>;
}


export interface ColumnGroupType<RecordType> extends Omit<ColumnType<RecordType>, 'dataIndex'> {
    children: ColumnsType<RecordType>;
}

export type ColumnsType<RecordType = unknown> = ColumnType<RecordType>[]

//element-ui table config
export type ELTableConfig<T> = Omit<ELTableProps<T>, 'data'>
export type ElTableColumnConfig<T> = TableColumnCtx<T>

//Customer config customer
export type CustomerELTableConfig = {

}