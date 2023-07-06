import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Demo",
        component: () => import('../views/demo.vue')

    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
  })
export default router