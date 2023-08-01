import { defineStore } from 'pinia'
import { getMenuList } from '@/api/sys/menu';
import { RouteItem } from '@/core/models';
import { generateRouterList } from '@/router/tools/generateRouterList';
export const usePermissionStore = defineStore({
    id: "permission",
    state: () => ({
        permCodeList: [1000, 2000, 300],
        backMenuList: [],
        hasAddedRoute: false
    }),
    getters: {
        getHasAddedRoute(state) {
            return state.hasAddedRoute
        },
        getBackMenuList(state) {
            return state.backMenuList
        }
    },
    actions: {
        setPermCodeList(list: Array<number>) {
            this.permCodeList = list
        },
        setBackMenuList(list) {
            this.backMenuList = list
        },
        setHasAddedRoute(state: boolean) {
            this.hasAddedRoute = state
        },
        async buildRoutes(): Promise<RouteItem[]> {
            let routesList: RouteItem[] = [];
            routesList = (await getMenuList()).result as RouteItem[];
            routesList = generateRouterList(routesList)
            this.setBackMenuList(routesList);
            return routesList
        }
    }
})