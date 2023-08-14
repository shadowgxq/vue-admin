import { getNoticesList, } from '@/api/sys/notices'
import { getNoticesListModule } from '@/core/models';
import { TabsPaneContext } from 'element-plus/lib/components/tabs/src/constants.js';
import { onMounted, reactive, ref } from 'vue'

export type TState = {
    activeName: string
    data: getNoticesListModule
    renderData: getNoticesListModule
}

export const useNotifty = () => {
    const state = reactive<TState>({
        activeName: "notification",
        data: [],
        renderData: []
    })
    const noticeInfo = ref([
        {
            title: "通知",
            key: "notification",
            number: 0
        },
        {
            title: "消息",
            key: "message",
            number: 0
        },
        {
            title: "待办",
            key: "event",
            number: 0
        }
    ])
    //init notifty
    async function initNotifty() {
        getNoticesList().then(res => {
            state.data = res.result
            state.renderData = res.result.filter(i => i.type == state.activeName)
        })
    }

    const handleTabs = (tab: TabsPaneContext, event: Event) => {
        console.log(tab, event)
        let pane = tab.paneName as string
        state.activeName = pane
        state.renderData = state.data.filter(i => i.type == pane)
    }

    onMounted(() => {
        initNotifty()
    })
    return {
        state,
        noticeInfo,
        initNotifty,
        handleTabs
    }
}