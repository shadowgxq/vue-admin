import { getValueByArrayKeys } from '@/util';
import axios, { CancelTokenSource } from 'axios';
import { ref, reactive } from 'vue';

const CancelToken = axios.CancelToken;
let currentRequest: CancelTokenSource | null = null;

export const usePagination = (apiFunc, params, filter: string[] = ["data"]) => {
    const listData = reactive({
        list: [],
        loading: false,
        finished: false,
    });
    const pagination = reactive({
        page: 1,
        pageSize: 10,
        total: 0,
    })
    const onLoadMore = async () => {
        if (listData.finished) {
            return;
        }
        if (currentRequest) {
            currentRequest.cancel();
        }
        listData.loading = true;
        let currentParams = { ...params, page: pagination.page, limit: pagination.pageSize };
        try {
            currentRequest = CancelToken.source();
            let res = await apiFunc(currentParams, currentRequest.token);
            let result = getValueByArrayKeys(res, filter)
            pagination.total = getValueByArrayKeys(res, filter.slice(0, -1).concat("total"));
            currentRequest = null;
            listData.list = listData.list.concat(result);
            pagination.page += 1;
            if (result.length < pagination.pageSize) {
                listData.finished = true;
            }
            listData.loading = false;
        } catch (e) {
            currentRequest = null;
            listData.loading = false;
            listData.finished = true
        }
    };

    const reset = () => {
        listData.list = [];
        pagination.page = 1;
        listData.finished = false;
        onLoadMore();
    };

    return {
        listData,
        reset,
        onLoadMore,
        pagination
    };
};
