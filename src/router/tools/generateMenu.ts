import { usePermissionStore } from "@/store/modules/permission";

export async function getAsyncMenus() {
    const permissionStore = usePermissionStore();
    //filter hideMenu and meta.hideMenu
    const menuFilter = (items, parentPath = "") => {
        return items.filter((item) => {
            const show = !item.meta?.hideMenu && !item.hideMenu;
            //TODO: add config is add parent path
            item.path = parentPath ? parentPath + '/' + item.path : item.path
            if (show && item.children) {
                item.children = menuFilter(item.children, item.path);
            }
            return show;
        });
    };
    const menus = menuFilter(permissionStore.backMenuList)
    console.log(menus)
    return menus;
}
