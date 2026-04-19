import React, { useState } from 'react'
import { Box, Center, Paper, Text, TextInput, PasswordInput, Button } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import { useLoginForm } from './schema/form'
import { useDispatch } from 'react-redux'
import { updateDataLogin } from '../../store/auth'
import { useNavigate } from 'react-router'

const LoginPage = () => {
  const navigate = useNavigate()
  const  dispatch = useDispatch()
  const { width, height } = useViewportSize()

  const [loadingForm, setLoadingForm] = useState(false)

  const form = useLoginForm()

  const handleLogin = async (value) => {
    setLoadingForm(true)
    await dispatch(updateDataLogin({
      isLoadingAuth: false, 
      isLogin: true,
    }))
    localStorage.setItem('status-login', 'yes')
    navigate('/dashboard')
    setLoadingForm(false)
  }

  return (
    <Box>
      <Center maw={width / 1.2} h={height} mx="auto">
        <Paper shadow="sm" radius="md" withBorder p="xl" w={width > 768 ? 500 : 300}>
          <Text
            ta='center'
            fz={width > 768 ? 28 : 18}
            fw={600}
            mb={16}
          >
            Login Page
          </Text>
          <Box mb='sm'>
            <TextInput
              label='Email'
              size='xs'
              withAsterisk
              key={form.key('email')}
              {...form.getInputProps('email')}
            />
          </Box>
          <Box mb='sm'>
            <PasswordInput
              label='Password'
              size='xs'
              withAsterisk
              key={form.key('password')}
              {...form.getInputProps('password')}
            />
          </Box>
          <Button
            mt={40}
            size='xs'
            fullWidth
            loading={loadingForm}
            onClick={form.onSubmit((value) => {
              handleLogin(value)
            }, (error) => {
              console.log(error)
            })}
          >
            Login
          </Button>
        </Paper>
      </Center>
    </Box>
  )
}

export default LoginPage