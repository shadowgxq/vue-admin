import { defineStore } from 'pinia'
import { getMenuList } from '@/api/sys/menu';
import { RouteItem } from '@/core/models';
export const usePermissionStore = defineStore({
    id: "permission",
    state: () => ({
        permCodeList: [1000, 2000, 300],
        backMenuList: [],
    }),
    actions: {
        setPermCodeList(list: Array<number>) {
            this.permCodeList = list
        },
        async buildRoutes() {
            let routesList: RouteItem[] = [];
            routesList = (await getMenuList()) as RouteItem[];
            console.log(routesList)

        }
    }
})