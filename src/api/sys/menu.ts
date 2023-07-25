import { getMenuListResultModel } from '@/core/models';
import service from '../index'

export const getMenuList = () => {
    return service<{result: getMenuListResultModel}>({
        method: "get",
        url: '/getMenuList',
    });
};
