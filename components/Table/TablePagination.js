import React from 'react';
import {Box, Button, Flex, Icon, Input, Text} from "@chakra-ui/react";
import {TbPlayerSkipBack, TbPlayerSkipForward, TbPlayerTrackNext, TbPlayerTrackPrev} from "react-icons/tb";

const CustomButton = ({onClick, disabled, children}) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      color={'white'}
      bg={'blackAlpha.800'}
      _hover={{bg: 'blackAlpha.700'}}
      _active={{bg: 'blackAlpha.800'}}
    >
      {children}
    </Button>
  )
}

const TablePagination = ({
  gotoPage,
  canPreviousPage,
  previousPage,
  nextPage,
  canNextPage,
  pageCount,
  pageIndex,
  pageOptions,
  pageSize,
  setPageSize
}) => {
  return (
    <Flex justifyContent={'end'} p={4} gap={6}>

      {/* Change Page */}
      <Flex gap={2} alignItems={'center'}>
        <CustomButton onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          <TbPlayerTrackPrev color={'white'}/>
        </CustomButton>
        <CustomButton onClick={() => previousPage()} disabled={!canPreviousPage}>
          <TbPlayerSkipBack color={'white'}/>
        </CustomButton>
        <CustomButton onClick={() => nextPage()} disabled={!canNextPage}>
          <TbPlayerSkipForward color={'white'}/>
        </CustomButton>
        <CustomButton onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          <TbPlayerTrackNext color={'white'}/>
        </CustomButton>
        <Text>
          <a className="page-link">
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </a>
        </Text>
      </Flex>

      {/* Input Page Number */}
      <Box>
        <Input
          className="form-control"
          type="number"
          defaultValue={pageIndex + 1}
          onChange={e => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0
            gotoPage(page)
          }}
        />
      </Box>

      {/* Select Page Size */}
      <Box>
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
          style={{border: '1px solid #E2E8F0', height: '100%', padding: '0 16px', borderRadius: '6px'}}
        >
          {[5, 10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </Box>
    </Flex>
  );
};

export default TablePagination;