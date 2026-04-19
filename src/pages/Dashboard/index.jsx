import React, { useEffect } from 'react'
import AuthLayout from '../../layout/AuthLayout'
import { getListProvider } from '../../services/provider'
import { Text } from '@mantine/core'

const DashboardPage = () => {

  const handleGetListProvider = async () => {
    const res = await getListProvider()
    if (res) {
      console.log(res)
    }
  }

  useEffect(() => {
    handleGetListProvider()
  }, [])
  return (
    <AuthLayout>
      <Text
        fz='lg'
        fw={600}
      >
        Welcome Back, User
      </Text>
    </AuthLayout>
  )
}

export default DashboardPage