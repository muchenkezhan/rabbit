import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 配置elementui plus 按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 配置elementui

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 配置elementui plus 按需导入
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    // 配置elementui plus 按需导入
  ],
  resolve: {
    // 实际路径转换  @  ->  src
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
