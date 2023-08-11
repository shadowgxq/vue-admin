<template>
    <div class="noticeList">
        <div class="noticeItem" v-for="i in data" :key="i.id">
            <div class="noticeItem-avatar">
                <img :src="i.avatar" alt="">
            </div>
            <div class="noticeItem-title">{{ i.title }}</div>
            <div class="noticeItem-datetime">{{ i.datetime }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getNoticesListModule } from '@/core/models';
type Tprop = {
    data: getNoticesListModule
}
const prop = withDefaults(defineProps<Tprop>(), {
    data: () => []
})

</script>

<style lang="less" scoped></style>