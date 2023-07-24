import { useUserStore } from '@/store/modules/user'
import type { RouteRecordRaw, Router } from 'vue-router'
import { whitePathList } from '../static/baseRouter'
export function setupRouterGuard(router: Router) {
    //权限控制
    createPermissionGuard(router)
}
function createPermissionGuard(router: Router) {
    const userStore = useUserStore()
    // const permissionStore = usePermissionStore()
    router.beforeEach(async (to, from, next) => {
        const token = userStore.token
        if (whitePathList.includes(to.path)) {
            if (to.path === '/login' && token) {
                // const isSessionTimeout = userStore.getSessionTimeout;
                // await userStore.afterLoginAction();
                // if (!isSessionTimeout) {
                //     next((to.query?.redirect as string) || '/');
                //     return;
                // }
            }
            next();
            return;
        }
        //token does not exist
        if (!token) {
            if (to.meta.ignoreAuth) {
                next()
                return
            }
            const loginRouter = {
                path: "/login",
                replace: true,
                query: {
                    redirect: to.path || ""
                }
            }
            next(loginRouter)
            return
        }


    })
}