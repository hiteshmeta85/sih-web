import {Box, Button, Flex, Icon, Link, List, ListIcon, ListItem, Text} from "@chakra-ui/react";
import NextLink from "next/link";
import {SidebarItems} from "./SidebarItems";
import {useRouter} from "next/router";
import {BiCoffeeTogo} from "react-icons/bi";
import {useState} from "react";
import {BsArrowLeft, BsArrowRight} from "react-icons/bs";

const Sidebar = () => {

  const router = useRouter()

  const [isSideBarClosed, setIsSideBarClosed] = useState(false)

  return (
    <Flex
      flexDir={'column'}
      overflow={'auto'}
      justifyContent={'space-between'}
      h={'100vh'}
      letterSpacing={'wide'}
      bg={'blue.500'}
      color={'gray.100'}
      fontSize={'lg'}
    >
      <Box>
        <Flex
          pl={10}
          pr={!isSideBarClosed ? 24 : 6}
          py={1}
          my={3}
          alignItems='center'
        >
          <Icon as={BiCoffeeTogo} color={'gray.100'} mr={2}/>
          {!isSideBarClosed && <Text as={'span'}>Homebrew</Text>}
        </Flex>
        <List my={8} pl={4}>
          {SidebarItems.map((item, index) => {
            return (
              <NextLink href={item.navLink} key={index}>
                <Link _hover={{textDecorationLine: 'none'}}>
                  <ListItem
                    pl={6}
                    py={2}
                    my={2}
                    pr={!isSideBarClosed ? 24 : 6}
                    borderLeftRadius={24}
                    alignItems={'center'}
                    bg={router.pathname === `${item.navLink}` ? '#F5F5F5' : ''}
                    color={router.pathname === `${item.navLink}` ? 'black' : ''}
                    _hover={router.pathname !== `${item.navLink}` ? {bg: 'blue.300'} : ''}
                  >
                    <ListIcon
                      as={item.icon}
                      color={router.pathname === `${item.navLink}` ? '#0B2656' : 'gray.100'}
                    />
                    {!isSideBarClosed && item.name}
                  </ListItem>
                </Link>
              </NextLink>
            )
          })}
        </List>
      </Box>
      <Button
        onClick={() => {setIsSideBarClosed(!isSideBarClosed)}}
        bg={'transparent'}
        _hover={{bg: 'blue.300'}}
        borderRadius={0}
        my={6}
      >
        {!isSideBarClosed ? <BsArrowLeft/> : <BsArrowRight/>}
      </Button>
    </Flex>
  );
};

export default Sidebar;