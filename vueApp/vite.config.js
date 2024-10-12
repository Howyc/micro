import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
const publicPath = '/vueProject';
const devPublicPath = '/';
export default defineConfig(({ command, mode }) => {
  const plugins = []
  return {
    base: publicPath,
    build: {
      sourcemap: true,
    },
    plugins: [
      vue(),
      ...plugins,
    ],
    server: {
      open: true,
      host: true,
      // 主应用与 子应用不一定一个域名 所以需要配置跨域
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      port: '6060',
      // 本地开发时，通过主应用访问子应用时，子应用接口跨域
      // 需要将子应用proxy 在主应用中配置一遍
      proxy: {
      },
    },
  }
})
