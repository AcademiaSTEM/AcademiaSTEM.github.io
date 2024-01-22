/* eslint-disable consistent-return */
import { createRouter, createWebHashHistory } from 'vue-router';

import MainView from '../views/MainView.vue';
import ClassView from '../views/ClassView.vue';
import ProjectView from '../views/ProjectView.vue';
import PageNotFoundView from '../views/PageNotFoundView.vue';
import info from '../storage/info';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainView,
    },
    {
      path: '/class/:id',
      name: 'Class',
      component: ClassView,
      props: true,
      beforeEnter: (to) => {
        const data = info[to.params.id];
        if (typeof data === 'undefined') {
          return { name: 'PageNotFound' };
        }
      },
    },
    {
      path: '/project',
      name: 'Project',
      component: ProjectView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'PageNotFound',
      component: PageNotFoundView,
    },
  ],
});

export default router;
