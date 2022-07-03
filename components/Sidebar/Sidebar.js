import {Flex, Icon, Link, List, ListIcon, ListItem, Text} from "@chakra-ui/react";
import NextLink from "next/link";
import {SidebarItems} from "./SidebarItems";
import {useRouter} from "next/router";

const Sidebar = () => {

  const router = useRouter()

  return (
    <Flex
      flexDir={'column'}
      overflow={'auto'}
      h={'100vh'}
      letterSpacing={'wide'}
      bg={'#0B2656'}
      color={'gray.300'}
      fontSize={'lg'}
    >
      <Text
        pl={6}
        pr={20}
        py={2}
        my={6}
      >
        <Icon color={'gray.300'} mr={2}/>
        Homebrew
      </Text>
      <List>
        {SidebarItems.map((item, index) => {
          return (
            <NextLink href={item.navLink} key={index}>
              <Link _hover={{textDecorationLine: 'none'}}>
                <ListItem
                  pl={6}
                  pr={20}
                  py={2}
                  my={2}
                  bg={router.pathname === `${item.navLink}` ? 'gray.100' : ''}
                  color={router.pathname === `${item.navLink}` ? 'black' : ''}
                  _hover={router.pathname !== `${item.navLink}` ? {bg: '#0F2E69'} : ''}
                >
                  <ListIcon color={router.pathname === `${item.navLink}` ? '#0B2656' : 'gray.300'}/>
                  {item.name}
                </ListItem>
              </Link>
            </NextLink>
          )
        })}
      </List>
    </Flex>
  );
};

export default Sidebar;