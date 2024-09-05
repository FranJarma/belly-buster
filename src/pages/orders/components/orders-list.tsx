import {ColumnConfig} from "@components/ui/datatable/types/column";
import {Datatable} from "@components/ui";

import {orders} from "../data/order-data";
import {orderTableColumns} from "../data/order-columns";

import {Order} from "../types/Order";

import {CreateOrder} from "./partials/create-order/create-order";

export default function OrderList() {
    return (
        <>
            <Datatable<Order>
                createNewForm={<CreateOrder />}
                createNewLabel="Nuevo Pedido"
                data={orders}
                columns={orderTableColumns as ColumnConfig<Order>[]}
                globalFilterFields={[
                    "clientName",
                    "products",
                    "orderState",
                    "paymentMethod",
                ]}
            />
        </>
    );
}
