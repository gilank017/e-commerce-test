import React, { useEffect } from "react"
import { MantineProvider } from "@mantine/core"
import { Notifications } from "@mantine/notifications"
import { ModalsProvider } from "@mantine/modals"
import { Routes, Route, useLocation, Navigate } from "react-router"
import { publicRoute, authRoute } from "./routes"
import { useSelector } from "react-redux"

import '@mantine/core/styles.css'
import "@mantine/notifications/styles.css"

export default function App() {
  const { pathname } = useLocation()
  const { isLogin } = useSelector((state) => state.auth)


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

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
