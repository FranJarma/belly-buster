import {ColumnConfig} from "@components/ui/table/hooks/useTableColumns";
import {Product} from "../types";
import {Image} from "primereact/image";

export const productTableColumns: ColumnConfig<Product>[] = [
    {
        field: "name",
        header: "Producto",
        style: {minWidth: "12rem"},
        // body: (rowData: Order) => <ClientColumn client={rowData.client} />,
    },
    {
        field: "unitPrice",
        header: "Precio Unitario",
        // body: (rowData: Order) => (
        //     <DateTimeColumn dateTime={rowData.createdAt} />
        // ),
    },
];
