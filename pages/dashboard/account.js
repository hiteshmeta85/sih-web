import React, {useState} from 'react';
import {Avatar, Box, Button, Flex, Grid, GridItem} from "@chakra-ui/react";
import {Formik} from "formik";
import CustomSubmitButton from "../../components/Button/CustomSubmitButton";
import CustomInput from "../../components/Input/CustomInput";
import DashboardContainer from "./_layout";

const Account = () => {

  const [isFormEditable, setIsFormEditable] = useState(false)

  const customStyle = {
    color: isFormEditable ? '' : '#a4a4a4',
    border: '1px solid lightgray',
    borderRadius: '8px',
    padding: '4px 8px',
  }

  return (
    <DashboardContainer title={'Account'}>
      <Box
        borderRadius={'md'}
        px={{base: 2, md: 4, lg: 6}}
        pt={{base: 4, md: 6, lg: 6}}
        pb={{base: 6, md: 8, lg: 10}}
        bg={'white'}
      >
        <Flex justifyContent={'end'}>
          <Button
            onClick={()=>{setIsFormEditable(true)}}
            visibility={isFormEditable ? 'hidden' : 'block'}
            bg={'blackAlpha.800'}
            _hover={{bg: 'blackAlpha.700'}}
            _active={{bg: 'blackAlpha.800'}}
            color={'white'}
            mb={4}
            px={6}
            rounded={'full'}
          >
            Edit
          </Button>
        </Flex>
        <Formik
          initialValues={{
            name: `Hitesh Meta`,
            email: `meta.hitesh85@gmail.com`,
            phone: `8485850146`,
            password: `@Hitesh85`,
            address: 'Pillai College of Engineering, New Panvel',
            pincode: '410206',
          }}
          onSubmit={(values, {setSubmitting}) => {
            setSubmitting(false);
            console.log(values)
          }}
        >
          {({
            handleSubmit, isSubmitting, isValid, dirty, values
          }) => (
            <Grid
              templateColumns='repeat(6, 1fr)'
              gap={4}
            >
              <GridItem colSpan={{base: 6, md:2}} mx={'auto'}>
                <Avatar size='2xl' name={values.name} bgColor={'#853E8A'} color={'white'} mt={4}/>
              </GridItem>
              <GridItem colSpan={{base: 6, md:3}} display={'flex'} flexDir={'column'} gap={4}>
                <CustomInput styles={customStyle} disabled={!isFormEditable} label={"Name"} type={"text"} name={"name"}/>
                <CustomInput styles={customStyle} disabled={!isFormEditable} label={"Email"} type={"email"} name={"email"}/>
                <CustomInput styles={customStyle} disabled={!isFormEditable} label={"Password"} type={"password"} name={"password"}/>
                <CustomInput styles={customStyle} disabled={!isFormEditable} label={"Address"} type={"text"} name={"address"}/>
                <CustomInput styles={customStyle} disabled={!isFormEditable} label={"Phone"} type={"number"} name={"phone"}/>
                <CustomInput styles={customStyle} disabled={!isFormEditable} label={"Pincode"} type={"number"} name={"pincode"}/>
                {isFormEditable && <CustomSubmitButton handleSubmit={handleSubmit} label={'Submit'} isSubmitting={isSubmitting}/>}
              </GridItem>
            </Grid>)}
        </Formik>
      </Box>
    </DashboardContainer>
  );
};

export default Account;
