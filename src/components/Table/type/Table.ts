import type { ElTable } from 'element-plus'
import type { ElTableColumn } from 'element-plus'

import { RendererElement, RendererNode, VNode } from 'vue';
export type TableProps<T = unknown> = {
    columns: ColumnsType<T>;
    dataSource: T[];
} & ELTableConfig

export type ColumnType<RecordType> = CustomerColumnType<RecordType> & Omit<ElTableColumnConfig, keyof CustomerColumnType<RecordType>>

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
export type ELTableConfig = Omit<ElTable, 'data'>
export type ElTableColumnConfig = ElTableColumn

//Customer config customer
export type CustomerELTableConfig = {

}