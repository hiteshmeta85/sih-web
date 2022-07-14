import React from 'react';
import {Avatar, Box, Button, Flex, Icon, Menu, MenuButton, MenuItem, MenuList, Text} from "@chakra-ui/react";
import {AiOutlineSetting} from "react-icons/ai";
import Sidebar from "../../components/Sidebar/Sidebar";

const DashboardContainer = ({children, title}) => {
  return (
    <Flex>
      <Sidebar/>
      <Box
        flex={1}
        h={'100vh'}
        overflow={'scroll'}
        bg={'#F5F5F5'}
      >
        <Flex
          boxShadow={'xs'}
          alignItems={'center'}
          justifyContent={'space-between'}
          bg={'white'}
          px={{base:3, md:6}}
          py={2}
        >
          <Text
            fontWeight={'bold'}
            fontSize={'large'}
          >
            {title}
          </Text>
          <Flex
            alignItems={'center'}
            columnGap={4}
          >
            <Avatar name='Hitesh Meta' size={'sm'} color={'white'} bg={'blue.400'} display={{base:"none",md:"block"}}/>
            <Box lineHeight={'120%'}>
              <Text fontWeight={'semibold'}>Hitesh Meta</Text>
              <Text fontSize={'sm'}>Admin</Text>
            </Box>
            <Menu>
              <MenuButton
                as={Button}
                bg={'transparent'}
                _hover={{bg: 'transparent'}}
                _active={{bg: 'transparent'}}
                borderRadius={"none"}
              >
                <Icon as={AiOutlineSetting} h={6} w={6}/>
              </MenuButton>
              <MenuList>
                <MenuItem>Account</MenuItem>
                <MenuItem color={'red.500'}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        <Box p={{base:3, md:6}}>
          {children}
        </Box>
      </Box>
    </Flex>
  );
};

export default DashboardContainer;