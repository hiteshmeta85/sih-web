import React from 'react';
import {Button} from "@chakra-ui/react";

const CustomButton = ({label}) => {
  return (
    <Button
      type={"reset"}
      bg={"red.500"}
      textColor={"white"}
      _hover={{bg: "red.400"}}
      _active={{bg: "red.500"}}
      alignSelf={"start"}
      px={12}
    >
      {label}
    </Button>
  );
};

export default CustomButton;