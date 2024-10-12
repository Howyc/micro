// main.js
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './router'
import App from './App.vue'

let app = null
let router = null
let history = null
function handleMicroData(router) {
  // 是否是微前端环境
  if (window.__MICRO_APP_ENVIRONMENT__) {
    // 主动获取基座下发的数据
    console.log('child-vue3 getData:', window.microApp.getData(), window.microApp.location.host, window.location.href, window.microApp.location.pathname)
    // router.push(window.microApp.getData().path)
    // 监听基座下发的数据变化
    window.microApp.addDataListener((data) => {
      console.log('child-vue3 addDataListener:', data)

      // 当基座下发path时进行跳转
      if (data.path && data.path !== router.currentRoute.value.path) {
        router.push(data.path)
        // window.microApp.location.reload()
      }
    })

    // 向基座发送数据
    setTimeout(() => {
      window.microApp.dispatch({ myname: 'child-vue3' })
    }, 3000)
  }
}
// 👇 将渲染操作放入 mount 函数，子应用初始化时会自动执行
window.mount = () => {
  history = createWebHashHistory()
  router = createRouter({
    base: window.__MICRO_APP_BASE_ROUTE__ || '',
    history,
    routes,
  })

  app = createApp(App)
  app.use(router)
  // vite 子应用需要修改根节点id名称
  app.mount('#vite-vue-app')
  handleMicroData(router)
}

// 👇 将卸载操作放入 unmount 函数，就是上面步骤2中的卸载函数
window.unmount = () => {
  app.unmount()
  history.destroy()
  app = null
  router = null
  history = null
}

// 微前端环境下，注册mount和unmount方法
if (window.__MICRO_APP_ENVIRONMENT__) {
  window[`micro-app-${window.__MICRO_APP_NAME__}`] = { mount, unmount }
} else {
  // 非微前端环境直接渲染
  mount()
}