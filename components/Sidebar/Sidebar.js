import {Box, Flex, List, Text} from "@chakra-ui/react";
import {SidebarItems} from "./sidebar-items";
import SidebarNavItem from "./SidebarNavItem";

const Sidebar = () => {

  return (
    <Box bg={'#F5F5F5'} h={'100vh'}>
      <Box
        display={{base: 'none', lg: 'block'}}
        overflow={'auto'}
        h={'full'}
        letterSpacing={'wide'}
        color={'gray.100'}
        fontSize={'lg'}
        py={4}
        pl={4}
      >
        <List pt={4} pb={16} px={4}
              h={'full'}
              display={'flex'}
              flexDir={'column'}
              justifyContent={'space-between'}
              bg={'blackAlpha.800'}
              borderRadius={12}
        >
          <Flex flexDir={'column'} rowGap={8}>
            <Text
              pl={6}
              pr={10}
              py={2}
              my={2}
            >
              Homebrew
            </Text>
            <Box>
              {SidebarItems.map((item, index) => {
                if (item.position === 'top') {
                  return <SidebarNavItem key={index} navLink={item.navLink} name={item.name} icon={item.icon}/>
                }
              })}
            </Box>
          </Flex>
          <Box>
            {SidebarItems.map((item, index) => {
              if (item.position === 'bottom') {
                return <SidebarNavItem key={index} navLink={item.navLink} name={item.name} icon={item.icon}/>
              }
            })}
          </Box>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;