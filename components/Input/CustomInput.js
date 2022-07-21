import {Box, FormLabel} from '@chakra-ui/react';
import {ErrorMessage, Field, useField} from 'formik';

const CustomInput = ({...props}) => {
  const [field, meta] = useField(props);
  const styleFromProps = props.styles || {};
  const defaultStyles = {
    borderBottom: "1px solid #E7E8EC", paddingBottom:'0.2rem', width: "100%", outline: "none", background: "transparent", marginBottom: 0
  }

  return (
    <Box w={'full'}>
      <FormLabel style={{fontWeight: 600}}>{props.label}</FormLabel>
      <Field
        placeholder={props.placeholder}
        autoComplete='off' {...field} {...props}
        className={`${meta.touched && meta.error && `is-invalid`}`}
        style={{ ...defaultStyles, ...styleFromProps } }
      />
      <Box color={'gray.500'} mt={1} fontSize={'xs'} fontWeight={'semibold'}>
        <ErrorMessage name={field.name}/>
      </Box>
    </Box>
  );
};

export default CustomInput;