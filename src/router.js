import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "",
      name: "layout",
      component: () => import("./views/layouts/layout.vue"),
      children: [
        {
          path: "/",
          redirect: "/dashboard"
        },
        {
          path: "/dashboard",
          name: "main-dashboard",
          component: () => import("./views/pages/main-dashboard.vue")
        },
        {
          path: "*",
          redirect: "/404"
        }
      ]
    }
  ]
});
