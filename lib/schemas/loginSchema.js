import {object} from "yup";
import * as Yup from "yup";

const loginSchema = object({
    email: Yup.string().email('Enter a valid email.').required('Email Required.'),
    password: Yup.string().required('Password Required.'),
})

export default loginSchema