import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import {Box} from "@chakra-ui/react";
import Footer from "../components/Footer/Footer";

const LandingPageLayout = ({children}) => {
  return (
    <Box bg={'#F5F5F5'}>
      <Navbar/>
      <Box>
        {children}
      </Box>
      <Footer/>
    </Box>
  );
};

export default LandingPageLayout;