import React from 'react';
import {Button} from "@chakra-ui/react";

const CustomButton = ({label, handleSubmit}) => {
  return (
    <Button
      type={"submit"}
      onClick={handleSubmit}
      bg={"blackAlpha.800"}
      textColor={"white"}
      _hover={{bg: "blackAlpha.700"}}
      _active={{bg: "blackAlpha.800"}}
      alignSelf={"start"}
      px={12}
    >
      {label}
    </Button>
  );
};

export default CustomButton;