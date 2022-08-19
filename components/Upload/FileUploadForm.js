import React from 'react';
import {Box, Flex, Text} from "@chakra-ui/react";
import {ErrorMessage, Form, Formik} from "formik";
import fileUploadSchema from "../../lib/schemas/fileUploadSchema";
import axios from "axios";
import CustomSubmitButton from "../Button/CustomSubmitButton";
import {AiOutlineFileAdd} from "react-icons/ai";

const FileUploadForm = ({title, label = 'Select File', url, setResponseData, logo}) => {
  return (
    <Box>
      <Flex alignItems={'center'} justifyContent={'space-between'} gap={2} fontSize={'xl'} fontWeight={'semibold'} my={1}>
        {title && <Text as={'span'}>{title}</Text>}
        {logo || <AiOutlineFileAdd size={'2rem'}/>}
      </Flex>
      <Box py={'1px'} bg={'blackAlpha.800'} mt={3} mb={4}/>
      <Formik
        initialValues={{
          file: null,
        }}
        validationSchema={fileUploadSchema}
        onSubmit={(values, {resetForm, setSubmitting}) => {
          let data = new FormData();
          data.append('file', values.file);
          data.append('fileName', values.file);
          axios
            .post(`${url}`, data, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((response) => {
              setResponseData(response.data)
              resetForm()
            })
            .catch((err) => {
              console.log(err);
            });
          setSubmitting(false)
        }}
      >
        {({
          isSubmitting, handleSubmit, setFieldValue, values
        }) => {
          return (
            <Form>
              <Flex alignItems={'start'} justifyContent={'space-between'}>
                <label htmlFor="file" style={{
                  padding: "10px 80px",
                  borderRadius: '4px',
                  border: '1px solid black',
                  background: '#F2F2F2',
                  cursor: 'pointer',
                  boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px'
                }}>
                  {values.file ? values.file.name : label}
                </label>
                <input
                  id="file" name="file" type="file"
                  onChange={(event) => {
                    setFieldValue("file", event.currentTarget.files[0]);
                  }}
                  multiple
                  style={{visibility: "hidden"}}
                />
                <CustomSubmitButton handleSubmit={handleSubmit} label={'Submit'} isSubmitting={isSubmitting}/>
              </Flex>
              <Box mt={1}>
                <ErrorMessage name="file"/>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default FileUploadForm;