import * as Yup from "yup";
import {object} from "yup";

const alertSchema = object({
  title: Yup.string().required('Title Required.'),
  description: Yup.string().required('Description Required.'),
  labels: Yup.array().min(1, 'Select at least one label.').of(Yup.string().required()).required(),
  severityType: Yup.string().required('Select severity.'),
  geolocation_lat: Yup.number(),
  geolocation_lng: Yup.number(),
})

export default alertSchema