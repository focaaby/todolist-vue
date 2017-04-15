import Vue from 'vue';
import Router from 'vue-router';
import Container from '@/components/Container';
import Todo from '@/components/Todo';
import User from '@/components/User';
import Login from '@/components/Login';
import auth from '../auth';

Vue.use(Router);

function requireAuth(to, from, next) {
  if (!auth.authenticated) {
    next({
      path: '/login',
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
}

export default new Router({
  routes: [
    { path: '/', redirect: '/todo' },
    {
      path: '/todo',
      component: Container,
      children: [
        { path: '', component: Todo },
        { path: '/user', component: User, beforeEnter: requireAuth },
        { path: '/login', component: Login },
        { path: '/logout',
          beforeEnter(to, from, next) {
            auth.logout();
            next('/');
          },
        },
      ],
    },
  ],
});
