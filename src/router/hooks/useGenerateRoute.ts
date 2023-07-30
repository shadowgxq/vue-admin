import { PAGE_NOT_FOUND_ROUTE } from "@/core";
import { router } from "@/router";
import { usePermissionStore } from "@/store/modules/permission";
import { RouteRecordRaw } from "vue-router";

export const useGenerateRoute = () => {
    const permission = usePermissionStore();

    async function handleMountRoute() {
        const routes = await permission.buildRoutes();
        routes.forEach((route) => {
            router.addRoute(route as unknown as RouteRecordRaw);
        });
        router.addRoute(PAGE_NOT_FOUND_ROUTE as unknown as RouteRecordRaw);
        permission.setHasAddedRoute(true);

    }

    return {
        handleMountRoute
    }
}