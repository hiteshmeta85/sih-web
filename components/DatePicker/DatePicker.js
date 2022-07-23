import React from "react";
import {ErrorMessage, Field} from "formik";
import {Box, FormLabel} from "@chakra-ui/react";
import DateView from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'

export const DatePickerField = (props) => {
  const {label, name, ...rest} = props

  return (
    <Box w={'full'}>
      <FormLabel style={{fontWeight: 600}}>{label}</FormLabel>
      <Field name={name}>
        {
          ({form, field}) => {
            const {setFieldValue} = form
            const {value} = field
            return (
              <Box>
                <DateView
                  id={name}
                  {...field}
                  {...rest}
                  selected={value}
                  onChange={val => setFieldValue(name, val)}
                />
              </Box>
            )
          }
        }
      </Field>
      <Box color={'gray.500'} mt={1} fontSize={'xs'} fontWeight={'semibold'}>
        <ErrorMessage name={name}/>
      </Box>
    </Box>
  );
};

export default DatePickerField;