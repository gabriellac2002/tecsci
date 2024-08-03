import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "@/stores/userStore";
import HomeView from "@/views/HomeView.vue";
import GraficView from "@/views/GraficView.vue";
import LoginView from "@/views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/estatisticas",
    name: "estatisticas",
    component: GraficView,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  if (to.meta.requiresAuth && !userStore.isAuthenticated) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
