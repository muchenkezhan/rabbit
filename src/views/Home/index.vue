<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
import HomePanel from "./components/HomePanel/index.vue"
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />
  <HomePanel title="新鲜好物" subTitle="新鲜好物好  好多商品">
    <div>
      我是插槽部分
    </div>
  </HomePanel>
  <HomePanel title="人气推荐" subTitle="新鲜好物好  好多商品">
    
  </HomePanel>
</template>