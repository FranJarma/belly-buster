import {ROUTES_CONSTS} from "@constants/routes.constants";
import {Login} from "@pages/auth/components/login/login";
import {Business} from "@pages/business/components/business";
import {Home} from "@pages/home/home";
import {NotFound} from "@pages/not-found/not-found";
import {CrudOrders} from "@pages/orders/components/orders";
import {CrudProducts} from "@pages/products/components/products";
import {CrudUsers} from "@pages/users/components/users";
import {Route, RouteProps, Routes} from "react-router-dom";

const routes: RouteProps[] = [
    {
        element: <CrudUsers />,
        path: ROUTES_CONSTS.MANAGE_USERS_ROUTE,
    },
    {
        element: <CrudOrders />,
        path: ROUTES_CONSTS.MANAGE_ORDERS_ROUTE,
    },
    {
        element: <CrudProducts />,
        path: ROUTES_CONSTS.MANAGE_PRODUCTS_ROUTE,
    },
    {
        element: <Business />,
        path: ROUTES_CONSTS.MANAGE_BUSINESS_ROUTE,
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
