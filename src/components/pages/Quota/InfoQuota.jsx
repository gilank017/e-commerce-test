import React from 'react'
import { Box, Flex, Group, Button, Text, NumberFormatter } from '@mantine/core'
import { useNavigate } from 'react-router'

const InfoQuota = ({ data, onCloseInfo }) => {
  const navigate = useNavigate()

  const checkoutQuota = (data) => {
    const convertData = JSON.stringify(data)
    localStorage.setItem('checkout-quota', convertData)
    navigate('/checkout')
  }

  if (data !== null) {
    return (
      <Box>
        <Box mb='xs'>
          <Text fz={12} c='dimmed' fw={500}>Provider:</Text>
          <Text fz={12} fw={600} tt='capitalize'>{data.provider || '-'}</Text>
        </Box>
        <Box mb='xs'>
          <Text fz={12} c='dimmed' fw={500}>Package Name:</Text>
          <Text fz={12} fw={600} tt='capitalize'>{data.name || '-'}</Text>
        </Box>
        <Box mb='xs'>
          <Text fz={12} c='dimmed' fw={500}>Total Quota:</Text>
          <Text fz={12} fw={600} tt='capitalize'>{data.quota_gb || 0} GB</Text>
        </Box>
        <Box mb='xs'>
          <Text fz={12} c='dimmed' fw={500}>Category:</Text>
          <Text fz={12} fw={600} tt='capitalize'>{data.category || '-'}</Text>
        </Box>
        <Box mb='xs'>
          <Text fz={12} c='dimmed' fw={500}>Price:</Text>
          <Text fz={12} fw={600} tt='capitalize'>
            <NumberFormatter value={data.price || 0} prefix='Rp ' thousandSeparator />
          </Text>
        </Box>
        <Box mb='xs'>
          <Text fz={12} c='dimmed' fw={500}>Description:</Text>
          <Text fz={12} fw={600} tt='capitalize'>{data.description || '-'}</Text>
        </Box>
        <Box mt={20}>
          <Flex justify='flex-end'>
            <Group gap='xs'>
              <Button size='xs' variant="outline" onClick={onCloseInfo}>Close</Button>
              <Button size='xs' variant="filled" onClick={() => checkoutQuota(data)}>Checkout</Button>
            </Group>
          </Flex>
        </Box>
      </Box>
    )
  }
}

export default InfoQuota