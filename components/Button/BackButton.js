import React from 'react';
import {Box, Text} from "@chakra-ui/react";
import {IoIosArrowRoundBack} from "react-icons/io";
import Router from 'next/router'

const BackButton = ({isBackButtonHovered}) => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      gap={2}
      textUnderlineOffset={2}
      onClick={() => Router.back()}
      cursor={'pointer'}
      underline={'1px'}
    >
      <Text as={'span'} className={isBackButtonHovered ? 'horizontal-bounce' : ''}><IoIosArrowRoundBack/></Text>Go Back</Box>
  );
};

export default BackButton;