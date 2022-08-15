import NextLink from "next/link";
import {Link, ListIcon, ListItem, Text} from "@chakra-ui/react";
import {useRouter} from "next/router";
import {useState} from "react";

const SidebarNavItem = ({navLink, icon, name, isSidebarOpen}) => {

  const router = useRouter()
  const [isNavItemHovered, setIsNavItemHovered] = useState(false)

  return (
    <NextLink href={navLink}>
      <Link _hover={{textDecorationLine: 'none'}}>
        <ListItem
          onMouseOver={() => {setIsNavItemHovered(true)}}
          onMouseOut={() => {setIsNavItemHovered(false)}}
          borderLeftRadius={12}
          borderRightRadius={12}
          bg={router.pathname === `${navLink}` ? '#F5F5F5' : ''}
          color={router.pathname === `${navLink}` ? 'black' : ''}
          _hover={router.pathname !== `${navLink}` ? {bg: '#F5F5F5', color: 'blackAlpha.800'} : ''}
          pl={6}
          pr={isSidebarOpen ? 14 : 4}
          py={2}
          my={2}
          transition={'all 1s'}
        >
          {icon && <ListIcon
            as={icon}
            color={(router.pathname === `${navLink}` || isNavItemHovered === true) ? '#0B2656' : 'gray.100'}
          />}
          <Text display={isSidebarOpen ? 'inline-block' : 'none'} transition={'all 1s'}>{name}</Text>
        </ListItem>
      </Link>
    </NextLink>
  )
}

export default SidebarNavItem