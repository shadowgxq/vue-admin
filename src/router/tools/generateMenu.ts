import { usePermissionStore } from "@/store/modules/permission";

export async function getAsyncMenus() {
    const permissionStore = usePermissionStore();
    //filter hideMenu and meta.hideMenu
    const menuFilter = (items) => {
        return items.filter((item) => {
            const show = !item.meta?.hideMenu && !item.hideMenu;
            if (show && item.children) {
                item.children = menuFilter(item.children);
            }
            return show;
        });
    };
    const menus = menuFilter(permissionStore.backMenuList)
    return menus;
}
