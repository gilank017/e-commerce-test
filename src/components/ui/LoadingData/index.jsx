import React from 'react'
import { Center, Loader } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'

const LoadingData = ({ h }) => {
  const { width, height } = useViewportSize()
  return (
    <Center
      h={h || height / 1.2}
    >
      <Loader size={width > 768 ? 'lg' : 'sm'} type='dots' />
    </Center>
  )
}

export default LoadingData