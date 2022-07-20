import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton, Link, Text,
  useDisclosure
} from "@chakra-ui/react";
import {GiHamburgerMenu} from "react-icons/gi";
import Logo from "../Logo/Logo";
import {MdOutlineClose} from "react-icons/md";
import {SidebarItems} from "./sidebar-items";
import NextLink from "next/link";
import React from "react";

const DashboardMenu = () => {
  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <>
      <IconButton
        aria-label="Open Menu"
        icon={<GiHamburgerMenu/>}
        bg={'transparent'}
        _active={{bg: 'transparent'}}
        _focus={{bg: 'transparent'}}
        onClick={onOpen}
        size={'lg'}
        alignItems={'center'}
      />

      <Drawer
        isOpen={isOpen}
        placement={'left'}
        onClose={onClose}
      >
        <DrawerOverlay/>
        <DrawerContent>
          <Flex alignItems={'center'} justifyContent={'space-between'} p={2}>
            <Logo/>
            <Button
              onClick={onClose}
              bg={'transparent'}
              _active={{bg: 'transparent'}}
              _focus={{bg: 'transparent'}}
            >
              <MdOutlineClose/>
            </Button>
          </Flex>
          <Divider borderColor={'blackAlpha.600'}/>
          <DrawerBody fontWeight={'semibold'}>
            {SidebarItems.map((item, index) => {
              return (
                <Text key={index} my={2}>
                  <NextLink href={item.navLink} passHref>
                    <Link>{item.name}</Link>
                  </NextLink>
                </Text>
              )
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DashboardMenu