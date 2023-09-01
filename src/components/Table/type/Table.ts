import type { TableProps as ELTableProps, TableColumnCtx } from 'element-plus'

import { RendererElement, RendererNode, VNode } from 'vue';
export type TableProps<T = unknown> = {
    columns: ColumnsType<T>;
    dataSource: T[];
}
//table props 
export type TableConfig<T = unknown> = {
    columns: ColumnsType<T>;
    dataSource: T[];
} & ELTableConfig<T>

//ColumnType
export type ColumnType<T = unknown> = Omit<ElTableColumnConfig<T>, keyof CustomerColumnType<T>> & CustomerColumnType<T>

//extra ColumnType
export type CustomerColumnType<T> = {
    title: string;
    dataIndex: string;
    key: string;
    children?: ColumnType<T>
    customRender?: (text?: string, scope?: unknown, index?: number) => VNode<RendererNode, RendererElement, {
        [key: string]: any;
    }>;
}

export type CustomerColumnTypeGroup<T> = {
    title: string;
    children: ColumnType<T>[];
}

export type ColumnsType<T = unknown> = ColumnType<T>[]

//element-ui table config
export type ELTableConfig<T> = Omit<ELTableProps<T>, 'data'>
export type ElTableColumnConfig<T> = Partial<TableColumnCtx<T>>


