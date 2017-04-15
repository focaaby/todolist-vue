import Vue from 'vue';
import Router from 'vue-router';
import Container from '@/components/Container';
import Todo from '@/components/Todo';
import User from '@/components/User';
import Login from '@/components/Login';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', redirect: '/todo' },
    {
      path: '/todo',
      component: Container,
      children: [
        { path: '', component: Todo },
        { path: '/user', component: User },
        { path: '/login', component: Login },
      ],
    },
  ],
});
