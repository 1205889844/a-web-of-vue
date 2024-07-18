<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">
      <RouterLink to="/" class="nounderline">Home</RouterLink>
    </el-menu-item>
    <el-menu-item index="1">
      <RouterLink to="/about" class="nounderline">About</RouterLink>
    </el-menu-item>
    <div class="flex-grow" />

    <el-sub-menu index="100">
      <template #title>ovo</template>
      <el-menu-item index="100-1">1</el-menu-item>
      <el-menu-item index="100-2">2</el-menu-item>
      <el-menu-item index="100-3">3</el-menu-item>

      </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {RouterLink} from "vue-router";

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
.nounderline{
  text-decoration: none;
}
</style>
