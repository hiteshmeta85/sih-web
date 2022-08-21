import {Box, Divider, Text} from "@chakra-ui/react";

export const CardTitle = ({primaryText, secondaryText, extras}) => {
  return (
    <Box>
      <Text fontWeight={'bold'} fontSize={'lg'}>{primaryText}</Text>
      <Text fontSize={'sm'}>{secondaryText}</Text>
      <>{extras}</>
      <Divider my={3}/>
    </Box>
  )
}