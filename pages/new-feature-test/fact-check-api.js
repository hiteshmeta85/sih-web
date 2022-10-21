import React, {useState} from 'react';
import axios from "axios";
import {Box, Flex, Heading, Input, Text} from "@chakra-ui/react";
import ClaimDetailsCard from "../../components/Card/ClaimDetailsCard";
import CustomSubmitButton from "../../components/Button/CustomSubmitButton";

const FactCheckApi = () => {

  const [text, setText] = useState('')
  const [claims, setClaims] = useState([])
  const [didWeGetInfo, setDidWeGetInfo] = useState(false)

  const handleChange = (event) => {
    event.preventDefault()
    setText(event.target.value)
  }

  const handleSubmit = () => {
    if (text.length > 0) {
      axios.get(`https://factchecktools.googleapis.com/v1alpha1/claims:search?query=${encodeURIComponent(text)}&key=${process.env.NEXT_PUBLIC_FACT_CHECK_API}`)
        .then(response => {
          setClaims(response.data.claims)
          setDidWeGetInfo(true)
        })
        .catch(error => console.log(error))
    }
  }

  return (
    <Box
      maxW={'container.sm'}
      mx={'auto'}
      minH={'100vh'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      flexDir={'column'}
      gap={8}
      bg={''}
      px={4}
      pb={8}
      pt={32}
    >
      <Heading>Fact Check API by <Text as={'span'} color={'blue.500'}>Google</Text></Heading>
      <Box
        display={'flex'}
        alignItems={'center'}
        gap={4}
        w={'full'}
      >
        <Input
          name={'text'}
          type={'text'}
          placeholder={'Enter Text to Fact Check it'}
          value={text}
          onChange={handleChange}
          autoComplete={'off'}
        />
        <CustomSubmitButton handleSubmit={handleSubmit} isSubmitting={false} label={'Fact Check'}/>
      </Box>
      <Flex flexDir={'column'} mt={12} gap={4}>
        {didWeGetInfo && claims.length > 0 ? claims.map((item, index) => {
          return (
            <ClaimDetailsCard key={index} item={item}/>
          )
        }) : didWeGetInfo ? 'No Claim Found' : ''}
      </Flex>
    </Box>
  );
};

export default FactCheckApi;