import React, { useEffect } from 'react'
import AuthLayout from '../../layout/AuthLayout'
import { Box, Text, Button, Group, Flex, NumberFormatter } from '@mantine/core'
import { addTransaction } from '../../services/history-payment'
import { useNavigate } from 'react-router'
import { notificationSuccess, notificationError } from '../../components/ui/Notifications'

const CheckoutPage = () => {
  const navigate = useNavigate()
  const getDataCheckout = localStorage.getItem('checkout-quota')

  const data = getDataCheckout !== null ? JSON.parse(getDataCheckout) : null

  useEffect(() => {
    if (getDataCheckout === null) {
      navigate('/quota', { replace: true })
      notificationError('Error', 'Data checkout quota not found')
    }
    // eslint-disable-next-line
  }, [getDataCheckout])

  useEffect(() => {
    return () => {
      localStorage.removeItem('checkout-quota')
      navigate('/quota', { replace: true })
    }
    // eslint-disable-next-line
  }, [localStorage])

  const handleCancelPayment = () => {
    localStorage.removeItem('checkout-quota')
    navigate('/quota', { replace: true })
    notificationError('Payment Canceled', 'Payment canceled by user')
  }

  const handlePayment = async (data) => {
    const date = new Date().getDate()
    const year = new Date().getFullYear()
    const dateCreated = new Date().toISOString()
    const payload = {
      id: `trx-${year}-${date}`,
      userId: '1',
      packageId: data.id,
      packageName: data.name,
      provider: data.provider,
      totalPrice: data.price,
      status: 'Success',
      createdAt: dateCreated
    }
    try {
      const res = await addTransaction(payload)
      if (res) {
        localStorage.removeItem('checkout-quota')
        navigate('/history-payment', { replace: true })
        notificationSuccess('Success', 'Payment success')
      }
    } catch (error) {
      console.log(error)
      notificationError('Error', 'Payment failed')
    }
  }

  return (
    <AuthLayout>
      <Box>
        <Text
          fz='lg'
          fw={600}
        >
          Checkout
        </Text>
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
                <Button size='xs' variant="outline" onClick={() => handleCancelPayment()}>Cancel</Button>
                <Button size='xs' variant="filled" onClick={() => handlePayment(data)}>Continue Payment</Button>
              </Group>
            </Flex>
          </Box>
        </Box>
      </Box>
    </AuthLayout>
  )
}

export default CheckoutPage