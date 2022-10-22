import React from 'react';
import {Box, Flex, Text} from '@chakra-ui/react';
import {severityTypes} from "../../constants/severityTypes";

const AlertCard = ({
  alertId,
  title,
  description,
  label,
  isDetailedView = false,
  geolocation_lng,
  geolocation_lat,
  severity_type,
}) => {

  return (
    <Box
      bg={'white'}
      borderRadius={'md'}
      boxShadow={'base'}
      _hover={{boxShadow: 'lg'}}
      p={3}
    >
      <Box py={'1px'} bg={"red.500"}/>
      <Flex
        fontFamily={'Open Sans'}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexWrap={'wrap'}
        flex={1}
      >
        <Flex
          gap={4}
          flexWrap={'wrap'}
          alignItems={'center'}
          py={2}
        >
          <>
            {severityTypes.map((item, index) => {
              if (item.value === severity_type) {
                return (
                  <Text key={index} bg={item.color} p={3} borderRadius={'full'}/>
                )
              }
            })}
          </>
          <Text fontSize={'xs'} bg={'red.100'} px={3} py={1} borderRadius={'2xl'}>{label}</Text>
        </Flex>
      </Flex>
      <Flex
        flexDir={"column"}
        rowGap={2}
      >
        <Text fontWeight={700} fontSize={'lg'}>
          {title}
        </Text>
        <Text fontSize={'md'} lineHeight={'short'}>
          {description}
        </Text>
      </Flex>
    </Box>
  );
}

export default AlertCard;