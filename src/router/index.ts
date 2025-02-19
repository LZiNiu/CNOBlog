import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/components/Layout/index.vue";



const routes = [
  {
    path: "/",
    component: Layout, // 使用 Layout 作为布局
    children: [
      {
        path: "/home", // 子路由路径
        name: "首页",
        component: () => import("@/views/home/home.vue"), // 渲染 Home 组件
      },
      {
        path: "/about", // 子路由路径
        name: "关于",
        component: () => import("@/views/about/about.vue"), // 渲染 Home 组件
      },
      {
        path: "/", // 默认重定向到 /home
        redirect: "/home",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;