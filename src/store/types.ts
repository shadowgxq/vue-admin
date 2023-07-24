export interface MenuTag {
    type?: 'primary' | 'error' | 'warn' | 'success';
    content?: string;
    dot?: boolean;
}

export interface Menu {
    name: string;
    icon?: string;
    path: string;
    // path contains param, auto assignment.
    paramPath?: string;
    disabled?: boolean;
    children?: Menu[];
    orderNo?: number;
    roles?: string;
    meta?: string;
    tag?: MenuTag;
}

export interface UserInfo {
    userId: string | number;
    username: string;
    avatar: string;
}