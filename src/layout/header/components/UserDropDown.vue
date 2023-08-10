<template>
    <div class="layout-userdropdown">
        <el-dropdown>
            <div class="usename">
                <img src="@/assets/images/avatar.png" alt="">
                <div class="m-l-10">shadow</div>    
            </div>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item><el-icon color="rgba(0,0,0,.8)"><User/></el-icon>个人中心</el-dropdown-item>
                    <el-dropdown-item>个人设置</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.el-dropdown-menu .el-dropdown-item:hover {
    background-color: #f0f0f0;
    color: #333;
    outline: none;
}

.usename {
    color: @--shadow-white1;
    display: flex;
    align-items: center;
    img {
        width: 24px;
    }
    &:focus-visible {
        outline: none !important;
    }
}
</style>