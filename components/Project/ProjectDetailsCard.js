import React, {useState} from 'react';
import {
  Box,
  Button,
  Link,
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
} from "@chakra-ui/react";
import {RiFolder3Fill} from "react-icons/ri";
import {MdDelete} from "react-icons/md";
import NextLink from "next/link";
import moment from "moment";
import axios from "axios";

const ProjectDetailsCard = (props) => {
  const {label, date, id, setAllProjects, allProjects} = props
  const {isOpen, onOpen, onClose} = useDisclosure()
  const [isSubmitting, setIsSubmitting] = useState(false)

  //const colors = ["#4EE4C1", "#1AC0FF", "#92B4FA", "#C291FF", "#4BE0BD", "#FDA5BB"]

  const handleDelete = async () => {
    setIsSubmitting(true)
    await axios.delete(`${process.env.NEXT_PUBLIC_API_HOST}/projects`, {data: {"projectId": id}})
      .then(function (response) {
        setAllProjects(allProjects.filter((item) => item.projectId !== id))
        onClose()
      })
      .catch(function (error) {
        console.log(error);
      });
    setIsSubmitting(false)
  }

  return (
    <Box pos={'relative'}>
      <NextLink href={`/dashboard/projects/${id}/text`}>
        <Link
          display={"flex"}
          flexDir={"column"}
          justifyContent={"space-between"}
          minH={"180px"}
          bg={"white"}
          p={4}
          boxShadow={"base"}
          borderRadius={"lg"}
          w={"full"}
          _hover={{textDecoration: "none", boxShadow: "md"}}
        >
          <RiFolder3Fill size={'4rem'} style={{color: '#1AC0FF'}}/>
          <Box>
            <Text
              fontWeight={"bold"}
              fontSize={"lg"}
            >
              {label}
            </Text>
            <Text
              fontSize={"sm"}
              fontWeight={"semibold"}
              color={"gray.500"}>
              Created On {moment(date)
              .format('llll')}
            </Text>
          </Box>
        </Link>
      </NextLink>

      <Button
        onClick={onOpen}
        fontSize={'sm'}
        size={'xs'}
        pos={'absolute'}
        right={3} bottom={3}
        bg={'transparent'}
        _hover={{bg: 'transparent'}}
        _active={{bg: 'transparent'}}
        py={4}
      >
        <MdDelete size={'1.5rem'} color={'#EB4747'}/>
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} motionPreset='slideInTop'>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Delete Project - {label}</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
            Are you sure you want to delete the project?
          </ModalBody>
          <ModalFooter gap={3}>
            <Button
              onClick={handleDelete}
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
    </Box>
  );
};

export default ProjectDetailsCard;