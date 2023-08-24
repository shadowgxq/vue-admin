<template>
    <Breadcrumb></Breadcrumb>
    <el-main class="main-layout">
        <el-card>
            <router-view></router-view>
        </el-card>
    </el-main>
</template>

<script lang="ts" setup>
import Breadcrumb from './Breadcrumb/index.vue'
</script>

<style lang="less" scoped>
.main-layout {
    background-color: @--shaodw-grey-color;
}
</style>