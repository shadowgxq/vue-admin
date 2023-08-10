<template>
    <el-header>
        <div class="el-header-content">
            <div class="el-header-content-logo vue-flex">
                <a :href="DOMAIN">
                    <img src="@/assets/images/logo.svg" alt="">
                </a>
                <h1 class="m-l-15">Shadow Admin</h1>
            </div>
            <div class="el-header-content-userInfo">
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
</style>