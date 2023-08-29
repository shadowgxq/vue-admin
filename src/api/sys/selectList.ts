import { roleListItemMoudle } from '@/core/models';
import service from '../index'

export const getAllRoleList = () => {
    return service<{result: roleListItemMoudle}>({
        method: "get",
        url: '/system/getAllRoleList',
    });
};
