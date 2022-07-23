import React from 'react'
import {useFilters, useGlobalFilter, useTable} from 'react-table'
import {Data} from "./data";
import {GlobalFilter} from "./globalFilter";
import {DefaultColumnFilter} from "./defaultColumnFilter";
import {SelectColumnFilter} from "./selectColumnFilter";
import {Link} from "@chakra-ui/react";

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
      <table {...getTableProps()} style={{textAlign: 'left', border: '1px solid lightgray'}}>
        <thead>
        <tr>
          <th
            colSpan={visibleColumns.length}
            style={{padding: '20px 10px'}}
          >
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={state.globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
          </th>
        </tr>
        {headerGroups.map((headerGroup, index) => (
          <tr key={index} {...headerGroup.getHeaderGroupProps()} style={{border: '1px solid lightgray'}}>
            {headerGroup.headers.map((column, index) => (
              <th key={index} {...column.getHeaderProps()} style={{padding: '20px 10px'}}>
                <div>{column.render('Header')}</div>
                {/* Render the columns filter UI */}
                <div>{column.canFilter? column.render('Filter') : null}</div>
                <div/>
              </th>
            ))}
          </tr>
        ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        {firstPageRows.map((row, index) => {
          prepareRow(row)
          return (
            <tr key={index} {...row.getRowProps()} style={{border: '1px solid lightgray'}}>
              {row.cells.map((cell, index) => {
                if(cell.column.id === 'link') {
                  return <td key={index}  {...cell.getCellProps()} style={{maxWidth: '220px', textUnderlineOffset: '2px', padding: '10px 10px'}}><Link href={cell.value}>{cell.render('Cell')}</Link></td>
                }
                return <td key={index}  {...cell.getCellProps()} style={{maxWidth: '220px', padding: '10px 10px'}}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
        </tbody>
      </table>
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
