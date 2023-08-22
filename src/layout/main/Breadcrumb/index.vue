<template>
    <div class="Breadcrumb">
        <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item v-for="i in breadcrumbList" :key="i.key">{{ i.name }}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { useBreadcrumb } from './useBreadcrumb'
import { nextTick, onMounted, watch, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { usePermissionStore } from '@/store/modules/permission';
const router = useRouter()
const { breadcrumbList, initBreadcrumb } = useBreadcrumb()

watchEffect(() => {
    initBreadcrumb(router)
})
</script>

<style lang="less" scoped>
.main-layout {
    background-color: @--shaodw-grey-color;
}

.Breadcrumb {
    box-sizing: border-box;
    padding: 16px 24px;
}
</style>