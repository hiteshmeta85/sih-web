import * as Yup from "yup";
import {object} from "yup";

const loginSchema = object({
  name: Yup.string().required('Full Name Required.'),
  email: Yup.string().email().required('Email Required.'),
  password: Yup.string().required('Password Required.'),
  passwordConfirmation: Yup.string().required('Password Required.').oneOf([Yup.ref('password'), null], 'Passwords must match.'),
  address: Yup.string().required('Address Required.').min('20', 'Too short.'),
  pincode: Yup.number().required('Pincode Required.').min(100000, 'Not Valid.').max(999999, 'Not Valid.'),
  phone: Yup.number().required('Phone Number Required.').positive().integer('Phone number must be an integer.'),
})

export default loginSchema