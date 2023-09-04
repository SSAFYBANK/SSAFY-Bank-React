/* Import */
import Home from "@pages/home/Home";
import Login from "@pages/login/Login";
import Service from "@pages/service/Service";
import Info from "@pages/info/Info";
import AccountCreate from "@pages/service/AccountCreate"
import AccountDelete from "./pages/service/AccountDelete";
import AccountHolderCreate from "./pages/service/AccountHolderCreate";
import AccountHolderDelete from "./pages/service/AccountHolderDelete";
import AccountHolderList from "./pages/service/AccountHolderList";
import BankList from "./pages/service/BankList";
import ExchangeRate from "./pages/service/ExchangeRate";
import GetAccountHolderList from "./pages/service/GetAccountHolderList";
import GetAccountList from "./pages/service/GetAccountList";
import GetBalance from "./pages/service/GetBalance";
import GetPassword from "./pages/service/GetPassword";
import TransferDelete from "./pages/service/TransferDelete";
import TransferDeposit from "./pages/service/TransferDeposit";
import TransferList from "./pages/service/TransferList";
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
        children: [
            { path: "AccountCreate", element: <AccountCreate /> },
            { path: "AccountDelete", element: <AccountDelete /> },
            { path: "AccountHolderCreate", element: <AccountHolderCreate /> },
            { path: "AccountHolderDelete", element: <AccountHolderDelete /> },
            { path: "AccountHolderList", element: <AccountHolderList /> },
            { path: "BankList", element: <BankList /> },
            { path: "ExchangeRate", element: <ExchangeRate /> },
            { path: "GetAccountHolderList", element: <GetAccountHolderList /> },
            { path: "GetAccountList", element: <GetAccountList /> },
            { path: "GetBalance", element: <GetBalance /> },
            { path: "GetPassword", element: <GetPassword /> },
            { path: "TransferDelete", element: <TransferDelete /> },
            { path: "TransferDeposit", element: <TransferDeposit /> },
            { path: "TransferList", element: <TransferList /> },
        ]
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
