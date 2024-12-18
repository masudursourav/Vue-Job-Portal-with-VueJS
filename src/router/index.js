import AddJobView from "@/views/AddJobView.vue";
import HomeView from "@/views/HomeView.vue";
import JobView from "@/views/JobView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import SingleJobView from "@/views/SingleJobView.vue";
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
    },
    {
       path: "/jobs/:id",
       name: "SingleJob",
       component: SingleJobView,
    },
    {
      path:"/add-job",
      name:"AddJob",
      component: AddJobView
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFoundView,
    }
  ]
});

export default router;
