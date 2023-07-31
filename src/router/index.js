import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductsView from '../views/ProductsView.vue';
import CartView from '../views/CartView.vue';
import PageNotFound from '../views/PageNotFound.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import AccountView from '@/views/AccountView.vue';
import ResetPasswordView from '@/views/ResetPasswordView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },{
      path: '/products',
      name: 'products',
      component: ProductsView
    },{
      path: '/cart',
      name: 'cart',
      component: CartView
    },{
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/login/resetPassword',
      name: 'resetPassword',
      component: ResetPasswordView
    },
    {
      path: '/login/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/account/',
      name: 'account',
      component: AccountView
    },
    // {
    //   path: '*',
    //   name: 'notfound',
    //   component: PageNotFound
    // }
    { path: '/:pathMatch(.*)*', name: 'not-found', component: PageNotFound },
  ]
})

export default router
