import {Box, Divider, Text} from "@chakra-ui/react";

export const CardTitle = ({primaryText, secondaryText}) => {
  return (
    <Box>
      <Text fontWeight={'bold'} fontSize={'lg'}>{primaryText}</Text>
      <Text fontSize={'sm'}>{secondaryText}</Text>
      <Divider my={3}/>
    </Box>
  )
}