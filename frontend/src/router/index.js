import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterView from "../views/auth/RegisterView.vue";
import LoginView from "../views/auth/LoginView.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterView,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  store.dispatch("fetchAccessToken");

  if (to.fullPath === "/" && !store.state.user) {
    next("/login");
  }

  if (to.fullPath === "/login" && store.state.user) {
    next("/");
  }

  if (to.fullPath === "/register" && store.state.user) {
    next("/");
  }

  next();
});

export default router;
