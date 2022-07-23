import React from 'react';
import reportSchema from "../../lib/schemas/reportSchema";
import {Form, Formik} from "formik";
import {Box, Flex, Text} from "@chakra-ui/react";
import DatePickerField from "../DatePicker/DatePicker";
import CustomSubmitButton from "../Button/CustomSubmitButton";
import CustomResetButton from "../Button/CustomResetButton";

const CreateReportForm = () => {
  return (
    <Formik
      initialValues={{
        startDate: '',
        endDate: '',
      }}
      validationSchema={reportSchema}
      onSubmit={(values, {setSubmitting}) => {
        setSubmitting(false);
        console.log(values)
      }}>
      {({
        handleSubmit, isSubmitting, isValid, dirty, setFieldValue, values
      }) => (
        <Form>
          <Text as={'span'} fontSize={'xl'} fontWeight={'semibold'} my={1}>Create Report</Text>
          <Box py={'1px'} bg={'blackAlpha.800'} mb={8}/>
          <Text mb={4} fontSize={''} fontWeight={'semibold'}>Pick Date Range <Text as={'span'} fontWeight={'light'}>(optional)</Text></Text>
          <Flex my={4} gap={4} maxW={'lg'}>
            <DatePickerField name={'startDate'} label={'Start Date'}/>
            <DatePickerField name={'endDate'} label={'End Date'}/>
          </Flex>
          <Flex gap={4}>
            <CustomSubmitButton handleSubmit={handleSubmit} isSubmitting={isSubmitting} label={'Download Reports'}/>
            <CustomResetButton label={'Reset'}/>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default CreateReportForm;