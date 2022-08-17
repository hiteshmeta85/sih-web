import React from 'react';
import {Button, Icon, Text} from "@chakra-ui/react";
import {IoIosRefresh} from "react-icons/io";

const RefreshButton = ({handlePageRefresh}) => {
  return (
    <Button
      display={'flex'}
      alignItems={'center'}
      gap={2}
      bg={'blackAlpha.800'}
      _hover={{bg: 'blackAlpha.700'}}
      _active={{bg: 'blackAlpha.800'}}
      color={'white'}
      onClick={handlePageRefresh}
    >
      <Text>Refresh</Text>
      <Icon as={IoIosRefresh} h={6} w={6} color={'white'}/>
    </Button>
  );
};

export default RefreshButton;