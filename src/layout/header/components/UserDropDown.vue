<template>
    <div class="layout-userdropdown">
        <el-dropdown>
            <div class="usename">
                <img src="@/assets/images/avatar.png" alt="">
                <div class="m-l-10">shadow</div>
            </div>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item @click="handleDropdownItem('center')"><el-icon color="rgba(0,0,0,.8)">
                            <User />
                        </el-icon>个人中心</el-dropdown-item>
                    <el-dropdown-item @click="handleDropdownItem('setting')"><el-icon color="rgba(0,0,0,.8)">
                            <Setting />
                        </el-icon>个人设置</el-dropdown-item>
                    <el-dropdown-item @click="handleDropdownItem('loginout')"><el-icon color="rgba(0,0,0,.8)">
                            <SwitchButton />
                        </el-icon>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup lang="ts">
type TDropdown = "center" | "setting" | "loginout"

function handleDropdownItem(type: TDropdown) {
    switch (type) {
        case "center":

            break;
        case "setting":

            break;
        case "loginout":
            
            break;
    }
}   
</script>

<style lang="less" scoped>
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

:deep(.el-dropdown-menu__item:not(.is-disabled):focus) {
    background-color: @--sahdow-background-white;
    color: @--shadow-black;
}
</style>