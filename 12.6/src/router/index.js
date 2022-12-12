import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "/welcom",
        name: "Welcom",

        component: () => import("../views/common/WelcomView.vue")
      },
      {
        path: "/users",
        name: "Users",

        component: () => import("../views/users/UsersView.vue")
      },
      {
        path: "/roles",
        name: "Roles",

        component: () => import("../views/RolesView.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "about",

    component: () => import("../views/AboutView.vue")
  },
  {
    path: "/login",
    name: "Login",

    component: () => import("../views/common/LoginView.vue")
  }
]

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
