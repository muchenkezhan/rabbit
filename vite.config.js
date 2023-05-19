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
      // 配置elementPlus采用sass样式配色系统  通知element  用sass做替换
      resolvers: [ElementPlusResolver({importStyle:"sass"})],
    }),
    // 配置elementui plus 按需导入
  ],
  resolve: {
    // 实际路径转换  @  ->  src
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 自动导入定制化样式文件进行样式覆盖
        additionalData: `
          @use "@/styles/element/index.scss" as *;
        `,
      }
    }
  }
})
