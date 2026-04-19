import React from 'react'
import { Box, Anchor, ThemeIcon, Group } from '@mantine/core'
import { authRoute } from '../../../../routes'
import { useViewportSize } from '@mantine/hooks'
import { useNavigate, useLocation } from 'react-router'

const AuthSidebar = () => {
  const { width } = useViewportSize()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const mappingSidebar = (dataRoute) => {
    // eslint-disable-next-line
    const remapRoute = dataRoute.map((item) => {
      if (item.route !== '/checkout') {
        return (
          <Anchor
            key={item.label}
            c={pathname === item.route ? 'blue' : 'dimmed'}
            fz={width > 768 ? 13.5 : 12}
            fw={pathname === item.route ? 600 : 400}
            underline='never'
            onClick={(e) => {
              e.preventDefault()
              navigate(item.route)
            }}
            p={width > 768 ? 10 : 8}
            mb={6}
            style={{
              cursor: 'pointer',
              display: 'block',
              borderRadius: '8px'
            }}
          >
            <Group gap={width > 768 ? 10 : 8}>
              <ThemeIcon 
                variant='light'
                color={pathname === item.route ? 'blue' : 'dimmed'}
                size={width > 768 ? 'md' : 24}

              >
                <item.icon stroke={1.5} size={width > 768 ? 17 : 13} />
              </ThemeIcon>
              {item.label}
            </Group>
          </Anchor>
        )
      }
    })

    return remapRoute
  }

  return (
    <Box
      py={10}
      px={14}
      h='100%'
    >
      {mappingSidebar(authRoute)}
    </Box>
  )
}

export default AuthSidebar