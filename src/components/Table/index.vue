<template>
  <el-table :data="dataSource" style="width: 100%">
    <template v-for="i in columns" :key="i.key || i.dataIndex">
      <el-table-column :prop="i.dataIndex" :label="i.title" :width="i?.width"/>
    </template>
  </el-table>
</template>

<script lang="ts" setup>
import { TableProps } from "./type/TableType";
import { ElTable } from 'element-plus'
const props = defineProps<TableProps>();
//dataSource
</script>
