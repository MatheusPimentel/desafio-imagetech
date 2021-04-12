import store from '../store'
const routes = [
  {
    path: '/',
    redirect: 'login'
  },
  {
    path: '*',
    beforeEnter: (to, from, next) => {
      if (store.getters['app/getUser']) {
        return next('/dashboard')
      }
      next('/login')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('pages/login/view/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('layouts/dashboard/view/Dashboard.vue'),
    beforeEnter: function (to, from, next) {
      if (!store.getters['app/getUser']) {
        return next('/login')
      }
      next()
    },
    children: [
      {
        path: '/dashboard',
        name: 'listagemDashboard',
        component: ()=> import('pages/dashboard/view/Dashboard.vue')
      }
    ]
  }
]

export default routes
