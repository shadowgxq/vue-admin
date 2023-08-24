export type TableProps<T = unknown> = {
    columns: ColumnsType<T>;
    dataSource: T[];
}

export interface ColumnType<RecordType> {
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
export type ELTableConfig =  {
    
}


//more config customer
export type ExpandConfig = {

}