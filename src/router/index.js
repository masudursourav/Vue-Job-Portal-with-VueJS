import HomeView from "@/views/HomeView.vue";
import JobView from "@/views/JobView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "Jobs",
      component: JobView,
    }
  ]
});

export default router;
