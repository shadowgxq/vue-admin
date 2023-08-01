import { ref, unref, watch } from 'vue'
import { getAsyncMenus } from '@/router/tools/generateMenu'
import { usePermissionStore } from '@/store/modules/permission';
export const useLayoutMenu = () => {
    const menusRef = ref()
    const permissionStore = usePermissionStore();

    async function genMenus() {
        menusRef.value = await getAsyncMenus();
        return;
    }
    
    // Menu changes
    watch(
        () => permissionStore.backMenuList,
        () => {
            genMenus();
        },
        {
            immediate: true,
        },
    );
    return {
        menusRef
    }
}