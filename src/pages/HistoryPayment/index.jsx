import React, { useState, useEffect } from 'react'
import AuthLayout from '../../layout/AuthLayout'
import { Box, Text } from '@mantine/core'
import { getListHistoryPayment } from '../../services/history-payment'
import TableSkeleton from '../../components/ui/TableSkeleton'
import TableHistoryPayment from '../../components/pages/HistoryPayment/TableHistoryPayment'

const labelTable = [
  {
    label: 'No',
    width: 30
  },
  {
    label: 'ID Transaction',
    width: 'auto'
  },
  {
    label: 'Provider',
    width: 'auto'
  },
  {
    label: 'Package',
    width: 'auto'
  },
  {
    label: 'Price',
    width: 'auto'
  },
  {
    label: 'Status',
    width: 'auto'
  },
]

const HistoryPaymentPage = () => {
  const [loadingData, setLoadingData] = useState(true)
  const [historyList, setHistoryList] = useState([])

  const handleGetListHistoryPayment = async () => {
    setLoadingData(true)
    try {
      const res = await getListHistoryPayment()
      if (res) {
        setHistoryList(res)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoadingData(false)
    }
  }

  useEffect(() => {
    handleGetListHistoryPayment()
  }, [])

  return (
    <AuthLayout>
      <Box>
        <Text
          fz='lg'
          fw={600}
        >
          History Payment
        </Text>
        <Box my={20}>
          {
            loadingData ? <TableSkeleton total={6} /> : <TableHistoryPayment label={labelTable} data={historyList} />
          }
        </Box>
      </Box>
    </AuthLayout>
  )
}

export default HistoryPaymentPage