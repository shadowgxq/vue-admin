import { ElTable } from 'element-plus'
import { ElTableColumn } from 'element-plus'
export type TableProps<T = unknown> = {
    columns: ColumnsType<T>;
    dataSource: T[];
}

export type ColumnType<RecordType> = CustomerColumnType<RecordType> & Omit<ElTableColumnConfig, keyof CustomerColumnType<RecordType>>


//add Customer type
export type CustomerColumnType<RecordType> = {
    title: string;
    dataIndex: string;
    key: string;
    width?: number;
}


export interface ColumnGroupType<RecordType> extends Omit<ColumnType<RecordType>, 'dataIndex'> {
    children: ColumnsType<RecordType>;
}

export type ColumnsType<RecordType = unknown> = ColumnType<RecordType>[]


//element-ui table config
export type ELTableConfig = Omit<typeof ElTable, 'data'>
export type ElTableColumnConfig = typeof ElTableColumn

//Customer config customer
export type CustomerELTableConfig = {

}