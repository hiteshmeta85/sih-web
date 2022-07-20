import React from 'react';
import {Link, Text} from "@chakra-ui/react";
import {IoIosArrowRoundBack} from "react-icons/io";
import NextLink from "next/link";

const BackButton = ({isBackButtonHovered}) => {
  return (
    <NextLink href={'/'} passHref>
      <Link
        display={'flex'}
        alignItems={'center'}
        gap={2}
        textUnderlineOffset={2}
      >
        <Text as={'span'} className={isBackButtonHovered ? 'horizontal-bounce' : ''}><IoIosArrowRoundBack/></Text>Go Back</Link>
    </NextLink>
  );
};

export default BackButton;