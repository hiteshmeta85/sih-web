import React from 'react';
import {Box, Flex, Text} from '@chakra-ui/react';
import {severityTypes} from "../../pages/dashboard/create-alert";

const AlertCard = ({
  title,
  description,
  labels,
  isDetailedView = false,
  geolocation_lng,
  geolocation_lat,
  severity_type
}) => {

  return (
    <>
      <Flex
        flexDir={"column"}
        rowGap={2}
        bg={'white'}
        borderRadius={'md'}
        boxShadow={'base'}
        _hover={{boxShadow: 'lg'}}
        p={3}
      >
        <Box py={'1px'} bg={"red.500"}/>
        <Flex
          alignItems={'center'}
          fontFamily={'Open Sans'}
          gap={4}
          flexWrap={'wrap'}
          flex={1}
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
          <>
            {labels.map((item, index) => {
              return (
                <Text key={index} fontSize={'xs'} bg={'red.100'} px={3} py={1} borderRadius={'2xl'}>{item}</Text>
              )
            })}
          </>
        </Flex>
        <Text fontWeight={700} fontSize={'lg'}>
          {title}
        </Text>
        <Text fontSize={'md'} lineHeight={'short'}>
          {description}
        </Text>
      </Flex>
    </>
  );
}

export default AlertCard;