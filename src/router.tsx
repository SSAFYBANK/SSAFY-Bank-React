/* Import */
import Home from "@pages/home/Home";
import Login from "@pages/login/Login";
import Service from "@pages/service/Service";
import Info from "@pages/info/Info";
import AccountCreate from "@pages/service/AccountCreate";
import AccountDelete from "@pages/service/AccountDelete";
import AccountHolderCreate from "@pages/service/AccountHolderCreate";
import AccountHolderDelete from "@pages/service/AccountHolderDelete";
import AccountHolderList from "@pages/service/AccountHolderList";
import BankList from "@pages/service/BankList";
import ExchangeRate from "@pages/service/ExchangeRate";
import GetAccountHolderList from "@pages/service/GetAccountHolderList";
import GetAccountList from "@pages/service/GetAccountList";
import GetBalance from "@pages/service/GetBalance";
import GetPassword from "@pages/service/GetPassword";
import TransferDelete from "@pages/service/TransferDelete";
import TransferDeposit from "@pages/service/TransferDeposit";
import TransferList from "@pages/service/TransferList";
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
            {
                id: "AccountCreate",
                path: "account-create",
                element: <AccountCreate />,
            },
            {
                id: "AccountDelete",
                path: "account-delete",
                element: <AccountDelete />,
            },
            {
                id: "AccountHolderCreate",
                path: "account-holder-create",
                element: <AccountHolderCreate />,
            },
            {
                id: "AccountHolderDelete",
                path: "account-holder-delete",
                element: <AccountHolderDelete />,
            },
            {
                id: "AccountHolderList",
                path: "account-holder-list",
                element: <AccountHolderList />,
            },
            {
                id: "BankList",
                path: "bank-list",
                element: <BankList />,
            },
            {
                id: "ExchangeRate",
                path: "exchange-rate",
                element: <ExchangeRate />,
            },
            {
                id: "GetAccountHolderList",
                path: "get-account-holder-list",
                element: <GetAccountHolderList />,
            },
            {
                id: "GetAccountList",
                path: "get-account-list",
                element: <GetAccountList />,
            },
            {
                id: "GetBalance",
                path: "get-balance",
                element: <GetBalance />,
            },
            {
                id: "GetPassword",
                path: "get-password",
                element: <GetPassword />,
            },
            {
                id: "TransferDelete",
                path: "transfer-delete",
                element: <TransferDelete />,
            },
            {
                id: "TransferDeposit",
                path: "transfer-deposit",
                element: <TransferDeposit />,
            },
            {
                id: "TransferList",
                path: "transfer-list",
                element: <TransferList />,
            },
        ],
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
