const { origin, hostname } = location;
const isLocal = hostname === 'localhost'
// 声明子应用
export default {
  // vueProject: {
  //   name: 'vueProject',
  //   title: 'vueAPP',
  //   isLocal,
  //   origin,
  //   devOrigin: 'http://localhost:6060',
  //   baseRoute: '',
  //   publicPath: '/microapp/vueProject',
  //   devPublicPath: '/base',
  //   gitlab: 'http://abc/data-management',
  //   usePrefetch: !isLocal,
  //   isViteApp: true // 子应用使用Vite构建
  // },
}