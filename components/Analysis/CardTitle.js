import {Box, Divider, Flex, Text} from "@chakra-ui/react";

export const CardTitle = ({primaryText, secondaryText, extras, icon}) => {
  return (
    <Box>
      <Flex gap={4}>
        {icon && icon}
        <Text fontWeight={'bold'} fontSize={'lg'} my={1}>{primaryText}</Text>
      </Flex>
      <Text fontSize={'sm'}>{secondaryText}</Text>
      <>{extras}</>
      <Divider my={3}/>
    </Box>
  )
}