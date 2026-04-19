import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

const ProtectedRoute = ({  children }) => {
  const { isLogin } = useSelector((state) => state.auth)

  if (!isLogin) {
    return <Navigate to="/login" replace />
  }
  return children
}

export default ProtectedRoute