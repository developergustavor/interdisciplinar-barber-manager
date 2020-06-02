import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/pages/home/Index')

// Inside the system
// Auth
const Overview = () => import('@/pages/home/overview/Overview')
const About = () => import('@/pages/home/about/About')
const Services = () => import('@/pages/home/services/Services')
const Login = () => import('@/pages/home/auth/users/Login')



Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '*', redirect: '/home' },
  {
    path: '/home',
    name: 'home',
    props: true,
    redirect: '/home/overview',
    component: Home,
    meta: { requiresAuth: false },
    children: [
      {
        path: 'overview',
        name: 'overview',
        component: Overview,
        props: true,
        meta: { requiresAuth: false }
      },
      {
        path: 'sobre',
        name: 'about',
        component: About,
        props: true,
        meta: { requiresAuth: false }
      },
      {
        path: 'servicos',
        name: 'services',
        component: Services,
        props: true,
        meta: { requiresAuth: false }
      },
      { 
        path: 'login-old', 
        name: 'login', 
        component: Login, 
        props: true 
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

router.beforeEach((to, from, next) => {
  // Validação de token para as rotas autenticadas da aplicação.
  let validToken = false

  if (to.meta.requiresAuth) {
    let token = localStorage.token
    // verifica a existencia do token
    if (token) {
      // verifica se o token corresponde ao padrão da aplicação
      let tokenParts = token.split('.')

      if (tokenParts.length === 3) {
        // decodifica o payload do token
        try {
          let tokenPayload = JSON.parse(atob(tokenParts[1]))
          // verifica se existe a validity no payload do token
          if (tokenPayload[0].exp) {
            // verifica se o token ainda está na validity
            if (tokenPayload[0].exp > Math.floor(Date.now() / 1000)) {
              if (tokenPayload[0].status_id) {
                if (tokenPayload[0].status_id == 1) validToken = true
              } else validToken = true
            }
          }
        } catch (err) { validToken = false }
      }
    }

  } else validToken = true

  if (validToken) {
    next()
  } else {
    localStorage.setItem('destiny', to.name)
    window.location.href = '/logout'
  }
})


export default router