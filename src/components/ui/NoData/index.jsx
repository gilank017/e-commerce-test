import React from 'react'
import { Center, Text, Box} from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'

const NoData = ({ h }) => {
  const { width, height } = useViewportSize()
  return (
    <Center
      h={h || height / 1.7}
    >
      <Box ta='center'>
        <Text
          ta='center'
          fz={width > 768 ? 28 : 18}
          fw={600}
          mb={16}
        >
          No Data
        </Text>
      </Box>
    </Center>
  )
}

export default NoData