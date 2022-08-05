import React, {useState} from 'react';
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import {severityTypes} from "../../constants/useful-data/severityTypes";
import {MdDelete} from "react-icons/md";
import axios from "axios";

const AlertCard = ({
  alertId,
  title,
  description,
  label,
  isDetailedView = false,
  geolocation_lng,
  geolocation_lat,
  severity_type,
  canDelete,
  alerts,
  setAlerts
}) => {

  const {isOpen, onOpen, onClose} = useDisclosure()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleDelete = async () => {
    console.log(alertId)
    setIsSubmitting(true)
    await axios.delete(`${process.env.NEXT_PUBLIC_API_HOST}/alerts`, {data: {"alertId": alertId}})
      .then(function (response) {
        setAlerts(alerts.filter((item) => item.alertId !== alertId))
        onClose()
      })
      .catch(function (error) {
        console.log(error);
      });
    setIsSubmitting(false)
  }

  return (
    <>
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
            {severityTypes.map((item, index) => {
              if (item.value === severity_type) {
                return (
                  <Text key={index} bg={item.color} p={3} borderRadius={'full'}/>
                )
              }
            })}
            <Text fontSize={'xs'} bg={'red.100'} px={3} py={1} borderRadius={'2xl'}>{label}</Text>
          </Flex>

          {canDelete && <Button
            fontSize={'sm'}
            size={'xs'}
            bg={'transparent'}
            _hover={{bg: 'transparent'}}
            _active={{bg: 'transparent'}}
            py={4}
            onClick={onOpen}
          >
            <MdDelete size={'1.5rem'} color={'#EB4747'}/>
          </Button>}
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
      <Modal onClose={onClose} isOpen={isOpen} motionPreset='slideInTop'>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Delete Project - {label}</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
            Are you sure you want to remove the alert?
          </ModalBody>
          <ModalFooter gap={3}>
            <Button
              onClick={() => {handleDelete()}}
              size={'sm'}
              colorScheme={'red'}
              disabled={isSubmitting}
            >
              {isSubmitting ? <Spinner/> : 'Confirm Delete'}
            </Button>
            <Button onClick={onClose} size={'sm'} colorScheme={'green'}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AlertCard;