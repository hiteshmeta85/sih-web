import React from 'react';
import {Text} from "@chakra-ui/react";

const Badge = ({label}) => {
  return (
    <Text
      align={'center'}
      bg={"gray.100"}
      border={"2px solid black"}
      borderRadius={"md"}
      fontWeight={'semibold'}
      py={2}
    >
      {label}
    </Text>
  );
};

export default Badge;