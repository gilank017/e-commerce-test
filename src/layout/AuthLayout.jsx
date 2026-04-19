import React from 'react'
import { AppShell } from '@mantine/core'
import { Outlet } from 'react-router'
import ProtectedRoute from '../middleware/ProtectedRoute'
import AppHeader from '../components/ui/Layout/AppHeader'
import AppSidebar from '../components/ui/Layout/AppSidebar'
import { useViewportSize, useDisclosure } from '@mantine/hooks'
import { useLocation } from 'react-router'
import { Box } from '@mantine/core'

const AuthLayout = ({ children }) => {
  const { pathname } = useLocation()
  const { width } = useViewportSize()

  const [openSidebarDesktop , { toggle: toggleDesktop }] = useDisclosure(pathname === '/checkout' ? false : true)
  const [openSidebarMobile , { toggle: toggleMobile }] = useDisclosure()

  return (
    <ProtectedRoute>
      <AppShell
        header={{
          height: 60
        }}
        navbar={{
          width: { base: 300, lg: 250 },
          breakpoint: 'sm',
          collapsed: {
            mobile: !openSidebarMobile,
            desktop: !openSidebarDesktop
          }
        }}
      >
        <AppShell.Header>
          <AppHeader
            mobileToggle={toggleMobile}
            desktopToggle={toggleDesktop}
          />
        </AppShell.Header>
        <AppShell.Navbar>
          <AppShell.Section>
            <AppSidebar />
          </AppShell.Section>
        </AppShell.Navbar>
        <AppShell.Main
          pt="var(--app-shell-header-height)"
          style={{
            backgroundColor: '#f5f5f5'
          }}
        >
          <Box
            pt={width > 768 ? 22 : 12}
            px={width > 768 ? 30 : 20}
          >
            {children}
            <Outlet />
          </Box>
        </AppShell.Main>
      </AppShell>
    </ProtectedRoute>
  )
}

export default AuthLayout