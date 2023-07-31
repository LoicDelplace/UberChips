import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductsView from '../views/ProductsView.vue';
import CartView from '../views/CartView.vue';
import PageNotFound from '../views/PageNotFound.vue';
import AccountsView from '../views/AccountsView.vue';
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
      path: '/accounts',
      name: 'accounts',
      component: AccountsView
    },
    {
      path: '/resetPassword',
      name: 'resetPassword',
      component: ResetPasswordView
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
