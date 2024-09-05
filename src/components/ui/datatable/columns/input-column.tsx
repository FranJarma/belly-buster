import {InputNumber} from "primereact/inputnumber";

import {ColumnConfig} from "../types/column";

export const quantityColumn: ColumnConfig<any> = {
    field: "quantity",
    header: "Cantidad",
    style: {minWidth: "12rem"},
    body: (rowData: any) => <InputNumber />,
};
