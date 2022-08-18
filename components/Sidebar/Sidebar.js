import {Box, Flex, Icon, List, ListItem, Text} from "@chakra-ui/react";
import SidebarNavItem from "./SidebarNavItem";
import {sidebarItems} from "../../constants/useful-data/sidebarItems";
import {BiArrowBack} from "react-icons/bi";
import React, {useState} from "react";
import Image from "next/image";
import LogoImage from "../Logo/logo2.svg";

const Sidebar = ({isSidebarOpenByDefault = true}) => {

  const [isNavItemHovered, setIsNavItemHovered] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(isSidebarOpenByDefault)

  return (
    <Box bg={'#F5F5F5'} h={'100vh'}>
      <Box
        display={{base: 'none', lg: 'block'}}
        overflow={'auto'}
        h={'full'}
        letterSpacing={'wide'}
        boxShadow={'lg'}
        color={'gray.100'}
        fontSize={'lg'}
        py={4}
        pl={4}
      >
        <List
          py={4} px={4}
          h={'full'}
          display={'flex'}
          flexDir={'column'}
          justifyContent={'space-between'}
          bg={'blackAlpha.800'}
          borderRadius={12}
        >
          <Flex flexDir={'column'} rowGap={8}>
            <Text
              fontWeight={'bold'}
              pl={6}
              pr={isSidebarOpen ? 10 : 4}
              py={2}
              my={"auto"}
              h={12}
              display={'flex'}
              alignItems={'center'}
              gap={4}
            >
              <Image src={LogoImage} height={'25px'} width={'25px'}/>
              <Text as={'span'} transition={'all 1s'} display={isSidebarOpen ? 'inline-block' : 'none'}>
                Homebrew.
              </Text>
            </Text>
            <Box>
              {sidebarItems.map((item, index) => {
                if (item.position === 'top') {
                  return <SidebarNavItem key={index} navLink={item.navLink} name={item.name} icon={item.icon} isSidebarOpen={isSidebarOpen}/>
                }
              })}
            </Box>
          </Flex>
          <Box>
            {sidebarItems.map((item, index) => {
              if (item.position === 'bottom') {
                return <SidebarNavItem key={index} navLink={item.navLink} name={item.name} icon={item.icon} isSidebarOpen={isSidebarOpen}/>
              }
            })}
            <ListItem
              borderLeftRadius={12}
              borderRightRadius={12}
              onMouseOver={() => {setIsNavItemHovered(true)}}
              onMouseOut={() => {setIsNavItemHovered(false)}}
              pl={6}
              pr={isSidebarOpen ? 10 : 4}
              py={2}
              my={2}
              cursor={'pointer'}
              onClick={()=>{setIsSidebarOpen(!isSidebarOpen)}}
              transition={'all 1s'}
            >
              <Icon as={BiArrowBack} color={'gray.100'} transform={isSidebarOpen ? '' :  'rotate(180deg)'} className={(isNavItemHovered && isSidebarOpen) ? 'horizontal-bounce': ''}/>
            </ListItem>
          </Box>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;