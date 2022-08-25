import {Box, Divider, Flex, Icon, Text} from "@chakra-ui/react";
import {IoMdAlert} from "react-icons/io";

export const CardTitle = ({primaryText, secondaryText, extras, icon, notificationText}) => {
  return (
    <Box>
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Flex gap={4} alignItems={'center'}>
          {icon && icon}
          <Text fontWeight={'bold'} fontSize={'lg'} my={1}>{primaryText}</Text>
        </Flex>
        {notificationText && <Flex alignItems={'center'} gap={2}>
          <Icon as={IoMdAlert} h={8} w={8}/>
          <Text fontWeight={'bold'} fontSize={'md'} my={1}> {notificationText}</Text>
        </Flex>}
      </Flex>
      <Text fontSize={'sm'}>{secondaryText}</Text>
      <>{extras}</>
      <Divider my={3}/>
    </Box>
  )
}