// Reference https://www.freakyjolly.com/react-table-tutorial/#Source_Code
// noinspection ES6CheckImport
import {useFilters, useGlobalFilter, usePagination, useSortBy, useTable} from 'react-table'
import React from 'react';
import {DefaultColumnFilter} from "./defaultColumnFilter";
import {GlobalFilter} from "./globalFilter";
import TablePagination from "./TablePagination";
import {Box} from "@chakra-ui/react";
import {BiDownArrow, BiUpArrow} from "react-icons/bi";

function ReactTableComponent({columns, data}) {

  const defaultColumn = React.useMemo(() => ({
    Filter: DefaultColumnFilter,
  }), [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: {pageIndex, pageSize},
  } = useTable({
    columns, data, defaultColumn, initialState: {pageIndex: 0, pageSize: 30},
  }, useFilters, useGlobalFilter, useSortBy, usePagination)

  return (
    <Box border={'1px solid lightgray'}>

      {/* Global Filter */}
      <Box my={4} px={4}>
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </Box>

      {/* Table */}
      <table className="table" {...getTableProps()}>
        <thead>
        {headerGroups.map((headerGroup, index) => (
          <tr key={index} {...headerGroup.getHeaderGroupProps()}
              style={{borderTop: '1px solid lightgray', borderBottom: '1px solid lightgray'}}>
            {headerGroup.headers.map((column, index) => (
              <th key={index} {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{padding: '20px 10px', textAlign: 'left', cursor: 'pointer'}}>
                {column.render('Header')}
                <div style={{display: 'inline', margin: '0 8px'}}>
                  {column.isSorted ? column.isSortedDesc ?
                      <BiUpArrow style={{display: 'inline-block', position: 'relative', top: '4px'}}/>
                      :
                      <BiDownArrow style={{display: 'inline-block', position: 'relative', top: '3px'}}/>
                    : ''}
                </div>
                <div>{column.canFilter ? column.render('Filter') : null}</div>
              </th>
            ))}
          </tr>
        ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        {page.map((row, index) => {
          prepareRow(row)
          return (
            <tr key={index} {...row.getRowProps()}
                style={{borderTop: '1px solid lightgray', borderBottom: '1px solid lightgray'}}>
              {row.cells.map((cell, index) => {
                return <td key={index} {...cell.getCellProps()} style={{
                  maxWidth: '400px',
                  minWidth: '200px',
                  padding: '4px 12px'
                }}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
        </tbody>

      </table>

      {/* Pagination */}
      <TablePagination
        gotoPage={gotoPage}
        canPreviousPage={canPreviousPage}
        previousPage={previousPage}
        nextPage={nextPage}
        canNextPage={canNextPage}
        pageCount={pageCount}
        pageIndex={pageIndex}
        pageOptions={pageOptions}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
    </Box>
  )
}

export default ReactTableComponent