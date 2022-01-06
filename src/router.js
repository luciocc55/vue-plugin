import { createRouter, createWebHistory } from "vue-router";
const Home = () => import('@/pages/Home.vue')

const routes = [
  { path: '/', redirect: '/home' },
  { path: "/home", name: 'Home', component: Home },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;