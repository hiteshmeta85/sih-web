import React from 'react';
import {Box, Text} from "@chakra-ui/react";
import {ErrorMessage, Form, Formik} from "formik";
import fileUploadSchema from "../../lib/schemas/fileUploadSchema";
import axios from "axios";
import CustomSubmitButton from "../Button/CustomSubmitButton";

const FileUploadForm = () => {
  return (
    <Box>
      <Text as={'span'} fontSize={'xl'} fontWeight={'semibold'} my={1}>Upload File</Text>
      <Box py={'1px'} bg={'blackAlpha.800'} mb={8}/>
      <Formik
        initialValues={{
          file: null,
        }}
        validationSchema={fileUploadSchema}
        onSubmit={(values, props) => {
          let data = new FormData();
          data.append('file', values.file);
          data.append('fileName', values.file);
          axios
            .post("url", data, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((response) => {
              console.log(response);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        {({
          isSubmitting, handleSubmit, setFieldValue
        }) => {
          return (
            <Form>
              <input
                id="file" name="file" type="file"
                onChange={(event) => {
                  setFieldValue("file", event.currentTarget.files[0]);
                }}
                multiple
                style={{padding: '16px', border: '1px solid lightgray', borderRadius: '6px'}}
              />
              <Box mt={4}>
                <ErrorMessage name="file"/>
                <CustomSubmitButton handleSubmit={handleSubmit} label={'Upload'} isSubmitting={isSubmitting}/>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default FileUploadForm;