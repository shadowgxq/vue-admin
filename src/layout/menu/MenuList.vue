<template>
    <template v-for="route in routes" :key="route.path">
        <template v-if="!route.children || route.children.length === 0">
            <el-menu-item :index="route.path">
                <el-icon v-if="route.meta.icon">
                    <component :is="route.meta.icon"></component>
                </el-icon>
                <span>{{ route.name }}</span>
            </el-menu-item>
        </template>
        <template v-else>
            <el-sub-menu :index="route.path">
                <template #title>
                    <el-icon v-if="route.meta.icon">
                        <component :is="route.meta.icon"></component>
                    </el-icon>
                    <span>{{ route.name }}</span>
                </template>
                <!--Component self-recursion-->
                <menu-list :routes="route.children"></menu-list>
            </el-sub-menu>
        </template>
    </template>
</template>
<script setup lang="ts">

type propsType = {
    routes: Array<any>
}
withDefaults(defineProps<propsType>(), {
    routes: () => []
})

</script>

<style lang="less" scoped></style>