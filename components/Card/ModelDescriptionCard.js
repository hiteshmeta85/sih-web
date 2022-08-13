import React from 'react';
import {Box, Flex, Heading, Modal, ModalContent, ModalOverlay, Text, useDisclosure} from "@chakra-ui/react";
import {TiTick} from "react-icons/ti";

const ModelDescriptionCard = ({title, text, subText, stepCount, icon, cardBgColor, titleColor, textColor, subTextColor}) => {
  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <>
      <Flex
        onClick={onOpen}
        direction={'column'}
        justifyContent={'space-between'}
        alignItems={'stretch'}
        rounded={'2xl'}
        bg={cardBgColor || ''}
        gap={6}
        p={6}
        h={'100%'}
        cursor={'pointer'}
      >
        <Flex direction={'column'} gap={6}>
          {icon}
          <Heading color={titleColor || ''} fontSize={'1.7rem'}>{title}</Heading>
          <Text fontWeight={'semibold'} fontSize={'lg'} color={textColor || ''}>{text}</Text>
          <Text fontWeight={'semibold'} color={subTextColor || ''}>{subText}</Text>
        </Flex>
        <Flex
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Text fontWeight={'semibold'}>Step {stepCount}</Text>
          <Box bg={'white'} rounded={'full'} p={1}><TiTick/></Box>
        </Flex>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size={'xs'} bg={'green'}>
        <ModalOverlay
          bg='blackAlpha.600'
          backdropFilter='blur(6px)'
        />
        <ModalContent>
          <Flex
            onClick={onOpen}
            direction={'column'}
            justifyContent={'space-between'}
            bg={cardBgColor || ''}
            gap={6}
            p={8}
          >
            <Flex direction={'column'} gap={6}>
              {icon}
              <Heading color={titleColor || ''} size={'lg'}>{title}</Heading>
              <Text fontWeight={'semibold'} fontSize={'lg'} color={textColor || ''}>{text}</Text>
              <Text fontWeight={'semibold'} color={subTextColor || ''}>{subText}</Text>
            </Flex>
            <Flex
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Text fontWeight={'semibold'}>Step {stepCount}</Text>
              <Box bg={'white'} rounded={'full'} p={1}><TiTick/></Box>
            </Flex>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  )
};

export default ModelDescriptionCard;