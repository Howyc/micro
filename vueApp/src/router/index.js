// import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Notification404 from '../views/Notification404.vue';
const routes = [
  {
    path: '/', redirect: '/vite-vue3'
  },
  {
    path: '/vite-vue3',
    name: 'viteVue3',
    component: About,
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: Notification404,
    meta: { title: '404' },
  }
  // {
  //   path: '/about1',
  //   name: 'about1',
  //   component: About,
  // },
];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

export default routes;