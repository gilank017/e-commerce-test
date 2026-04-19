import LoginPage from './pages/Login'

import DashboardPage from './pages/Dashboard'
import QuotaPage from './pages/Quota'
import HistoryPaymentPage from './pages/HistoryPayment'

import {
  IconGauge,
  IconCalendarDollar,
  IconCloudNetwork
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
  },
  {
    name: 'quota-page',
    label: 'Quota',
    route: '/quota',
    children: [],
    component: <QuotaPage />,
    icon: IconCloudNetwork
  },
  {
    name: 'history-payment-page',
    label: 'History Payment',
    route: '/history-payment',
    children: [],
    component: <HistoryPaymentPage/>,
    icon: IconCalendarDollar
  }
]

export { publicRoute, authRoute }