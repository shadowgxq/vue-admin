export interface NoticeItem {
    id: string,
    avatar: string,
    title: string,
    datetime: string,
    type: string,
}

/**
 * @description: Get menu return value
 */
export type getNoticesListModule = NoticeItem[];