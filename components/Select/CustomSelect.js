import React from 'react';
import ReactSelect from "./ReactSelect";
import {ErrorMessage, Field, useField} from "formik";
import {Box, FormLabel} from "@chakra-ui/react";

const CustomSelect = ({...props}) => {
  const [field, meta] = useField(props)

  return (
    <Box w={'full'}>
      <FormLabel style={{fontWeight: 600}}>{props.label}</FormLabel>
      <Field
        options={props.options}
        placeholder={props.placeholder}
        component={ReactSelect}
        isMulti={props.isMulti || true}
        {...field} {...props}
        style={{width: "100%", paddingTop: '0.5rem', paddingRight: '0.5rem'}}
        className={`${meta.touched && meta.error && `is-invalid`}`}
      />
      <Box color={'gray.500'} mt={1} fontSize={'xs'} fontWeight={'semibold'}>
        <ErrorMessage name={field.name}/>
      </Box>
    </Box>
  );
};

export default CustomSelect;