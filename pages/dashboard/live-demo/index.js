import React from 'react';
import LiveDemoLayout from "./_layout";
import {Box} from "@chakra-ui/react";

const Index = () => {
  return (
    <LiveDemoLayout>
      {/* todo: add to urls */}
      Live Demo <Box p={1} className={'blink'} bg={'red'}/>
    </LiveDemoLayout>
  );
};

export default Index;