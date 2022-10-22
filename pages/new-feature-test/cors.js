import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Box, Heading, Text} from "@chakra-ui/react";

const Cors = () => {

  const [didTheTestPassed, setDidTheTestPassed] = useState(false)

  const fetchData = async () => {
    try {
      await axios(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/tweets/all`, {
        headers: {
          'Access-Control-Allow-Origin': "*"
        }
      })
        .then(function (response) {
          setDidTheTestPassed(true)
        })
        .catch(function (error) {
          console.log(error)
          setDidTheTestPassed(false)
        })
    } catch (error) {
      console.log(error)
      setDidTheTestPassed(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Box
      minH={'100vh'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      flexDir={'column'}
      gap={8}
    >
      <Heading color={'peru'}>CORS Test</Heading>
      <Text>Test Result - CORS {didTheTestPassed ? 'Passed' : 'Failed'}</Text>
    </Box>
  );
};

export default Cors;