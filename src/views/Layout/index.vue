<script setup>
import { onMounted } from "vue";
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import layoutFixed from "@/views/Layout/components/layoutFixed.vue";

// 1.导入方法 use 打头的方法
import { useCategoryStore } from "@/stores/category";
// 2.执行方法得到实例对象
const categoryStore=useCategoryStore()

onMounted(() => {
 categoryStore.getCategory()
})
</script>
 
<template>
  <layoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <!-- 路由出口 -->
  <RouterView />
    <!-- 路由出口 -->
  <LayoutFooter />
</template>