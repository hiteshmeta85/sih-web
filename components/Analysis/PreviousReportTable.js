import React from 'react';
import {Box, Flex, Link, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr} from "@chakra-ui/react";
import {AiOutlineEye} from "react-icons/ai";

const PreviousReportTable = () => {
  return (
    <Box>
      <Text as={'span'} fontSize={'xl'} fontWeight={'semibold'} my={1}>Previous Reports</Text>
      <Box py={'1px'} bg={'blackAlpha.800'} mb={8}/>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Report Id</Th>
              <Th>Created On</Th>
              <Th isNumeric>View Report</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>22 Aug 2022</Td>
              <Td isNumeric>
                <Flex alignItems={'center'} justifyContent={'end'} gap={2}>
                  <AiOutlineEye/>
                  <Link target={'_blank'} href={'https://firebasestorage.googleapis.com/v0/b/hackmanthan-lostminds.appspot.com/o/report_twiitter.html?alt=media&token=6cc6e07e-0814-43ec-a9e2-1eceda183b6f'} color={'blue'}>View Report</Link>
                </Flex>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PreviousReportTable;