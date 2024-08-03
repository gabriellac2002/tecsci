import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GraficView from "@/views/GraficView.vue";
import LoginView from "@/views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/estatisticas",
      name: "estatisticas",
      component: GraficView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
  ],
});

export default router;
