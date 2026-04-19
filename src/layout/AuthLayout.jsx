import React from 'react'
import { AppShell } from '@mantine/core'
import { Outlet } from 'react-router'
import ProtectedRoute from '../middleware/ProtectedRoute'

const AuthLayout = ({ children }) => {
  return (
    <ProtectedRoute>
      <AppShell
        header={{
          height: 60
        }}
        navbar={{
          width: { base: 300, sm: 200 }
        }}
      >
        <AppShell.Header>
          ini header
        </AppShell.Header>
        <AppShell.Navbar>
          ini navbar
        </AppShell.Navbar>
        <AppShell.Main
          pt="var(--app-shell-header-height)"
          style={{
            backgroundColor: '#f5f5f5'
          }}
        >
          {children}
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </ProtectedRoute>
  )
}

export default AuthLayout