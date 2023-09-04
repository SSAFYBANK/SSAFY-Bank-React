/* Import */
import { ResponseFuncType } from "@customTypes/ResponseFuncType";

// ----------------------------------------------------------------------------------------------------

/* Export */
export interface TableProps {
    headers: string[];
    contents: any[][];
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
