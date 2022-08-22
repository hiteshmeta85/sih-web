import React from 'react';
import {Button, Icon, Text} from "@chakra-ui/react";
import {IoIosRefresh} from "react-icons/io";

const CustomButton = ({handlePageRefresh, icon, text}) => {
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
      <Text>{text}</Text>
      {icon}
    </Button>
  );
};

export default CustomButton;