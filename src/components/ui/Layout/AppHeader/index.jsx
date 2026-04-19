import React from 'react'
import { Box, Flex, Group, Burger, ActionIcon, Menu, Avatar } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import { useLocation, useNavigate } from  'react-router'
import { useDispatch } from 'react-redux'
import { updateDataLogin } from '../../../../store/auth'

const AppHeader = ({ mobileToggle, desktopToggle }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
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

  const handleLogout = () => {
    localStorage.removeItem('status-login')
    dispatch(updateDataLogin({
      isLoadingAuth: false, 
      isLogin: false,
    }))
    navigate('/login', { replace: true })
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
        <Flex gap='md'>
          <Menu
            position='bottom-end'
            offset={10}
            withArrow
            withinPortal
            width={width > 768 ? 250 : 220}
            arrowPosition='center'
          >
            <Menu.Target>
              <Avatar
                variant='white'
                src={null}
                radius='xl'
                size={width > 768 ? 42 : 38}
                style={{
                  cursor: 'pointer',
                  border: '1px solid gray'
                }}
              />
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item onClick={() => handleLogout()}>Logout</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  )
}

export default AppHeader