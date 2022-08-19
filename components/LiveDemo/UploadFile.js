import React from 'react'
import { Box, Button, Flex } from '@chakra-ui/react';

export const UploadFile = () => {
  return (
    <Flex flexDir={'column'} gap={4} p={2}>
        <input type="file" id="myfile" name="myfile" />
          <Button
            type={"submit"}
            bg={"blackAlpha.800"}
            textColor={"white"}
            _hover={{ bg: "blackAlpha.700" }}
            _active={{ bg: "blackAlpha.800" }}
            px={12}
            w={"100px"}
          >
            Submit
          </Button>
    </Flex>
  )
}
