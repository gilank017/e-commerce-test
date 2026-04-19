import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

const ProtectedRoute = ({  children }) => {
  const { isLoadingAuth, isLogin } = useSelector((state) => state.auth)

  if (isLoadingAuth) {
    return <div>Loading...</div>
  }

  if (!isLogin) {
    return <Navigate to="/login" replace />
  }
  return children
}

export default ProtectedRoute