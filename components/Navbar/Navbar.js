import {Box, Button, Flex, Link, Text, useMediaQuery} from "@chakra-ui/react";
import React from "react";
import Menu from "./Menu";
import NextLink from "next/link";
import Logo from "../Logo/Logo";
import {useRouter} from "next/router";
import {navItems} from "../../constants/navItems";

const Navbar = () => {
  const [isLargerThan540] = useMediaQuery('(min-width: 768px)');
  const router = useRouter()

  return (
    <Box bg={'white'}>
      {isLargerThan540 ?
        <Flex
          maxW={'container.xl'}
          mx={'auto'}
          alignItems={'center'}
          justifyContent={'space-between'}
          px={{base: 2, md: 4, lg: 8}}
          py={{base: 2, md: 4, lg: 4}}
        >
          <Logo/>
          <Flex
            justify={'space-between'}
            display={'flex'}
            gap={6}
            align={'center'}
          >
            <>
              {navItems.map((item, index) => {
                return (
                  <Text key={index} fontWeight={'semibold'} className={router.pathname === `${item.href}` ? 'active-menu-item' : 'menu-item'}>
                    <NextLink href={item.href} passHref>
                      <Link _hover={{textDecoration: 'none'}}>
                        {item.label}
                      </Link>
                    </NextLink>
                  </Text>
                )
              })}
            </>
          </Flex>
          <Flex
            justify={'space-between'}
            gap={4}
            align={'center'}
          >
            <NextLink href='/dashboard' passHref>
              <Link _hover={{textDecoration: 'none'}} className={'menu-item'}>
                <Text fontWeight={'semibold'}>Dashboard</Text>
              </Link>
            </NextLink>
            <NextLink href='/auth/login' passHref>
              <Link _hover={{textDecoration: 'none'}} className={'menu-item'}>
                <Text fontWeight={'semibold'}>Login</Text>
              </Link>
            </NextLink>
            <NextLink href='/auth/register' passHref>
              <Link _hover={{textDecoration: 'none'}} fontWeight={'semibold'}>
                <Button
                  bg={'blackAlpha.800'}
                  _hover={{bg: 'blackAlpha.700'}}
                  _active={{bg: 'blackAlpha.800'}}
                  rounded={'full'}
                  color={'white'}
                  px={6} mx={2}
                >
                  Register
                </Button>
              </Link>
            </NextLink>
          </Flex>
        </Flex>
        :
        <Flex
          alignItems={'center'}
          justifyContent={'space-between'}
          p={2}
        >
          <Text fontWeight={'bold'} fontSize={'2xl'}>Homebrew</Text>
          <Menu/>
        </Flex>
      }
    </Box>
  );
}

export default Navbar;
