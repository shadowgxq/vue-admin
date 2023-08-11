<template>
    <el-header>
        <div class="el-header-content">
            <div class="el-header-content-logo shadow-flex">
                <a :href="DOMAIN">
                    <img src="@/assets/images/logo.svg" alt="">
                </a>
                <h1 class="m-l-15">Shadow Admin</h1>
            </div>
            <div class="el-header-content-userInfo shadow-flex shadow-flex-center">
                <div class="userInfo-item">
                    <el-icon>
                        <QuestionFilled />
                    </el-icon>
                </div>
                <div class="userInfo-item">
                    <notify></notify>
                </div>
                <div class="userInfo-item">
                    <userDropDown></userDropDown>
                </div>
            </div>
        </div>
    </el-header>
</template>
<script setup lang="ts">
import { DOMAIN } from '@/core/code/core.code'
import userDropDown from './components/UserDropDown.vue'
import notify from './components/notify/Notify.vue'
</script>
<style lang="less" scoped>
h1 {
    font-size: 18px;
}

.el-header {
    height: @--shaodw-header-height;
    background: @--shadow-header-bg !important;
    color: @--shadow-white1 !important;
    padding: 0 16px;
}

.el-header-content {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: space-between;

    .el-header-content-logo {
        a {
            img {
                height: 28px;
            }
        }

    }
}

.el-header-content-userInfo {
    .userInfo-item {
        cursor: pointer;
        box-sizing: border-box;
        padding: 0 12px;
    }
}

:deep(.el-dropdown-menu .el-dropdown-item:hover) {
    background-color: @--sahdow-background-white;
    color: @--shadow-black;
    outline: none;
}
</style>