<template>
  <div class="noticeList">
    <div class="noticeItem" v-for="i in data" :key="i.id">
      <div class="noticeItem-avatar" v-show="i.avatar">
        <img :src="i.avatar" alt="" />
      </div>
      <div>
        <div class="noticeItem-title">{{ i.title }}</div>
        <div class="noticeItem-description" v-show="i.description">{{ i.description }}</div>
        <div class="noticeItem-datetime">{{ i.datetime }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getNoticesListModule } from "@/core/models";
type Tprop = {
  data: getNoticesListModule;
};
const prop = withDefaults(defineProps<Tprop>(), {
  data: () => [],
});
</script>

<style lang="less" scoped>
.noticeList {
  .noticeItem {
    display: flex;
    padding: 12px;
    .noticeItem-avatar {
      flex-shrink: 0;
      box-sizing: border-box;
      margin: 0 15px 0 0;
      padding: 0;
      color: rgba(0, 0, 0, 0.85);
      font-size: 14px;
      font-variant: tabular-nums;
      line-height: 1.5715;
      list-style: none;
      position: relative;
      display: inline-block;
      overflow: hidden;
      color: #fff;
      white-space: nowrap;
      text-align: center;
      vertical-align: middle;
      width: 32px;
      height: 32px;
      line-height: 32px;
      border-radius: 50%;
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .noticeItem-title {
    }
    .noticeItem-datetime {
        color: rgba(0,0,0,.45);
    }
    .noticeItem-description {
        color: rgba(0,0,0,.45);
    }
  }
}
</style>
