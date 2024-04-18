import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "path";
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
      // 其他别名配置
    },
  },
  esbuild: {
    loader: 'ts'
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve(
              'src/assets/style/breakpoint.less'
          )}";`,
        },
        javascriptEnabled: true,
      },
    },
  },
  server: {
    hmr:true,
    proxy: {
      '/api': { // 配置需要代理的路径 --> 这里的意思是代理http://localhost:80/api/后的所有路由
        target: 'http://localhost:3000', // 目标地址 --> 服务器地址
        changeOrigin: true, // 允许跨域
        ws: true,  // 允许websocket代理
        rewrite: (path) => path.replace(/^\/api/, '/api'), // 重写路径，去掉/api
      },
      '/uploads': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/uploads/, '/uploads'),
      }
    },
  },
})
