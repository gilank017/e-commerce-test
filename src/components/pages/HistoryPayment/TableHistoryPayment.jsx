import React from 'react'
import { Table, Badge, NumberFormatter } from '@mantine/core'


const TableHistoryPayment = ({ label, data }) => {

  const mappingTableHead = (data) => data.map((val, index) => {
    return (<Table.Th key={index} width={val.width !== 'auto' ? val.width : ''}>{val.label}</Table.Th>)
  })

  const mappingDataTable = data => data.map((val, index) => {
    return (
      <Table.Tr key={index}>
        <Table.Td>{index + 1}.</Table.Td>
        <Table.Td tt='uppercase'>{val.id}</Table.Td>
        <Table.Td tt='capitalize'>{val.provider || '-'}</Table.Td>
        <Table.Td>{val.packageName || '-'}</Table.Td>
        <Table.Td fz={12}>
          <NumberFormatter value={val.totalPrice || 0} prefix='Rp ' thousandSeparator />
        </Table.Td>
        <Table.Td>
          <Badge size='xs' fz={10} fw={600} tt='capitalize' color={val.status === 'Success' ? 'green' : 'red'}>{val.status}</Badge>
        </Table.Td>
      </Table.Tr>
    )
  })

  return (
    <Table.ScrollContainer minWidth={768}>
      <Table highlightOnHover withTableBorder style={{ fontSize: '12px' }}>
        <Table.Thead>
          <Table.Tr>
            {mappingTableHead(label)}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {mappingDataTable(data)}
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  )
}

export default TableHistoryPayment