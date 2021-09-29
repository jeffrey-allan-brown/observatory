// library imports //
import { createRouter, createWebHistory } from 'vue-router';

// layouts //
import ApplicationContainer from '../layouts/container/ApplicationContainer.vue';

// main route definitions //
const routes = [
  {
    path: '/',
    component: ApplicationContainer,
    name: "ApplicationContainer",
    children: [

    ]
  }
];

// define router //
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  }
});

export default router