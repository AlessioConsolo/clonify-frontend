import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PlaylistView from "../views/PlaylistView.vue";
import SongView from "../views/SongView.vue";
import LoginView from "../views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/playlist/:id",
    name: "playlist",
    component: PlaylistView,
  },
  {
    path: "/song/:id",
    name: "song",
    component: SongView,
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

export default router;
