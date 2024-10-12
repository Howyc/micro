import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import microApps from './microApps'
import { ElMessage } from 'element-plus'
import 'element-plus/es/components/message/style/css'
import router from './router';
// main.js
import microApp from '@micro-zoe/micro-app'
microApp.start({
  'disable-memory-router': true, // 关闭虚拟路由
  iframeSrc: 'http://localhost:5173/empty.html',// 防止 iframe沙箱加载主应用的资源
  lifeCycles: {
    created(e, appName) {
      console.log(`子应用${appName}被创建`)
    },
    beforemount(e, appName) {
      console.log(`子应用${appName}即将渲染`)
    },
    mounted(e, appName) {
      console.log(`子应用${appName}已经渲染完成`)
    },
    unmount(e, appName) {
      console.log(`子应用${appName}已经卸载`)
    },
    error(e, appName) {
      console.log(`子应用${appName}加载出错, ${e.detail.error}`)
      if (location.hostname !== 'localhost') return
      const { detail = {} } = e || {}
      const { error, name } = detail
      if (error.message === 'Failed to fetch') {
        ElMessage({
          message: `微前端: ${appName} 尚未启动。</u>`,
          type: 'error',
          plain: true,
        })
      }
    }
  },
  plugins: {
    modules: {
      'vueProject': [{
        loader(code) {
          if (process.env.NODE_ENV === 'development') {
            let reg = /(from|import)\s*['"]\s*\/vueProject\/\s*/g;
            // 这里 basename 需要和子应用vite.config.js中base的配置保持一致 
            // 这里处理的是开发环境下匹配到from 或者import 引入的文件以子应用域名/basename去替换 
            code = code.replace(reg, all => {
              return all.replace('/vueProject/', 'http://localhost:6060/vueProject')
            })
          }
          return code
        }
      }]
    }
  }
})
microApp.router.setBaseAppRouter(router);

createApp(App).use(router).mount('#app')
