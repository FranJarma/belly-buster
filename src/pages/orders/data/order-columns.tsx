import {Dropdown} from "primereact/dropdown";
import {InputText} from "primereact/inputtext";

import {ColumnConfig} from "@components/ui/datatable/types";
import {DateTimeColumn} from "@components/ui/datatable/components";

import {
    ClientColumn,
    OrderStatusColumn,
    PaymentMethodColumn,
} from "../components/table-columns";

import {Order, OrderStatusEnum} from "../types/Order";
import {PaymentMethodEnum} from "@types/index";

export const orderTableColumns: ColumnConfig<Order>[] = [
    {
        field: "client",
        header: "Cliente",
        filter: true,
        style: {minWidth: "12rem"},
        body: (rowData: Order) => <ClientColumn client={rowData.client} />,
    },
    {
        field: "client.address",
        header: "Dirección",
        filter: true,
        style: {minWidth: "12rem"},
    },
    {
        field: "createdAt",
        header: "Fecha y hora",
        filter: true,
        body: (rowData: Order) => (
            <DateTimeColumn dateTime={rowData.createdAt} />
        ),
    },
    {
        field: "products",
        header: "Productos",
        filter: false,
        style: {minWidth: "15rem"},
    },
    {
        field: "deposit",
        header: "Seña",
        filter: true,
        filterElement: <InputText placeholder="Filtrar por Total" />,
        body: (rowData: Order) => `$${rowData.deposit.toFixed(2)}`,
    },
    {
        field: "total",
        header: "Total a Pagar",
        filter: true,
        filterElement: <InputText placeholder="Filtrar por Total" />,
        body: (rowData: Order) => `$${rowData.total.toFixed(2)}`,
    },
    {
        field: "paymentMethod",
        header: "Medio de Pago",
        filter: true,
        filterElement: (
            <Dropdown
                options={Object.values(PaymentMethodEnum)}
                placeholder="Filtrar por Medio de Pago"
            />
        ),
        body: (rowData: Order) => (
            <PaymentMethodColumn paymentMethod={rowData.paymentMethod} />
        ),
    },
    {
        field: "orderState",
        header: "Estado del Pedido",
        filter: true,
        filterElement: (
            <Dropdown
                options={Object.values(OrderStatusEnum)}
                placeholder="Filtrar por Estado"
            />
        ),
        body: (rowData: Order) => (
            <OrderStatusColumn orderState={rowData.orderState} />
        ),
        style: {maxWidth: "12rem"},
    },
];
