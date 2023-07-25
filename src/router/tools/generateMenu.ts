import { LAYOUT } from "@/core";
import { RouteItem } from "@/core/models";
import { cloneDeep } from "@/util";

export const generateMenu = (routesList: RouteItem[]) => {
    routesList.forEach(route => {
        const component = route.component as string
        if (component.toUpperCase() === 'LAYOUT') {
            route.component = LAYOUT;
        } else {
            route.children = [cloneDeep(route)];
            route.component = LAYOUT;
            route.name = `${route.name}Parent`;
            route.path = '';
        }
        route.children && asyncImportRoute(route.children);
    })
    return routesList
}

let dynamicViewsModules: Record<string, () => Promise<Recordable>>;


function asyncImportRoute(routes: RouteItem[]) {
    dynamicViewsModules = dynamicViewsModules || import.meta.glob('@/views/**/*.{vue,tsx}');
    routes.forEach(item => {
        const { component, children } = item;
        item.component = item.component && dynamicImport(dynamicViewsModules, component);
        children && asyncImportRoute(children);
    })
}

//对components路径的转化
function dynamicImport(dynamicViewsModules, component) {
    const keys = Object.keys(dynamicViewsModules);
    //匹配路径
    const matchKeys = keys.filter(key => {
        const endFlag = component.endsWith('.vue')
        const k = key.replace(/^(.*\/)?src\/views/, '')
        const lastIndex = endFlag ? k.length : k.lastIndexOf('.');
        return k.slice(0, lastIndex) === component
    })
    if (matchKeys.length == 1) {
        return dynamicViewsModules[matchKeys[0]]
    }
}