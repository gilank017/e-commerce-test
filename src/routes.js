import LoginPage from './pages/Login'

import DashboardPage from './pages/Dashboard'

import {
  IconGauge
} from '@tabler/icons-react'

const publicRoute = [
  {
    name: 'login-page',
    route: '/login',
    children: [],
    component: <LoginPage/>
  }
]

const authRoute = [
  {
    name: 'dashboard-page',
    label: 'Dashboard',
    route: '/dashboard',
    children: [],
    component: <DashboardPage/>,
    icon: IconGauge
  }
]

export { publicRoute, authRoute }