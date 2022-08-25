import {Box, Flex, Icon, List, ListItem, Text} from "@chakra-ui/react";
import SidebarNavItem from "./SidebarNavItem";
import {sidebarItems} from "../../constants/useful-data/sidebarItems";
import {BiArrowBack} from "react-icons/bi";
import React, {useState} from "react";
import Image from "next/image";
import LogoImage from "../Logo/logo2.svg";

const Sidebar = ({isSidebarOpenByDefault = true, backgroundColor = 'blackAlpha.800'}) => {

  const [isNavItemHovered, setIsNavItemHovered] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(isSidebarOpenByDefault)

  return (
    <Box h={'100vh'} bg={backgroundColor ? '': '#F5F5F5'}>
      <Box
        display={{base: 'none', lg: 'block'}}
        overflow={'auto'}
        h={'full'}
        letterSpacing={'wide'}
        fontSize={'lg'}
        py={6}
        px={5}
        color={'white'}
      >
        <List
          py={4} px={4}
          h={'full'}
          display={'flex'}
          flexDir={'column'}
          justifyContent={'space-between'}
          bg={backgroundColor}
          borderRadius={24}
          boxShadow={'rgba(17, 17, 26, 0.4) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px'}
        >
          <Flex flexDir={'column'} rowGap={8}>
            {<Flex
              fontWeight={'bold'}
              pl={6}
              pr={isSidebarOpen ? 10 : 4}
              py={2}
              my={"auto"}
              h={12}
              alignItems={'center'}
              gap={4}
            >
              {isSidebarOpen && <Image src={LogoImage} height={'25px'} width={'25px'} transition={'all 1s'}/>}
              <Text as={'span'} transition={'all 1s'}  display={isSidebarOpen ? 'inline-block' : 'none'}>
                Homebrew.
              </Text>
            </Flex>}
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