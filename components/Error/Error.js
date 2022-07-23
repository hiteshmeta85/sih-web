import React from 'react';
import {Box} from "@chakra-ui/react";
import Image from "next/image";
import FiveHundredError from "../../public/images/500.jpg";

const Error = () => {
  return (
    <Box bg={'white'} borderRadius={'md'} py={12}>
      <Image src={FiveHundredError} alt={'500 Image'} height={1000} objectFit={'contain'}/>
    </Box>
  );
};

export default Error;