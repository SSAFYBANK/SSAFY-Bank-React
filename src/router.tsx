/* Import */
import Home from "@pages/home/Home";
import Login from "@pages/login/Login";
import Service from "@pages/service/Service";
import Info from "@pages/info/Info";
import { RouteObject, createBrowserRouter } from "react-router-dom";

// ----------------------------------------------------------------------------------------------------

/* Data for Router */
const routeList: RouteObject[] = [
    {
        id: "home",
        path: "/",
        element: <Home />,
    },
    {
        id: "login",
        path: "/login",
        element: <Login />,
    },
    {
        id: "service",
        path: "/service",
        element: <Service />,
    },
    {
        id: "info",
        path: "/info",
        element: <Info />,
    },
];

// ----------------------------------------------------------------------------------------------------

/* Router */
const router = createBrowserRouter(routeList);

// ----------------------------------------------------------------------------------------------------

/* Export */
export default router;
