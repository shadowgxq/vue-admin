//静态路由表
export const whitePathList = ["/login"]
export const baseRouter = [
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