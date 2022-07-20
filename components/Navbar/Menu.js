import React from 'react'
import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  IconButton,
  Link,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import {GiHamburgerMenu} from "react-icons/gi";
import {MdOutlineClose} from "react-icons/md";
import {NavItems} from "./nav-items";
import NextLink from "next/link";
import Logo from "../Logo/Logo";

const Menu = () => {
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
            {NavItems.map((item, index) => {
              return (
                <Text key={index} my={2}>
                  <NextLink href={item.href} passHref>
                    <Link>{item.label}</Link>
                  </NextLink>
                </Text>
              )
            })}
            <Text my={2}><Link href='/'>Login</Link></Text>
          </DrawerBody>
          <DrawerFooter>
            <Button
              _hover={{bg: 'blackAlpha.700'}}
              _active={{bg: 'blackAlpha.800'}}
              rounded={'lg'}
              bg={'blackAlpha.800'}
              color={'white'}
              fontSize={'xl'}
            >
              <Link href='/'>Register</Link>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Menu;