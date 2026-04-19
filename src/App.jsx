import React, { useEffect } from "react"
import { MantineProvider } from "@mantine/core"
import { Notifications } from "@mantine/notifications"
import { ModalsProvider } from "@mantine/modals"
import { Routes, Route, useLocation, Navigate, useNavigate } from "react-router"
import { publicRoute, authRoute } from "./routes"
import { useSelector, useDispatch } from "react-redux"
import { getStatusLogin } from "./store/auth"

import '@mantine/core/styles.css'
import "@mantine/notifications/styles.css"

export default function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const { isLoadingAuth, isLogin } = useSelector((state) => state.auth)


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    dispatch(getStatusLogin())
  }, [dispatch])

  useEffect(() => {
    if (!isLoadingAuth) {
      if (isLogin) {
        navigate(pathname !== '/login' ? pathname : '/dashboard', { replace: true })
      } else {
        navigate('/login', { replace: true })
      }
    }
    // eslint-disable-next-line
  }, [isLoadingAuth, isLogin, pathname])

  const getRoute = (routes) => routes.map((page) => {
    if (page.children.length === 0) {
      return (
        <Route
          key={page.name}
          path={page.route}
          element={page.component}
        />
      )
    } else {
      return (
        <Route
          key={page.name}
          path={page.route}
          element={page.component}
        >
          {childrenRoute(page.children)}
        </Route>
      )
    }
  })

  const childrenRoute = (children) => children.map((child) => {
    if (child.route === null) {
      return (
        <Route
          index
          key={child.name}
          element={child.component}
        />
      )
    } else {
      return (
        <Route
          key={child.name}
          path={child.route}
          element={child.component}
        />
      )
    }
  })

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "light",
      }}
    >
      <Notifications autoClose={3000} position="top-right" limit={3} />
      <ModalsProvider>
        <Routes>
          <Route
            path='/'
            element={isLogin ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />}
          />
          {getRoute(publicRoute)}
          {getRoute(authRoute)}
        </Routes>
      </ModalsProvider>
    </MantineProvider>
  )
}
