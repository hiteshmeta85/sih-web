import React from 'react';
import {Button, Spinner} from "@chakra-ui/react";

const CustomButton = ({label, handleSubmit, isSubmitting = false}) => {
  return (
    <Button
      type={"submit"}
      onClick={handleSubmit}
      bg={"blackAlpha.800"}
      textColor={"white"}
      _hover={{bg: "blackAlpha.700"}}
      _active={{bg: "blackAlpha.800"}}
      px={12}
      isDisabled={isSubmitting}
    >
      {isSubmitting ?
        <Spinner color={'white'}/> :
        <>{label}</>
      }
    </Button>
  );
};

export default CustomButton;