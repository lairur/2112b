import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/users',
        name: 'Users',
      
        component: () => import( '../views/Users.vue')
      },
      {
        path: '/merchant',
        name: 'merchant',
      
        component: () => import( '../views/merchant.vue')
      },
      {
        path: '/food',
        name: 'food',
      
        component: () => import( '../views/food.vue')
      },
      {
        path: '/order',
        name: 'order',
      
        component: () => import( '../views/order.vue')
      },
      {
        path: '/manage',
        name: 'manage',
      
        component: () => import( '../views/manage.vue')
      },
      {
        path: '/shoop',
        name: 'shoop',
      
        component: () => import( '../views/shoop.vue')
      },
      {
        path: '/shops',
        name: 'shops',
      
        component: () => import( '../views/shops.vue')
      },
      {
        path: '/compile',
        name: 'compile',
        component: () => import( '../views/compile.vue')
      },
      {
        path: '/admin',
        name: 'admin',
        component: () => import( '../views/admin.vue')
      },
      {
        path: '/state',
        name: 'state',
        component: () => import( '../views/state.vue')
      },
      {
        path: '/esach',
        name: 'esach',
        component: () => import( '../views/esach.vue')
      },
      {
        path: '/index',
        name: 'Index',
        component: () => import( '../views/Index.vue')
      },

    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
