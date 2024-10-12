import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Notification404 from '../views/Notification404.vue';
import vueApp from '../views/vueApp.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about1',
    name: 'about1',
    // redirect: '/about1',
    component: About,
  },
  {
    path: '/micro-app/vue',
    name: 'micro-app-vue',
    component: vueApp,
  },
  {
    path: "/:catchAll(.*)",
    name: '404',
    component: Notification404,
    meta: {
      title: 'Not Found',
    },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;