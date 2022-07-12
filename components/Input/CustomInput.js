import {Box, FormLabel, Input} from '@chakra-ui/react';
import {ErrorMessage, Field, useField} from 'formik';

const CustomInput = ({...props}) => {
  const [field, meta] = useField(props);

  return (
    <Box>
      <FormLabel style={{fontWeight: 600}}>{props.label}</FormLabel>
      <Field autoComplete='off' {...field} {...props}
             className={`${meta.touched && meta.error && `is-invalid`}`}
             style={{borderBottom: "1px solid #E7E8EC", width: "100%", outline: "none"}}
      />
      <Box color={'gray.500'} mt={1} pt={0} fontSize={'xs'} fontWeight={'semibold'}>
        <ErrorMessage name={field.name}/>
      </Box>
    </Box>
  );
};

export default CustomInput;