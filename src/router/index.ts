import { App } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { baseRouter } from './static/baseRouter';

const routes: Array<RouteRecordRaw> = [
    ...baseRouter
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

export function setupRouter(app: App<Element>) {
    app.use(router);
}
