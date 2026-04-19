import LoginPage from './pages/Login'

const publicRoute = [
  {
    name: 'login-page',
    route: '/login',
    children: [],
    component: <LoginPage/>
  }
]

export { publicRoute }