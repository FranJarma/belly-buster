import {Route, RouteProps, Routes} from "react-router-dom";

import {ROUTES_CONSTS} from "@constants/routes.constants";

import {CrudOrders} from "@pages/orders/components/orders";
import {CrudProducts} from "@pages/products/components/products";
import {Home} from "@pages/home/home";
import {Login} from "@pages/auth/components/login";
import {NotFound} from "@pages/not-found/not-found";

const routes: RouteProps[] = [
    {
        element: <CrudOrders />,
        path: ROUTES_CONSTS.MANAGE_ORDERS_ROUTE,
    },
    {
        element: <CrudProducts />,
        path: ROUTES_CONSTS.MANAGE_PRODUCTS_ROUTE,
    },
    {
        element: <Home />,
        path: ROUTES_CONSTS.HOME_ROUTE,
    },
    {
        element: <Login />,
        path: "/",
    },
    {
        element: <NotFound />,
        path: "*",
    },
];

export const AppRoutes = () => {
    return (
        <Routes>
            {routes.map((route) => (
                <Route
                    key={route.path}
                    element={route.element}
                    path={route.path}
                />
            ))}
        </Routes>
    );
};
