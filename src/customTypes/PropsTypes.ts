/* Export */
export interface TableProps {
    headers: string[];
    contents: any[][];
}

export interface MenuBarProps {
    menuList: string[];
    onMenuClick: (menu: string) => void;
}
