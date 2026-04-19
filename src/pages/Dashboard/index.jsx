import React, { useEffect } from 'react'
import AuthLayout from '../../layout/AuthLayout'
import { getListProvider } from '../../services/provider'

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
      <div>DashboardPage</div>
    </AuthLayout>
  )
}

export default DashboardPage