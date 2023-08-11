<template>
    <div class="layout-notify">
        <el-dropdown trigger="click">
            <div class="el-badge">
                <el-badge is-dot>
                    <el-icon>
                        <Bell />
                    </el-icon>
                </el-badge>
            </div>
            <template #dropdown>
                <div class="el-tabs-content">
                    <el-tabs v-model="state.activeName" class="demo-tabs" @tab-click="handleTabs">
                        <el-tab-pane v-for="i in noticeInfo" :label="i.title" :name="i.key">
                            <NoticeList :data="state.renderData"/>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import NoticeList from './NoticeList.vue'
import { useNotifty } from '../../hooks/useNotifty'
const { state, noticeInfo, handleTabs } = useNotifty()

</script>

<style lang="less" scoped>
.layout-notify {
    color: @--shadow-white1;
    display: flex;
    align-items: center;
    height: 21px;

    .el-badge {
        color: @--shadow-white1;

        &:focus-visible {
            outline: none !important;
        }
    }
}

.el-tabs-content {
    padding: 10px 20px;
}
:deep(.el-tabs__nav-wrap) {
    padding: 0 30px !important;
}
</style>