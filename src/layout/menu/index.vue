<template>
    <el-col>
        <el-menu class="el-menu-container" mode="vertical" :default-active="state.activePath" :collapse="state.isCollapse"
            :unique-opened="true" :router="true" @select="handleMenuSelect">
            <menu-list :routes="menusRef"></menu-list>
            <div class="menu-control-expand" @click="toggleCollapse">
                <el-icon class="menu-control-expand-icon"><Expand /></el-icon>
            </div>
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
.menu-control-expand {
    cursor: pointer;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    border-top: 1px solid rgba(0,0,0,.06);
    .menu-control-expand-icon {
        color: @--shadow-black;
    }
}
</style>
