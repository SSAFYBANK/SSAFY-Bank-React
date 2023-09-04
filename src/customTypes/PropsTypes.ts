/* Import */
import { ResponseFuncType } from "@customTypes/ResponseFuncType";
import { AxiosResponse } from "axios";

// ----------------------------------------------------------------------------------------------------

/* Export */
export interface TableProps {
    headers: string[];
    contents: any[][];
    align?: string;
}

export interface MenuBarProps {
    menuList: string[];
    onMenuClick: (menu: string) => void;
}

export interface ApiProps {
    responseFunc: ResponseFuncType;
    data: { [key: string]: any };
    routeTo: (path: string) => void;
}

export interface ProcessApiProps {
    responseFunc: ResponseFuncType;
    response: AxiosResponse;
}
