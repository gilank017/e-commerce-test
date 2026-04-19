import React from 'react'
import { Table, Skeleton } from '@mantine/core'

const TableSkeleton = ({ total }) => {
  const mappingTotalTableHead = (total) => Array.from({ length: total }, (_, index) => {
    return (<Table.Th key={index}><Skeleton height={22} radius='md' /></Table.Th>)
  })
  const mappingTotalColumn = (total) => Array.from({ length: total }, (_, index) => {
    return (<Table.Td key={index}><Skeleton height={16} radius='md' /></Table.Td>)
  })

  const mappingTotalTableBody = (total) => Array.from({ length: total }, (_, index) => {
    return (
      <Table.Tr key={index}>
        {mappingTotalColumn(total)}
      </Table.Tr>
    )
  })

  return (
    <Table minWidth={768}>
      <Table horizontalSpacing='md' verticalSpacing='sm' withTableBorder>
        <Table.Thead>
          <Table.Tr>
            {mappingTotalTableHead(total)}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {mappingTotalTableBody(total)}
        </Table.Tbody>
      </Table>
    </Table>
  )
}

export default TableSkeleton