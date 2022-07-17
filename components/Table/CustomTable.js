import React from 'react'
import {useTable, useFilters, useGlobalFilter} from 'react-table'
import {Data} from "./data";
import {GlobalFilter} from "./globalFilter";
import {DefaultColumnFilter} from "./defaultColumnFilter";
import {SelectColumnFilter} from "./selectColumnFilter";
import {Box, Link, Table, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import NextLink from "next/link";

// Our table component
function TableStructure({columns, data}) {
  const filterTypes = React.useMemo(
    () => ({
      text: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id]
          return rowValue !== undefined
            ? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase())
            : true
        })
      },
    }),
    []
  )

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      defaultColumn, // Be sure to pass the defaultColumn option
      filterTypes,
    },
    useFilters, // useFilters!
    useGlobalFilter // useGlobalFilter!
  )

  // We don't want to render all the rows for this example, so cap
  // it for this use case
  const firstPageRows = rows.slice(0, 10)

  return (
    <>
      <Table {...getTableProps()} variant={'striped'} colorScheme={'teal'} size={'sm'}>
        <Thead>
        <Tr>
          <Th
            colSpan={visibleColumns.length}
            border={'none'}
          >
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={state.globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
          </Th>
        </Tr>
        {headerGroups.map((headerGroup, index) => (
          <Tr key={index} {...headerGroup.getHeaderGroupProps()} pl={0}>
            {headerGroup.headers.map((column, index) => (
              <Th border={'none'} key={index} {...column.getHeaderProps()}>
                <Box fontSize={'sm'}>{column.render('Header')}</Box>
                {/* Render the columns filter UI */}
                <Box>{column.canFilter && (column.Header !== 'Time') ? column.render('Filter') : null}</Box>
                <Box my={4}/>
              </Th>
            ))}
          </Tr>
        ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
        {firstPageRows.map((row, index) => {
          prepareRow(row)
          return (
            <Tr key={index} {...row.getRowProps()}>
              {row.cells.map((cell, index) => {
                if(cell.column.id === 'link') {
                  return <Td maxW={'100px'} key={index} {...cell.getCellProps()}><Link href={cell.value}>{cell.render('Cell')}</Link></Td>
                }
                return <Td maxW={'100px'} key={index} {...cell.getCellProps()}>{cell.render('Cell')}</Td>
              })}
            </Tr>
          )
        })}
        </Tbody>
      </Table>
    </>
  )
}

// Define a custom filter filter function!
function filterGreaterThan(rows, id, filterValue) {
  return rows.filter(row => {
    const rowValue = row.values[id]
    return rowValue >= filterValue
  })
}

// This is an autoRemove method on the filter function that
// when given the new filter value and returns true, the filter
// will be automatically removed. Normally this is just an undefined
// check, but here, we want to remove the filter if it's not a number
filterGreaterThan.autoRemove = val => typeof val !== 'number'

function CustomTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'User Details',
        columns: [
          {
            Header: 'Username',
            accessor: 'username',
          },
        ],
      },
      {
        Header: 'Tweet Details',
        columns: [
          {
            Header: 'Tweet',
            accessor: 'tweet',
          },
          {
            Header: 'Tweet Link',
            accessor: 'link',
          },
          {
            Header: 'Label',
            accessor: 'label',
            Filter: SelectColumnFilter,
            filter: 'includes',
          },
          {
            Header: 'Help Needed',
            accessor: 'helpNeeded',
            Filter: SelectColumnFilter,
            filter: 'includes',
          },
          {
            Header: 'Time',
            accessor: 'time',
          },
        ],
      },
    ],
    []
  )

  return (
    <TableStructure columns={columns} data={Data}/>
  )
}

export default CustomTable
