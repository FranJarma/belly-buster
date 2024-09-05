import {Layout} from "@components/layout";

import OrderList from "./orders-list";

export const CrudOrders = () => {
    return (
        <Layout>
            <h1>Gestión de Pedidos</h1>
            <section className="main__container">
                <OrderList />
            </section>
        </Layout>
    );
};
