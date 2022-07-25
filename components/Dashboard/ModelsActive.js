import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsTwitter } from "react-icons/bs";

const ModelsActive = () => {
    return (
        <Box
        bg={"white"}
        borderRadius={"md"}
        boxShadow={"base"}
        border={"1px solid lightgray"}
        _hover={{ boxShadow: "lg" }}
        p={5}
        h={'full'}>
         <Text my={4}>
            Models Active
         </Text>
         <Flex justifyContent={'space-between'}>
            <BsTwitter size={'2rem'}/>
            <BsTwitter size={'2rem'}/>
            <BsTwitter size={'2rem'}/>
            <BsTwitter size={'2rem'}/>
            <BsTwitter size={'2rem'}/>
         </Flex>
        </Box>
    )
}

export default ModelsActive;