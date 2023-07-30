import { HOME_ROUTE } from '@/core';

//静态路由表
export const whitePathList = ["/login"]


export const RootRoute = {
    path: '/',
    name: 'Root',
    redirect: HOME_ROUTE,
    meta: {
        title: 'Root',
    },
};

export const BaseRouter = [
    {
        path: "/demo",
        name: "demo",
        component: () => import('@/views/demo.vue')

    },
    {
        path: "/login",
        name: "Login",
        component: () => import('@/views/sys/Login.vue')
    },
    {
        path: "/404",
        name: "404",
        component: () => import('@/views/sys/404.vue')
    }
]