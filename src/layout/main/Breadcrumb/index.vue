<template>
    <div class="breadcrumb" v-if="breadcrumbVisiable">
        <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item v-for="i in breadcrumbList" :key="i.key">{{ i.name }}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="breadcrumb-title m-t-10">{{ breadcrumbList[breadcrumbList.length - 1].name }}</div>
    </div>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { useBreadcrumb } from './useBreadcrumb'
import { nextTick, onMounted, watch, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { usePermissionStore } from '@/store/modules/permission';
const router = useRouter()
const { breadcrumbList, initBreadcrumb, breadcrumbVisiable } = useBreadcrumb()

watchEffect(() => {
    initBreadcrumb(router)
})
</script>

<style lang="less" scoped>
.main-layout {
    background-color: @--shaodw-grey-color;
}

.breadcrumb {
    box-sizing: border-box;
    padding: 16px 24px;

    .breadcrumb-title {
        margin-right: 12px;
        margin-bottom: 0;
        color: rgba(0, 0, 0, .85);
        font-weight: 600;
        font-size: 20px;
        line-height: 32px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
}
</style>