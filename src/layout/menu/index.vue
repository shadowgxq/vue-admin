<template>
    <el-col>
        <el-menu class="el-menu-container" mode="vertical" :default-active="state.activePath" :collapse="state.isCollapse"
            :unique-opened="true" :router="true" @select="handleMenuSelect">
            <menu-list :routes="menusRef"></menu-list>
            <button @click="toggleCollapse">
                {{ state.isCollapse ? '展开菜单' : '折叠菜单' }}
            </button>
        </el-menu>

    </el-col>
</template>
<script setup lang="ts">
import { useLayoutMenu } from './useLayoutMenu'
import { reactive } from 'vue';
import MenuList from './MenuList.vue'
const { menusRef } = useLayoutMenu()
const state = reactive({
    activePath: "",
    isCollapse: false
})

function handleMenuSelect(index) {
    state.activePath = index
}

function toggleCollapse() {
    state.isCollapse = !state.isCollapse
}
</script>

<style lang="less" scoped>
.el-menu {
    height: calc(100vh - @--shaodw-header-height);

}

.el-menu-container:not(.el-menu--collapse) {
    width: 200px;
}
</style>
