import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/pages/Promo'),
      name: 'promo'
    },
    {
      path: '/products/:slug',
      component: () => import('@/pages/Products'),
      name: 'products'
    },
    {
      path: '/product/:slug',
      component: () => import('@/pages/ProductDetail'),
      name: 'product'
    }
  ],
  mode: 'history'
})
