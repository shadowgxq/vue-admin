//全局的常量文件
export const TOKEN_S = "TOKEN_S"
export const USER_INFO = "USER_INFO"

export const LAYOUT = () => import("@/layout/index.vue")
export const PAGENOTFOUND = () => import('@/views/sys/404.vue')

export const HOME_ROUTE = '/dashboard'

export const DOMAIN = 'https://www.baidu.com'

export const PAGE_NOT_FOUND_ROUTE = {
    path: '/:path(.*)*',
    name: "PageNotFound",
    component: LAYOUT,
    meta: {
        title: 'ErrorPage',
        hideBreadcrumb: true,
        hideMenu: true,
    },
    children: [
        {
            path: '/:path(.*)*',
            name: "PageNotFound",
            component: PAGENOTFOUND,
            meta: {
                title: 'ErrorPage',
                hideBreadcrumb: true,
                hideMenu: true,
            },
        },
    ],
};