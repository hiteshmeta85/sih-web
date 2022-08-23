import React from 'react';
import {Box, Img, Text, Avatar as Profile} from "@chakra-ui/react";

const Avatar = (props) => {
  const { name, jobTitle, imageSrc, ...boxProps } = props

  return (
    <Box {...boxProps} textAlign={'center'} p={4} bg={'white'} boxShadow={'md'} rounded={'md'}>
      <Profile
        size='lg'
        name={name}
      />
      <Box mt="3">
        <Text as="cite" fontStyle="normal" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {jobTitle}
        </Text>
      </Box>
    </Box>
  );
};

export default Avatar;