export type ColumnConfig<T> = {
    field: keyof T | string;
    header: string;
    filter?: boolean;
    filterElement?: React.ReactNode;
    body?: (rowData: T) => React.ReactNode;
    style?: React.CSSProperties;
};
