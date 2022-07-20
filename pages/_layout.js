import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import {Box} from "@chakra-ui/react";
import Contact from "../components/Contact/Contact";

const LandingPageLayout = ({children}) => {
  return (
    <Box bg={'#F5F5F5'}>
      <Navbar/>
      <Box>
        {children}
      </Box>
      <Contact/>
    </Box>
  );
};

export default LandingPageLayout;