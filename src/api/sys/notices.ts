import { getNoticesListModule } from '@/core/models';
import service from '../index'

export const getNoticesList = () => {
    return service<{result: getNoticesListModule}>({
        method: "get",
        url: '/notices',
    });
};
