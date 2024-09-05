import {Route, RouteProps, Routes} from "react-router-dom";

import {ROUTES_CONSTS} from "@constants/index";
import {
    Business,
    CrudOrders,
    CrudProducts,
    CrudUsers,
    Home,
    Login,
    NotFound,
} from "@pages/index";

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
