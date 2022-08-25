import * as Yup from "yup";
import {object} from "yup";

const alertSchema = object({
  first: Yup.string().required('First Name Required.'),
  last: Yup.string().required('Last Name Required.'),
  email: Yup.string().email('Enter a valid email.').required('Email Required.'),
  phone: Yup.number().required('Phone Number Required.').positive().integer('Phone number must be an integer.'),
  message: Yup.string().required('Description Required.'),
  labels: Yup.array().min(1, 'Select at least one label.').of(Yup.string().required()).required(),
  address: Yup.string(),
  geolocation_lat: Yup.number(),
  geolocation_lng: Yup.number(),
})

export default alertSchema