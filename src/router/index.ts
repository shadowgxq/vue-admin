import { App } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { BaseRouter, RootRoute } from './static/baseRouter';

const routes: Array<RouteRecordRaw> = [
    RootRoute,
    ...BaseRouter
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

export function setupRouter(app: App<Element>) {
    app.use(router);
}
