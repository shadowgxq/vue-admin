import { defineStore } from 'pinia'
import { getMenuList } from '@/api/sys/menu';
import { RouteItem } from '@/core/models';
import { generateMenu } from '@/router/tools/generateMenu';
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
        setBackMenuList(list) {
            this.backMenuList = list
        },
        async buildRoutes(): Promise<RouteItem[]> {
            let routesList: RouteItem[] = [];
            routesList = (await getMenuList()).result as RouteItem[];
            routesList = generateMenu(routesList)
            this.setBackMenuList(routesList);
            
            return routesList
        }
    }
})