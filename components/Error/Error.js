import React from 'react';
import {Box, Text} from "@chakra-ui/react";

const Error = () => {
  return (
    <Box>
      <Text
        fontWeight={'semibold'}
        fontSize={'2xl'}
      >
        Some Error Occurred
      </Text>
    </Box>
  );
};

export default Error;