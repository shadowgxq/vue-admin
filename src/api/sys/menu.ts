import { getMenuListResultModel } from '@/core/models';
import service from '../index'

export const getMenuList = () => {
    return service<getMenuListResultModel>({
        method: "get",
        url: '/getMenuList',
    });
};
