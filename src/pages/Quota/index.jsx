import React, { useState, useEffect } from 'react'
import AuthLayout from '../../layout/AuthLayout'
import { Box, Text, TextInput, Flex, Select, Grid, Paper, NumberFormatter, Button, Modal } from '@mantine/core'
import { getListPackages } from '../../services/package'
import { getListProvider } from '../../services/provider'
import { useDebouncedCallback, useViewportSize } from '@mantine/hooks'
import LoadingData from '../../components/ui/LoadingData'
import NoData from '../../components/ui/NoData'
import InfoQuota from '../../components/pages/Quota/InfoQuota'

const defaultParams = {
  provider: null,
  price: null,
  quota_gb: null
}

const QuotaPage = () => {
  const { width } = useViewportSize()
  const [loadingData, setLoadingData] = useState(true)
  const [packagesList, setPackagesList] = useState([])
  const [providerList, setProviderList] = useState([])
  const [params, setParams] = useState(defaultParams)
  const [openModalDetail, setOpenModalDetail] = useState(false)
  const [detailData, setDetailData] = useState(null)

  const handleGetListPackages = useDebouncedCallback(async () => {
    setLoadingData(true)
    try {
      const res = await getListPackages(params)
      if (res) {
        setPackagesList(res)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoadingData(false)
    }
  }, 300)

  const handleGetListProvider = async () => {
    try {
      const response = await getListProvider()
      if (response) {
        const resData = response
        const remapdata = resData.map((item) => {
          return {
            value: item.code,
            label: item.name
          }
        })
        setProviderList(remapdata)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleGetListPackages()
    // eslint-disable-next-line
  }, [params])

  useEffect(() => {
    handleGetListProvider()
    // eslint-disable-next-line
  }, [])

  const handleParams = (name, val) => {
    setParams((oldval) => ({
      ...oldval,
      [name]: val
    }))
  }

  const onCloseModalDetail = () => {
    setOpenModalDetail(false)
    setDetailData(null)
  }

  const mappingData = (data) => {
    const remap = data.map((val, index) => {
      return (
        <Grid.Col key={index} span={{ base: 6, lg: 4 }}>
          <Paper shadow="sm" radius="md" withBorder p="md">
            <Text fz={width > 768 ? 14 : 12} fw={600}>
              {val.name}
            </Text>
            <Text fz={width > 768 ? 12 : 10} fw={500} tt='capitalize'>
              {val.provider}
            </Text>
            <Flex mt={20} justify='space-between' align='center'>
              <Text fw='bold'>
                <NumberFormatter value={val.price || 0} prefix='Rp ' thousandSeparator />
              </Text>
              <Button size='xs' radius='sm' onClick={() => [setOpenModalDetail(true), setDetailData(val)]}>Detail</Button>
            </Flex>
          </Paper>
        </Grid.Col>
      )
    })
    return remap
  }

  const loadData = () => {
    if (packagesList.length === 0) {
      return <NoData />
    } else {
      return (
        <Grid
        >
          {mappingData(packagesList)}
        </Grid>
      )
    }
  }
  return (
    <AuthLayout>
      <Box>
        <Text
          fz='lg'
          fw={600}
        >
          Select Package
        </Text>
      </Box>
      <Flex gap='xs' direction={width > 768 ? 'row' : 'column'} my='md'>
        <Select
          label="Provider"
          data={providerList}
          placeholder="Provider"
          onChange={(e) => handleParams('provider', e ? e : null)}
          size='xs'
          clearable
          allowDeselect={false}
        />
        <TextInput
          label='Price'
          placeholder="Price"
          onChange={(e) => handleParams('price', e.target.value ? e.target.value : null)}
          size='xs'
          type='number'
        />
        <TextInput
          label='Quota GB'
          placeholder="Quota GB"
          onChange={(e) => handleParams('quota_gb', e.target.value ? e.target.value : null)}
          size='xs'
          type='number'
        />
      </Flex>
      <Box my={20}>
        {loadingData ? <LoadingData /> : loadData()}
      </Box>
      <Modal opened={openModalDetail} onClose={onCloseModalDetail} centered closeOnClickOutside={false} size='lg' title={<Text fw='Bold'>Information Package</Text>} withCloseButton={false}>
        <InfoQuota data={detailData} onCloseInfo={onCloseModalDetail} />
      </Modal>
    </AuthLayout>
  )
}

export default QuotaPage