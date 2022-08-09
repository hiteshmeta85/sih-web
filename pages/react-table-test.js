import React from "react";
import ReactTableComponent from "../components/Table/ReactTableComponent";
import {TweetsData} from "../constants/sample-data/tweetsData";
import {Box} from "@chakra-ui/react";

function TableComponent() {
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
            Header: 'Multi-Label',
            accessor: 'multilabel',
            filter: 'includes',
          },
          {
            Header: 'Date',
            accessor: 'time',
          },
          {
            Header: 'Link',
            accessor: 'link',
          },
        ],
      },
    ], [])

  return (<ReactTableComponent columns={columns} data={TweetsData}/>)
}

const ReactTableTest = () => {
  return (
    <Box maxW={'container.xl'} mx={'auto'} my={12}>
      <TableComponent/>
    </Box>
  );
};

export default ReactTableTest;