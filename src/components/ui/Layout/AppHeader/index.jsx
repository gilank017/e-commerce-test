import React from 'react'
import { Box, Flex, Group, Burger, ActionIcon } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import { useLocation } from  'react-router'

const AppHeader = ({ mobileToggle, desktopToggle }) => {
  const { width } = useViewportSize()
  const { pathname } = useLocation()

  const initBurgerMenu = (pathname) => {
    if (pathname !== '/checkout') {
      return (
        <ActionIcon
          variant='light'
          onClick={width > 768 ? desktopToggle : mobileToggle}
        >
          <Burger
            size={14}
            color='dimmed'
          />
        </ActionIcon>
      )
    }
  }
  return (
    <Box
      p='md'
      style={{
        height: 65,
      }}
    >
      <Flex
        justify='space-between'
        align='center'
        px={ width > 768 ? 'md' : 0 }
        style={{
          height: '100%',
        }}
      >
        <Group gap={width > 768 ? 'md' : 'xs'}>
          {initBurgerMenu(pathname)}
          <Box>Perusahaan X</Box>
        </Group>
        <Box>Menu</Box>
      </Flex>
    </Box>
  )
}

export default AppHeader